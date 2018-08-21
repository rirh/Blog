module.exports = {
    "extends": "standard",

    "env": {
        "es6": true,
        "node": true
    },

    // "extends": "eslint:recommended",
    "rules": {
        "no-param-reassign": 0,
        "no-bitwise": ["error", {
            "allow": ["~"]
        }],
        "no-debugger": 0,
        "no-restricted-syntax": 0,
        "function-paren-newline": ["error", "consistent"],
        "no-plusplus": 0,
        "no-prototype-builtins": 0

    }

};