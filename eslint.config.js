import globals from "globals";
import pluginJs from "@eslint/js";
import stylistic from '@stylistic/eslint-plugin';

export default [
  // Базовая конфигурация ESLint
  pluginJs.configs.recommended,
  
  // Наша кастомная конфигурация
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest,
      },
      ecmaVersion: 2022,
    },
    plugins: {
      '@stylistic': stylistic,
    },
    rules: {
      // ========== БАЗОВЫЕ ПРАВИЛА (ВСЕГДА ОШИБКИ) ==========
      
      // Переменные
      'no-unused-vars': ['error', { 
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_' 
      }],
      'no-undef': 'error',
      'no-use-before-define': ['error', { 
        functions: false,
        classes: true,
        variables: true,
      }],
      'no-shadow': 'error',
      'no-undef-init': 'error',
      'no-undefined': 'error',
      'no-label-var': 'error',
      
      // Возможные ошибки
      'no-cond-assign': ['error', 'always'],
      'no-constant-condition': 'error',
      'no-control-regex': 'error',
      'no-debugger': 'error',
      'no-dupe-args': 'error',
      'no-dupe-keys': 'error',
      'no-duplicate-case': 'error',
      'no-empty': ['error', { allowEmptyCatch: true }],
      'no-empty-character-class': 'error',
      'no-ex-assign': 'error',
      'no-extra-boolean-cast': 'error',
      'no-extra-semi': 'error',
      'no-func-assign': 'error',
      'no-inner-declarations': ['error', 'functions'],
      'no-invalid-regexp': 'error',
      'no-irregular-whitespace': 'error',
      'no-obj-calls': 'error',
      'no-sparse-arrays': 'error',
      'no-template-curly-in-string': 'error',
      'no-unexpected-multiline': 'error',
      'no-unreachable': 'error',
      'no-unsafe-finally': 'error',
      'no-unsafe-negation': 'error',
      'use-isnan': 'error',
      'valid-typeof': ['error', { requireStringLiterals: true }],
      
      // Лучшие практики
      'array-callback-return': ['error', { allowImplicit: true }],
      'block-scoped-var': 'error',
      'complexity': ['error', 5],
      'consistent-return': 'error',
      'curly': ['error', 'all'],
      'default-case': ['error', { commentPattern: '^no default$' }],
      'dot-notation': ['error', { allowKeywords: true }],
      'eqeqeq': ['error', 'always'],
      'guard-for-in': 'error',
      'no-alert': 'error',
      'no-caller': 'error',
      'no-case-declarations': 'error',
      'no-div-regex': 'error',
      'no-else-return': ['error', { allowElseIf: false }],
      'no-empty-function': ['error', { allow: [] }],
      'no-empty-pattern': 'error',
      'no-eq-null': 'error',
      'no-eval': 'error',
      'no-extend-native': 'error',
      'no-extra-bind': 'error',
      'no-extra-label': 'error',
      'no-fallthrough': 'error',
      'no-floating-decimal': 'error',
      'no-global-assign': ['error', { exceptions: [] }],
      'no-implicit-coercion': ['error', {
        boolean: true,
        number: true,
        string: true,
        allow: [],
      }],
      'no-implicit-globals': 'error',
      'no-implied-eval': 'error',
      'no-invalid-this': 'error',
      'no-iterator': 'error',
      'no-labels': ['error', { allowLoop: false, allowSwitch: false }],
      'no-lone-blocks': 'error',
      'no-loop-func': 'error',
      'no-magic-numbers': ['error', { 
        ignore: [0, 1],
        ignoreArrayIndexes: true,
        enforceConst: true,
        detectObjects: false,
      }],
      'no-multi-str': 'error',
      'no-new': 'error',
      'no-new-func': 'error',
      'no-new-wrappers': 'error',
      'no-octal': 'error',
      'no-octal-escape': 'error',
      'no-param-reassign': ['error', { props: true }],
      'no-proto': 'error',
      'no-redeclare': ['error', { builtinGlobals: true }],
      'no-return-assign': ['error', 'always'],
      'no-return-await': 'error',
      'no-script-url': 'error',
      'no-self-assign': ['error', { props: true }],
      'no-self-compare': 'error',
      'no-sequences': 'error',
      'no-throw-literal': 'error',
      'no-unmodified-loop-condition': 'error',
      'no-unused-expressions': ['error', {
        allowShortCircuit: false,
        allowTernary: false,
        allowTaggedTemplates: false,
      }],
      'no-unused-labels': 'error',
      'no-useless-call': 'error',
      'no-useless-catch': 'error',
      'no-useless-concat': 'error',
      'no-useless-escape': 'error',
      'no-useless-return': 'error',
      'no-void': 'error',
      'no-warning-comments': ['warn', { 
        terms: ['todo', 'fixme', 'xxx'],
        location: 'start' 
      }],
      'no-with': 'error',
      'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],
      'radix': 'error',
      'require-await': 'error',
      'vars-on-top': 'error',
      'wrap-iife': ['error', 'any', { functionPrototypeMethods: true }],
      'yoda': ['error', 'never'],
      
      // ========== СТИЛИСТИЧЕСКИЕ ПРАВИЛА (ТОЛЬКО СУЩЕСТВУЮЩИЕ) ==========
      
      // Отступы - 2 пробела, строго
      '@stylistic/indent': ['error', 2, { 
        SwitchCase: 1,
        VariableDeclarator: 1,
        outerIIFEBody: 1,
        MemberExpression: 1,
        FunctionDeclaration: { parameters: 1, body: 1 },
        FunctionExpression: { parameters: 1, body: 1 },
        CallExpression: { arguments: 1 },
        ArrayExpression: 1,
        ObjectExpression: 1,
        ImportDeclaration: 1,
      }],
      
      // Кавычки - только одинарные
      '@stylistic/quotes': ['error', 'single', { 
        avoidEscape: true,
        allowTemplateLiterals: 'always'
      }],
      
      // Точки с запятой - всегда
      '@stylistic/semi': ['error', 'always'],
      '@stylistic/semi-spacing': ['error', { before: false, after: true }],
      
      // Запятые
      '@stylistic/comma-dangle': ['error', 'always-multiline'],
      '@stylistic/comma-spacing': ['error', { before: false, after: true }],
      
      // Пробелы
      '@stylistic/object-curly-spacing': ['error', 'always'],
      '@stylistic/array-bracket-spacing': ['error', 'never'],
      '@stylistic/space-before-blocks': ['error', 'always'],
      '@stylistic/space-before-function-paren': ['error', {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      }],
      '@stylistic/space-in-parens': ['error', 'never'],
      '@stylistic/space-infix-ops': ['error', { int32Hint: false }],
      '@stylistic/space-unary-ops': ['error', { 
        words: true, 
        nonwords: false,
      }],
      '@stylistic/key-spacing': ['error', { 
        beforeColon: false, 
        afterColon: true,
      }],
      '@stylistic/keyword-spacing': ['error', { 
        before: true, 
        after: true,
      }],
      '@stylistic/block-spacing': ['error', 'always'],
      
      // Стрелочные функции
      '@stylistic/arrow-parens': ['error', 'always'],
      '@stylistic/arrow-spacing': ['error', { before: true, after: true }],
      
      // Фигурные скобки
      '@stylistic/brace-style': ['error', '1tbs', { allowSingleLine: false }],
      '@stylistic/object-curly-newline': ['error', {
        ObjectExpression: { minProperties: 1, multiline: true, consistent: true },
        ObjectPattern: { minProperties: 1, multiline: true, consistent: true },
        ImportDeclaration: { minProperties: 1, multiline: true, consistent: true },
        ExportDeclaration: { minProperties: 1, multiline: true, consistent: true },
      }],
      
      // Пустые строки
      '@stylistic/no-multi-spaces': 'error',
      '@stylistic/no-multiple-empty-lines': ['error', { 
        max: 1, 
        maxEOF: 1, 
        maxBOF: 0,
      }],
      '@stylistic/no-trailing-spaces': ['error', { 
        skipBlankLines: false,
        ignoreComments: false,
      }],
      '@stylistic/padded-blocks': ['error', 'never'],
      
      // Комментарии
      '@stylistic/spaced-comment': ['error', 'always', {
        line: { markers: ['/'] },
        block: { balanced: true },
      }],
      
      // Операторы
      '@stylistic/operator-linebreak': ['error', 'before'],
      
      // Функции
      '@stylistic/function-call-argument-newline': ['error', 'always'],
      '@stylistic/function-paren-newline': ['error', 'multiline-arguments'],
      '@stylistic/function-call-spacing': ['error', 'never'],
      '@stylistic/implicit-arrow-linebreak': ['error', 'beside'],
      '@stylistic/new-parens': ['error', 'always'],
      '@stylistic/no-extra-parens': ['error', 'all', {
        conditionalAssign: false,
        returnAssign: false,
        nestedBinaryExpressions: false,
        enforceForArrowConditionals: false,
      }],
      
      // Максимальные ограничения
      'max-len': ['error', { 
        code: 80,
        tabWidth: 2,
        ignoreUrls: true,
        ignoreStrings: false,
        ignoreTemplateLiterals: false,
      }],
      'max-depth': ['error', 2],
      'max-nested-callbacks': ['error', 2],
      'max-params': ['error', 3],
      'max-statements': ['error', 10],
      
      // Переменные
      'id-length': ['error', { 
        min: 2,
        max: 30,
        exceptions: ['i', 'j', 'x', 'y', '_'],
      }],
      
      // ES6
      'arrow-body-style': ['error', 'as-needed'],
      'no-duplicate-imports': ['error', { includeExports: true }],
      'no-useless-computed-key': 'error',
      'no-useless-constructor': 'error',
      'no-useless-rename': ['error', {
        ignoreDestructuring: false,
        ignoreImport: false,
        ignoreExport: false,
      }],
      'no-var': 'error',
      'object-shorthand': ['error', 'always', {
        avoidQuotes: true,
        ignoreConstructors: false,
      }],
      'prefer-arrow-callback': ['error', { allowNamedFunctions: false }],
      'prefer-const': ['error', {
        destructuring: 'any',
        ignoreReadBeforeAssign: true,
      }],
      'prefer-destructuring': ['error', {
        array: true,
        object: true,
      }],
      'prefer-rest-params': 'error',
      'prefer-spread': 'error',
      'prefer-template': 'error',
      'rest-spread-spacing': ['error', 'never'],
      'template-curly-spacing': ['error', 'never'],
      'template-tag-spacing': ['error', 'never'],
    },
  },
  
  // Конфигурация для тестовых файлов
  {
    files: ["**/__tests__/**/*.js", "**/*.test.js", "**/*.spec.js"],
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
    rules: {
      'no-undef': 'off',
      'max-lines-per-function': 'off',
      'max-statements': 'off',
      'max-len': 'off',
      'no-magic-numbers': 'off',
      'id-length': 'off',
      'max-depth': 'off',
      'max-nested-callbacks': 'off',
    },
  },
];