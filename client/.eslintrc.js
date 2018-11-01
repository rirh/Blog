module.exports = {
    "root": true,
    "plugins": [
        "vue"
    ],
    "extends": [
        "airbnb-base",
        "plugin:vue/recommended",
    ],
    "parser": "vue-eslint-parser",
    "parserOptions": {
        "parser": "babel-eslint",
        "ecmaVersion": 2017,
        "sourceType": "module"
    },
    "rules": {
        "vue/no-parsing-error": [2, {
            "x-invalid-end-tag": false
        }],
        "import/extensions": ["error", "ignorePackages", {
            "vue": "never"
        }],
        "no-param-reassign": 0,
        "no-bitwise": ["error", {
            "allow": ["~"]
        }],
        "no-debugger": 0,
        "no-restricted-syntax": 0,
        "function-paren-newline": ["error", "consistent"],
        "no-plusplus": 0,
        "no-prototype-builtins": 0


    },
    
};
