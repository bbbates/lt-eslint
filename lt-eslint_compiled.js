if(!lt.util.load.provided_QMARK_('lt.plugins.lt-eslint.rules')) {
goog.provide('lt.plugins.lt_eslint.rules');
goog.require('cljs.core');
lt.plugins.lt_eslint.rules.default_config = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"parserOptions","parserOptions",1693172977),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ecmaVersion","ecmaVersion",1756574008),6,new cljs.core.Keyword(null,"ecmaFeatures","ecmaFeatures",4256224385),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"experimentalObjectRestSpread","experimentalObjectRestSpread",1021971328),true,new cljs.core.Keyword(null,"jsx","jsx",1014009793),true], null),new cljs.core.Keyword(null,"sourceType","sourceType",4197439847),"module"], null),new cljs.core.Keyword(null,"env","env",1014004831),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"es6","es6",1014004922),true,new cljs.core.Keyword(null,"node","node",1017291124),true], null),new cljs.core.Keyword(null,"plugins","plugins",538274578),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["standard","promise"], null),new cljs.core.Keyword(null,"globals","globals",1134978210),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"document","document",1875625101),false,new cljs.core.Keyword(null,"navigator","navigator",1766727113),false,new cljs.core.Keyword(null,"window","window",4521119586),false], null),new cljs.core.Keyword(null,"rules","rules",1122778217),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"no-regex-spaces","no-regex-spaces",1902528625),new cljs.core.Keyword(null,"no-trailing-spaces","no-trailing-spaces",3250897508),new cljs.core.Keyword(null,"no-const-assign","no-const-assign",3668138647),new cljs.core.Keyword(null,"arrow-spacing","arrow-spacing",4183102961),new cljs.core.Keyword(null,"new-cap","new-cap",2857943447),new cljs.core.Keyword(null,"no-new-object","no-new-object",4473827082),new cljs.core.Keyword(null,"no-invalid-regexp","no-invalid-regexp",4795070109),new cljs.core.Keyword(null,"no-floating-decimal","no-floating-decimal",3894845064),new cljs.core.Keyword(null,"indent","indent",4124632094),new cljs.core.Keyword(null,"no-useless-constructor","no-useless-constructor",2335902387),new cljs.core.Keyword(null,"no-new-require","no-new-require",3652675486),new cljs.core.Keyword(null,"no-undef","no-undef",577913650),new cljs.core.Keyword(null,"no-implied-eval","no-implied-eval",3601180319),new cljs.core.Keyword(null,"no-debugger","no-debugger",1396327967),new cljs.core.Keyword(null,"brace-style","brace-style",2430385417),new cljs.core.Keyword(null,"no-caller","no-caller",4150979721),new cljs.core.Keyword(null,"one-var","one-var",3986504370),new cljs.core.Keyword(null,"no-lone-blocks","no-lone-blocks",1982893471),new cljs.core.Keyword(null,"no-irregular-whitespace","no-irregular-whitespace",3252182581),new cljs.core.Keyword(null,"no-new","no-new",4267071238),new cljs.core.Keyword(null,"space-infix-ops","space-infix-ops",3018859424),new cljs.core.Keyword(null,"no-eval","no-eval",3077580954),new cljs.core.Keyword(null,"no-unneeded-ternary","no-unneeded-ternary",1267629466),new cljs.core.Keyword(null,"no-label-var","no-label-var",3867903796),new cljs.core.Keyword(null,"no-delete-var","no-delete-var",2752631555),new cljs.core.Keyword(null,"no-sparse-arrays","no-sparse-arrays",4701487597),new cljs.core.Keyword(null,"space-before-function-paren","space-before-function-paren",3595077838),new cljs.core.Keyword(null,"no-sequences","no-sequences",3363104568),new cljs.core.Keyword(null,"no-inner-declarations","no-inner-declarations",3271302990),new cljs.core.Keyword(null,"no-proto","no-proto",573426254),new cljs.core.Keyword(null,"no-multi-str","no-multi-str",3268684291),new cljs.core.Keyword(null,"no-array-constructor","no-array-constructor",3523858668),new cljs.core.Keyword(null,"no-iterator","no-iterator",2031049324),new cljs.core.Keyword(null,"no-new-func","no-new-func",2179264719),new cljs.core.Keyword(null,"no-fallthrough","no-fallthrough",4326153296),new cljs.core.Keyword(null,"yoda","yoda",1017618821),new cljs.core.Keyword(null,"no-dupe-args","no-dupe-args",1127651946),new cljs.core.Keyword(null,"keyword-spacing","keyword-spacing",1147527121),new cljs.core.Keyword(null,"no-extra-parens","no-extra-parens",2926139652),new cljs.core.Keyword(null,"no-func-assign","no-func-assign",3782892926),new cljs.core.Keyword(null,"no-labels","no-labels",4408337661),new cljs.core.Keyword(null,"space-unary-ops","space-unary-ops",2920277119),new cljs.core.Keyword(null,"space-before-blocks","space-before-blocks",629042815),new cljs.core.Keyword(null,"no-unused-vars","no-unused-vars",4503824681),new cljs.core.Keyword(null,"no-dupe-class-members","no-dupe-class-members",1936271739),new cljs.core.Keyword(null,"padded-blocks","padded-blocks",585499349),new cljs.core.Keyword(null,"handle-callback-err","handle-callback-err",2072862420),new cljs.core.Keyword(null,"no-dupe-keys","no-dupe-keys",1127937921),new cljs.core.Keyword(null,"yield-star-spacing","yield-star-spacing",2537062778),new cljs.core.Keyword(null,"jsx-quotes","jsx-quotes",3272846375),new cljs.core.Keyword(null,"no-extra-bind","no-extra-bind",1690344152),new cljs.core.Keyword(null,"camelcase","camelcase",666433624),new cljs.core.Keyword(null,"no-negated-in-lhs","no-negated-in-lhs",4083333464),new cljs.core.Keyword(null,"no-throw-literal","no-throw-literal",2042245422),new cljs.core.Keyword(null,"template-curly-spacing","template-curly-spacing",2618260898),new cljs.core.Keyword(null,"no-ex-assign","no-ex-assign",871114159),new cljs.core.Keyword(null,"comma-dangle","comma-dangle",1118656601),new cljs.core.Keyword(null,"no-useless-escape","no-useless-escape",1564181580),new cljs.core.Keyword(null,"spaced-comment","spaced-comment",1377040162),new cljs.core.Keyword(null,"no-unexpected-multiline","no-unexpected-multiline",2901294639),new cljs.core.Keyword(null,"no-path-concat","no-path-concat",551285538),new cljs.core.Keyword(null,"no-duplicate-case","no-duplicate-case",1983051696),new cljs.core.Keyword(null,"semi-spacing","semi-spacing",4520623190),new cljs.core.Keyword(null,"no-new-wrappers","no-new-wrappers",3820677067),new cljs.core.Keyword(null,"no-octal","no-octal",572060081),new cljs.core.Keyword(null,"use-isnan","use-isnan",3682197341),new cljs.core.Keyword(null,"eol-last","eol-last",3809570803),new cljs.core.Keyword(null,"no-shadow-restricted-names","no-shadow-restricted-names",721493961),new cljs.core.Keyword(null,"no-extra-boolean-cast","no-extra-boolean-cast",4641507167),new cljs.core.Keyword(null,"semi","semi",1017430752),new cljs.core.Keyword(null,"no-cond-assign","no-cond-assign",3505703776),new cljs.core.Keyword(null,"block-spacing","block-spacing",2488902261),new cljs.core.Keyword(null,"constructor-super","constructor-super",1882188634),new cljs.core.Keyword(null,"key-spacing","key-spacing",3086846535),new cljs.core.Keyword(null,"wrap-iife","wrap-iife",931869940),new cljs.core.Keyword(null,"generator-star-spacing","generator-star-spacing",4648683508),new cljs.core.Keyword(null,"valid-typeof","valid-typeof",3208892660),new cljs.core.Keyword(null,"no-unsafe-finally","no-unsafe-finally",4183308634),new cljs.core.Keyword(null,"no-spaced-func","no-spaced-func",3083464825),new cljs.core.Keyword(null,"no-empty-pattern","no-empty-pattern",816612214),new cljs.core.Keyword(null,"eqeqeq","eqeqeq",4012927094),new cljs.core.Keyword(null,"no-self-assign","no-self-assign",1000015862),new cljs.core.Keyword(null,"dot-location","dot-location",4288377643),new cljs.core.Keyword(null,"comma-style","comma-style",2001544235),new cljs.core.Keyword(null,"no-extend-native","no-extend-native",3085268624),new cljs.core.Keyword(null,"accessor-pairs","accessor-pairs",4464306501),new cljs.core.Keyword(null,"no-with","no-with",3078105284),new cljs.core.Keyword(null,"no-whitespace-before-property","no-whitespace-before-property",3887146001),new cljs.core.Keyword(null,"no-useless-computed-key","no-useless-computed-key",3428638890),new cljs.core.Keyword(null,"no-control-regex","no-control-regex",3338075197),new cljs.core.Keyword(null,"no-mixed-spaces-and-tabs","no-mixed-spaces-and-tabs",2865720808),new cljs.core.Keyword(null,"no-native-reassign","no-native-reassign",2676857150),new cljs.core.Keyword(null,"comma-spacing","comma-spacing",811223229),new cljs.core.Keyword(null,"new-parens","new-parens",4526483688),new cljs.core.Keyword(null,"no-redeclare","no-redeclare",1762971197),new cljs.core.Keyword(null,"no-duplicate-imports","no-duplicate-imports",3486787858),new cljs.core.Keyword(null,"quotes","quotes",4360471785),new cljs.core.Keyword(null,"curly","curly",1108931391),new cljs.core.Keyword(null,"no-return-assign","no-return-assign",3516941458),new cljs.core.Keyword(null,"space-in-parens","space-in-parens",4151966140),new cljs.core.Keyword(null,"no-multi-spaces","no-multi-spaces",4168699711),new cljs.core.Keyword(null,"no-useless-call","no-useless-call",2413281385),new cljs.core.Keyword(null,"no-multiple-empty-lines","no-multiple-empty-lines",1500510784),new cljs.core.Keyword(null,"no-empty-character-class","no-empty-character-class",4286880186),new cljs.core.Keyword(null,"no-unreachable","no-unreachable",3476898874),new cljs.core.Keyword(null,"no-octal-escape","no-octal-escape",1357523777),new cljs.core.Keyword(null,"operator-linebreak","operator-linebreak",2525889300),new cljs.core.Keyword(null,"no-new-symbol","no-new-symbol",4609671523),new cljs.core.Keyword(null,"no-unmodified-loop-condition","no-unmodified-loop-condition",2816822371),new cljs.core.Keyword(null,"no-self-compare","no-self-compare",2238517090),new cljs.core.Keyword(null,"no-this-before-super","no-this-before-super",2969379042),new cljs.core.Keyword(null,"no-class-assign","no-class-assign",1280923362),new cljs.core.Keyword(null,"no-undef-init","no-undef-init",3111322223),new cljs.core.Keyword(null,"no-obj-calls","no-obj-calls",1383408613)],[2,2,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"before","before",3915985649),true,new cljs.core.Keyword(null,"after","after",1106639182),true], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"newIsCap","newIsCap",2370850810),true,new cljs.core.Keyword(null,"capIsNew","capIsNew",924365526),false], null)], null),2,2,2,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,2,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"SwitchCase","SwitchCase",2659564566),1], null)], null),2,2,2,2,2,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"1tbs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"allowSingleLine","allowSingleLine",1795354615),true], null)], null),2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"initialized","initialized",2247924294),"never"], null)], null),2,2,2,2,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"defaultAssignment","defaultAssignment",2352877408),false], null)], null),2,2,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"always"], null),2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"functions"], null),2,2,2,2,2,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"never"], null),2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"before","before",3915985649),true,new cljs.core.Keyword(null,"after","after",1106639182),true], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"functions"], null),2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"allowLoop","allowLoop",1385694463),false,new cljs.core.Keyword(null,"allowSwitch","allowSwitch",2029641551),false], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"words","words",1127222811),true,new cljs.core.Keyword(null,"nonwords","nonwords",2440698734),false], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"always"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"vars","vars",1017516446),"all",new cljs.core.Keyword(null,"args","args",1016906831),"none"], null)], null),2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"never"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"^(err|error)$"], null),2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"both"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"prefer-single"], null),2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"properties","properties",4382818469),"never"], null)], null),2,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"never"], null),2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"never"], null),2,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"always",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"markers","markers",1853155051),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["global","globals","eslint","eslint-disable","*package","!",","], null)], null)], null),2,2,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"before","before",3915985649),false,new cljs.core.Keyword(null,"after","after",1106639182),true], null)], null),2,2,2,2,2,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"never"], null),2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"always"], null),2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"beforeColon","beforeColon",4187998866),false,new cljs.core.Keyword(null,"afterColon","afterColon",2530309717),true], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"any"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"before","before",3915985649),true,new cljs.core.Keyword(null,"after","after",1106639182),true], null)], null),2,2,2,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"allow-null"], null),2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"property"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"last"], null),2,2,2,2,2,2,2,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"before","before",3915985649),false,new cljs.core.Keyword(null,"after","after",1106639182),true], null)], null),2,2,2,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"single","avoid-escape"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"multi-line"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"except-parens"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"never"], null),2,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",1014012118),1], null)], null),2,2,2,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"after",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"overrides","overrides",4558901657),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"?","?",1013904305),"before",":","before"], null)], null)], null),2,2,2,2,2,2,2])], null);
}
if(!lt.util.load.provided_QMARK_('lt.plugins.lt-eslint.config')) {
goog.provide('lt.plugins.lt_eslint.config');
goog.require('cljs.core');
goog.require('lt.plugins.lt_eslint.rules');
goog.require('lt.plugins.lt_eslint.rules');
goog.require('lt.objs.notifos');
goog.require('lt.objs.notifos');
goog.require('lt.objs.files');
goog.require('lt.objs.files');
lt.plugins.lt_eslint.config.find_file_in_parent = (function find_file_in_parent(from_path,filename){var roots = lt.objs.files.get_roots.call(null);var cur = from_path;var prev = "";while(true){
if(cljs.core.truth_((function (){var or__19803__auto__ = cljs.core.empty_QMARK_.call(null,cur);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = roots.call(null,cur);if(cljs.core.truth_(or__19803__auto____$1))
{return or__19803__auto____$1;
} else
{return cljs.core._EQ_.call(null,cur,prev);
}
}
})()))
{return null;
} else
{var file = lt.objs.files.join.call(null,cur,filename);if(cljs.core.truth_(lt.objs.files.exists_QMARK_.call(null,file)))
{return file;
} else
{{
var G__21333 = lt.objs.files.parent.call(null,cur);
var G__21334 = cur;
cur = G__21333;
prev = G__21334;
continue;
}
}
}
break;
}
});
lt.plugins.lt_eslint.config.read_json_from_file = (function read_json_from_file(file){var temp__4092__auto__ = (function (){var and__19791__auto__ = lt.objs.files.exists_QMARK_.call(null,file);if(cljs.core.truth_(and__19791__auto__))
{return lt.objs.files.open_sync.call(null,file);
} else
{return and__19791__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var content = temp__4092__auto__;try{return JSON.parse(new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(content));
}catch (e21328){var e = e21328;lt.objs.notifos.set_msg_BANG_.call(null,[cljs.core.str("Could not parse eslint config json file "),cljs.core.str(file),cljs.core.str(". Ignoring this file.")].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"error"], null));
return null;
}} else
{return null;
}
});
lt.plugins.lt_eslint.config.find_eslint_config_file = (function find_eslint_config_file(ed){var path = new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));var eslint_config_file = cljs.core.first.call(null,cljs.core.keep.call(null,((function (path){
return (function (p1__21329_SHARP_){return lt.plugins.lt_eslint.config.find_file_in_parent.call(null,path,[cljs.core.str(".eslintrc"),cljs.core.str(p1__21329_SHARP_)].join(''));
});})(path))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,".json"], null)));var package_json_file = lt.plugins.lt_eslint.config.find_file_in_parent.call(null,path,"package.json");if(cljs.core.truth_(eslint_config_file))
{return lt.plugins.lt_eslint.config.read_json_from_file.call(null,eslint_config_file);
} else
{if(cljs.core.truth_(package_json_file))
{return lt.plugins.lt_eslint.config.read_json_from_file.call(null,package_json_file).eslintConfig;
} else
{return null;
}
}
});
lt.plugins.lt_eslint.config.eslint_config = (function eslint_config(ed,p__21330){var vec__21332 = p__21330;var config_map = cljs.core.nth.call(null,vec__21332,0,null);var or__19803__auto__ = cljs.core.js__GT_clj.call(null,lt.plugins.lt_eslint.config.find_eslint_config_file.call(null,ed),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);if(cljs.core.truth_(or__19803__auto__))
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = config_map;if(cljs.core.truth_(or__19803__auto____$1))
{return or__19803__auto____$1;
} else
{return lt.plugins.lt_eslint.rules.default_config;
}
}
});
}
if(!lt.util.load.provided_QMARK_('lt.plugins.lt-eslint')) {
goog.provide('lt.plugins.lt_eslint');
goog.require('cljs.core');
goog.require('lt.plugins.lt_eslint.rules');
goog.require('lt.plugins.lt_eslint.rules');
goog.require('lt.plugins.lt_eslint.config');
goog.require('lt.plugins.lt_eslint.config');
goog.require('lt.object');
goog.require('lt.object');
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.lt-eslint","eslint","lt.plugins.lt-eslint/eslint",617473337),new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.lt-eslint","do-eslint","lt.plugins.lt-eslint/do-eslint",1996737983)], null),new cljs.core.Keyword(null,"linter-name","linter-name",2860858810),"eslint",new cljs.core.Keyword(null,"timeout","timeout",3994960083),10000,new cljs.core.Keyword(null,"init","init",1017141378),(function() { 
var G__21297__delegate = function (this$,ed,opts){return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"config","config",3954079412),lt.plugins.lt_eslint.config.eslint_config.call(null,ed,opts)], null));
};
var G__21297 = function (this$,ed,var_args){
var opts = null;if (arguments.length > 2) {
  opts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__21297__delegate.call(this,this$,ed,opts);};
G__21297.cljs$lang$maxFixedArity = 2;
G__21297.cljs$lang$applyTo = (function (arglist__21298){
var this$ = cljs.core.first(arglist__21298);
arglist__21298 = cljs.core.next(arglist__21298);
var ed = cljs.core.first(arglist__21298);
var opts = cljs.core.rest(arglist__21298);
return G__21297__delegate(this$,ed,opts);
});
G__21297.cljs$core$IFn$_invoke$arity$variadic = G__21297__delegate;
return G__21297;
})()
);
lt.plugins.lt_eslint.eslint_err__GT_message = (function eslint_err__GT_message(ed,p__21284){var map__21286 = p__21284;var map__21286__$1 = ((cljs.core.seq_QMARK_.call(null,map__21286))?cljs.core.apply.call(null,cljs.core.hash_map,map__21286):map__21286);var m = map__21286__$1;var column = cljs.core.get.call(null,map__21286__$1,new cljs.core.Keyword(null,"column","column",3954034376));var line = cljs.core.get.call(null,map__21286__$1,new cljs.core.Keyword(null,"line","line",1017226086));var severity = cljs.core.get.call(null,map__21286__$1,new cljs.core.Keyword(null,"severity","severity",2492204655));var message = cljs.core.get.call(null,map__21286__$1,new cljs.core.Keyword(null,"message","message",1968829305));var ruleId = cljs.core.get.call(null,map__21286__$1,new cljs.core.Keyword(null,"ruleId","ruleId",4388996265));return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"severity","severity",2492204655),((cljs.core._EQ_.call(null,1,severity))?new cljs.core.Keyword(null,"warning","warning",2138350350):new cljs.core.Keyword(null,"error","error",1110689146)),new cljs.core.Keyword(null,"message","message",1968829305),clojure.string.join.call(null,"\n",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [message,(cljs.core.truth_(ruleId)?[cljs.core.str("("),cljs.core.str(ruleId),cljs.core.str(")")].join(''):null)], null)),new cljs.core.Keyword(null,"from","from",1017056028),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(line - 1),(column - 1)], null),new cljs.core.Keyword(null,"to","to",1013907949),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(line - 1),column], null)], null);
});
lt.plugins.lt_eslint.__BEH__do_eslint = (function __BEH__do_eslint(obj,editor_text,callback,ed){var results = eslint.verify(editor_text,cljs.core.clj__GT_js.call(null,new cljs.core.Keyword(null,"config","config",3954079412).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,obj))));var errors = cljs.core.map.call(null,cljs.core.partial.call(null,lt.plugins.lt_eslint.eslint_err__GT_message,ed),cljs.core.js__GT_clj.call(null,results,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true));return callback.call(null,errors);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.lt-eslint","do-eslint","lt.plugins.lt-eslint/do-eslint",1996737983),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.lt_eslint.__BEH__do_eslint,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.lt-lint","validate","lt.plugins.lt-lint/validate",2932857937),null], null), null));
}

//# sourceMappingURL=lt-eslint_compiled.js.map