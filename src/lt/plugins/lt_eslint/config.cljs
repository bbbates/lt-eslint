(ns lt.plugins.lt-eslint.config
  (:require [lt.objs.files :as files]
            [lt.objs.notifos :as notifos]
            [lt.plugins.lt-eslint.rules :as rules]))

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
    (try
      (js/JSON.parse (:content content))
      (catch :default e
        (notifos/set-msg! (str "Could not parse eslint config json file " file ". Ignoring this file.") {:class "error"})
        nil))))

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
    (js->clj (find-eslint-config-file ed) :keywordize-keys true)
    config-map
    rules/default-config))
