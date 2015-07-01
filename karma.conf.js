module.exports = function (config) {
  config.set({

    basePath: '',

    files: [
      'app/src/app.js',
      'test/*.js'
    ],

    frameworks: ['jasmine', 'browserify'],

    browserify: {
      debug: true,
      transform: [
        'babelify'
      ]
    },

    preprocessors: {
      'app/src/**/*.js': ['browserify'],
      'test/*.js': ['browserify']
    },

    reporters: ['dots'],

    color: true,

    autoWatch: false,

    browsers: ['Chrome'],

    singleRun: true,

    plugins: [
      'karma-jasmine',
      'karma-chrome-launcher',
      'karma-browserify'
    ]

  });
};
