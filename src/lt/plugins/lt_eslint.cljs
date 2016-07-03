(ns lt.plugins.lt-eslint
  (:require [lt.object :as object]
            [lt.plugins.lt-eslint.config :as config]
            [lt.plugins.lt-eslint.rules :as rules])
  (:require-macros [lt.macros :refer [behavior]]))

(object/object* ::eslint
                :behaviors [::do-eslint]
                :linter-name "eslint"
                :timeout 10000
                :init (fn [this ed & opts]
                        (object/merge! this {:config (config/eslint-config ed opts)})))

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
