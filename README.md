# ESLint for Lighttable

[ESLint](http://eslint.org) integration for Lighttable, using the [Linting](https://github.com/bbbates/lt-lint) plugin.

## Configuration

The Lighttable ESLint plugin, as of version 0.0.2, uses a "browserified" version of ESLint. This means, that:

* Custom rules won't be loaded
* The configuration file rules are loaded differently from the eslint CLI tool
* YAML config files are currently not supported (JSON v3 only - which regular js comments in json files will cause the file to be skipped)

Configuration files are loaded from the following sources, in precedence order:

1. A ```.eslintrc``` or ```.eslintrc.json``` file in the project directory of the current editor.
2. A ```"eslintConfig"``` section in the package.json file in the project directory of the current editor.
3. Specified in the ```:lt.plugins.lt-lint/register-linter``` behaviour - e.g.
```  [:editor.javascript :lt.plugins.lt-lint/register-linter
                         [:lt.plugins.lt-eslint/eslint
                         {:parserOptions {:ecmaVersion 6
                                          :ecmaFeatures {:experimentalObjectRestSpread true :jsx true}
                                          :sourceType "module"}
                          :rules {:no-multiple-empty-lines [2 {:max 1}]
                                  :semi [2 "never"]
                                  :no-cond-assign 2}}]] ```
4. Some default rules, specified in ```lt.plugins.lt-eslint.rules/default-config```.


## License

Copyright © 2016 Brendan Bates

Distributed under the Eclipse Public License, the same as Clojure.

