module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        "prettier",
        "plugin:@typescript-eslint/recommended"
    ],
    parserOptions: {
        "project": "./tsconfig.json",
        ecmaVersion: 'latest',
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
    },
    plugins: [
        '@typescript-eslint',
    ],
    rules: {

    },
};