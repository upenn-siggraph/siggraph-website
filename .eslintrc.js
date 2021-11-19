module.exports = {
    "env": {
        "browser": true,
        "jest": true,
    },
    "extends": [
        'airbnb',
        "airbnb-typescript",
        'airbnb/hooks',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:promise/recommended',
        'plugin:unicorn/recommended'
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "project": "tsconfig.json",
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2021,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint",
        "promise"
    ],
    "rules": {
        "semi": ["error", "never"],
        "linebreak-style": 0,
        // "import/prefer-default-export": "off",
        // "import/no-default-export": "error",
        "react/jsx-filename-extension": "off",
        "react/prop-types": "off",
        "react/require-default-props": "off",
        "@typescript-eslint/semi": 0,
        // weird unicorn stuff
        "unicorn/prevent-abbreviations": "off",
        "unicorn/no-array-for-each": "off",
        "unicorn/no-null": "off"
    }
};
