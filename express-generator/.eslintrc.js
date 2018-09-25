module.exports = {
    // "extends": "standard",
    "parserOptions": {
        "ecmaVersion": 8
    },
    "rules": {

        "no-param-reassign": 0,
        "no-bitwise": ["error", {
            "allow": ["~"]
        }],
        "no-debugger": 0,
        "no-restricted-syntax": 0,
        "function-paren-newline": ["error", "consistent"],
        "no-plusplus": 0,
        "no-prototype-builtins": 0,
        "import/no-extraneous-dependencies": 0,
        'import/no-unresolved': 0,
        'import/prefer-default-export': 0

    },

}