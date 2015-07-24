module.exports = function (config) {
  config.set({

    basePath: '',

    files: [
      'app/**/*.ts',
      'test/**/*.ts'
    ],

    frameworks: ['jasmine'],

    preprocessors: {
      '**/*.ts': ['typescript']
    },

    typescriptPreprocessor: {
      // options passed to the typescript compiler
      options: {
        sourceMap: false, // (optional) Generates corresponding .map file.
        target: 'ES5', // (optional) Specify ECMAScript target version: 'ES3' (default), or 'ES5'
        module: 'commonjs', // (optional) Specify module code generation: 'commonjs' or 'amd'
        noImplicitAny: true, // (optional) Warn on expressions and declarations with an implied 'any' type.
        noResolve: false, // (optional) Skip resolution and preprocessing.
        removeComments: true // (optional) Do not emit comments to output.
      },
      typings: [
        './typings/jasmine/*.d.ts'
      ],
      // transforming the filenames
      transformPath: function (path) {
        return path.replace(/\.ts$/, '.js');
      }
    },

    reporters: ['dots'],

    color: true,

    autoWatch: false,

    browsers: ['PhantomJS'],

    singleRun: true,

    plugins: [
      'karma-jasmine',
      'karma-chrome-launcher',
      'karma-phantomjs-launcher',
      'karma-typescript-preprocessor'
    ]

  });
};
