(ns lt.plugins.lt-eslint
  (:require [lt.object :as object]
            [lt.objs.files :as files]
            [lt.plugins.lt-eslint.rules :as rules])
  (:require-macros [lt.macros :refer [behavior]]))

(defn- find-file-in-parent
  [from-path filename]
  (let [roots (files/get-roots)]
    (loop [cur from-path prev ""]
      (when-not (or (empty? cur)
                    (roots cur)
                    (= cur prev))
        (let [file (files/join cur filename)]
          (if (files/exists? file)
            file
            (recur (files/parent cur) cur)))))))

(defn- read-json-from-file
  [file]
  (when-let [content (and (files/exists? file) (files/open-sync file))]
    (js/JSON.parse (:content content))))

(defn- find-eslint-config-file
  [ed]
  (let [path (-> @ed :info :path)
        eslint-config-file (first (keep #(find-file-in-parent path (str ".eslintrc" %)) [nil ".json"]))
        package-json-file (find-file-in-parent path "package.json")]
    (cond
      eslint-config-file (read-json-from-file eslint-config-file)
      package-json-file (.-eslintConfig (read-json-from-file package-json-file)))))

(defn- eslint-config
  [ed [config-map]]
  (or
    config-map
    (js->clj (find-eslint-config-file ed) :keywordize-keys true)
    rules/default-config))

;; ESLint config read from:

;; - eslint-conf.json in root of project
;; - package.json -> "eslintConfig"
;; - opts in register-linter behavior

(object/object* ::eslint
                :behaviors [::do-eslint]
                :linter-name "eslint"
                :timeout 10000
                :init (fn [this ed & opts]
                        (object/merge! this {:config (eslint-config ed opts)})))

(defn- eslint-err->message
  [ed {:keys [ruleId message severity line column] :as m}]
  {:severity (if (= 1 severity) :warning :error)
   :message (clojure.string/join "\n" [message (when ruleId (str "(" ruleId ")"))])
   :from [(dec line) (dec column)]
   :to [(dec line) column]})

(behavior ::do-eslint
          :triggers #{:lt.plugins.lt-lint/validate}
          :reaction (fn [obj editor-text callback ed]
                      (let [results (js/eslint.verify editor-text (clj->js (:config @obj)))
                            errors (map (partial eslint-err->message ed)
                                        (js->clj results :keywordize-keys true))]
                        (callback errors))))
