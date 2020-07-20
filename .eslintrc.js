module.exports = {
    env: {
        browser: true,
        es2020: true,
        node: true,
        jest: true,
    },
    extends: ['eslint:recommended', 'plugin:prettier/recommended'],
    plugins: ['jest'],
    parserOptions: {
        ecmaVersion: 11,
        sourceType: 'module',
    },
    rules: {
        'jest/no-disabled-tests': 'warn',
        'jest/no-focused-tests': 'error',
        'jest/no-identical-title': 'error',
    },
};
