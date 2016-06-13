(ns lt.plugins.lt-eslint.rules)

(def default-config
  {:parserOptions {:ecmaVersion 6
                   :ecmaFeatures {:experimentalObjectRestSpread true
                                  :jsx true}
                   :sourceType "module"}
   :env {:es6 true
         :node true}
   :plugins ["standard" "promise"]
   :globals {:document false
             :navigator false
             :window false}
   :rules {:no-multiple-empty-lines [2 {:max 1}]
           :semi [2 "never"]
           :no-cond-assign 2
           :space-infix-ops 2
           :no-octal-escape 2
           :no-dupe-keys 2
           :no-this-before-super 2
           :template-curly-spacing [2 "never"]
           :no-class-assign 2
           :no-path-concat 2
           :spaced-comment [2 "always" {:markers ["global" "globals" "eslint" "eslint-disable" "*package" "!" ","]}]
           :no-self-compare 2
           :no-unmodified-loop-condition 2
           :no-new-symbol 2
           :no-multi-str 2
           :no-delete-var 2
           :no-with 2
           :no-extra-parens [2 "functions"]
           :no-trailing-spaces 2
           :accessor-pairs 2
           :yoda [2 "never"]
           :no-obj-calls 2
           :no-new 2
           :jsx-quotes [2 "prefer-single"]
           :key-spacing [2 {:beforeColon false, :afterColon true}]
           :new-parens 2
           :no-mixed-spaces-and-tabs 2
           :no-floating-decimal 2
           :no-useless-call 2
           :no-caller 2
           :quotes [2 "single" "avoid-escape"]
           :brace-style [2 "1tbs" {:allowSingleLine true}]
           :no-unused-vars [2 {:vars "all", :args "none"}]
           :no-shadow-restricted-names 2
           :no-useless-computed-key 2
           :no-dupe-args 2
           :no-new-object 2
           :comma-style [2 "last"]
           :dot-location [2 "property"]
           :no-new-wrappers 2
           :no-useless-escape 2
           :no-array-constructor 2
           :no-iterator 2
           :no-sparse-arrays 2
           :space-before-function-paren [2 "always"]
           :no-throw-literal 2
           :no-proto 2
           :no-inner-declarations [2 "functions"]
           :no-new-func 2
           :no-ex-assign 2
           :no-unexpected-multiline 2
           :no-undef-init 2
           :no-fallthrough 2
           :no-extend-native 2
           :no-duplicate-case 2
           :no-whitespace-before-property 2
           :no-regex-spaces 2
           :no-octal 2
           :arrow-spacing [2 {:before true, :after true}]
           :keyword-spacing [2 {:before true, :after true}]
           :no-return-assign [2 "except-parens"]
           :no-duplicate-imports 2
           :one-var [2 {:initialized "never"}]
           :no-undef 2
           :no-useless-constructor 2
           :eol-last 2
           :wrap-iife [2 "any"]
           :valid-typeof 2
           :handle-callback-err [2 "^(err|error)$"]
           :operator-linebreak [2 "after" {:overrides {:? "before", :: "before"}}]
           :no-label-var 2
           :generator-star-spacing [2 {:before true, :after true}]
           :no-irregular-whitespace 2
           :block-spacing [2 "always"]
           :padded-blocks [2 "never"]
           :semi-spacing [2 {:before false, :after true}]
           :eqeqeq [2 "allow-null"]
           :no-empty-pattern 2
           :no-self-assign 2
           :new-cap [2 {:newIsCap true, :capIsNew false}]
           :no-const-assign 2
           :camelcase [2 {:properties "never"}]
           :no-negated-in-lhs 2
           :no-extra-bind 2
           :no-sequences 2
           :comma-dangle [2 "never"]
           :no-spaced-func 2
           :no-unreachable 2
           :no-eval 2
           :no-unsafe-finally 2
           :yield-star-spacing [2 "both"]
           :no-unneeded-ternary [2 {:defaultAssignment false}]
           :no-empty-character-class 2
           :constructor-super 2
           :no-dupe-class-members 2
           :space-in-parens [2 "never"]
           :no-control-regex 2
           :comma-spacing [2 {:before false, :after true}]
           :no-labels [2 {:allowLoop false, :allowSwitch false}]
           :no-redeclare 2
           :no-invalid-regexp 2
           :use-isnan 2
           :indent [2 2 {:SwitchCase 1}]
           :no-native-reassign 2
           :no-func-assign 2
           :no-new-require 2
           :space-unary-ops [2 {:words true, :nonwords false}]
           :no-lone-blocks 2
           :no-debugger 2
           :space-before-blocks [2 "always"]
           :no-implied-eval 2
           :no-multi-spaces 2
           :curly [2 "multi-line"]
           :no-extra-boolean-cast 2}})
