"use strict";

var linter = require("eslint").linter;
var ESLintTester = require("eslint-tester");
var eslintTester = new ESLintTester(linter);

eslintTester.addRuleTest("lib/rules/require-trailing-comma", {
    valid: [
        "[1,\n]",
        "[1,\n2,\n]",
        "[]",
        "[1]",
        "[1,]",
        "[1,2]",
        "[1,2,]",
        {
            code: "[1,2,]",
            args: [2, "all"],
        },
        {
            code: "[1,]",
            args: [2, "all"],
        },
        "{}",
        "{a:1}",
        //"{a:1,}",
        //"{a:1,b:2}",
        //"{a:1,b:2,}",
        //"{a:1,\n}",
        //"{a:1,\nb:2,\n}",
    ],

    invalid: [
        {
            code: "[1\n]",
            errors: [ { message: "Missing trailing comma." } ]
        },
        {
            code: "[1]",
            args: [2, "all"],
            errors: [ { message: "Missing trailing comma." } ]
        },
        {
            code: "[1,\n2\n]",
            errors: [ { message: "Missing trailing comma." } ]
        },
        {
            code: "[1,2]",
            args: [2, "all"],
            errors: [ { message: "Missing trailing comma." } ]
        },
//        {
//            code: "{a:1\n}",
//            errors: [ { message: "Missing trailing comma." } ]
//        },
//        {
//            code: "{a:1,\nb:2\n}",
//            errors: [ { message: "Missing trailing comma." } ]
//        },
    ]
});
