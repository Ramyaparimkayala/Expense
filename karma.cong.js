module.exports = function (config) {
  config.set({
    // 1. Base Path: Root path for resolving files and excludes.
    basePath: '',

    // 2. Frameworks: Testing frameworks to use (e.g., Jasmine).
    frameworks: ['jasmine', '@angular-devkit/build-angular'],

    // 3. Plugins: Plugins required for Karma to work (e.g., browsers, reporters).
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
      require('@angular-devkit/build-angular/plugins/karma'),
    ],

    // 4. Client: Options for the client-side testing environment.
    client: {
      jasmine: {
        // You can add Jasmine-specific options here.
      },
      clearContext: false, // Keep Jasmine Spec Runner output visible in the browser.
    },

    // 5. Coverage Reporter: Configures how code coverage is reported.
    coverageReporter: {
      dir: require('path').join(__dirname, './coverage/expense'),
      subdir: '.',
      reporters: [{ type: 'html' }, { type: 'text-summary' }],
    },

    // 6. Reporters: How test results are displayed.
    reporters: ['progress', 'kjhtml'],

    // 7. Port: Port number for the Karma web server.
    port: 9876,

    // 8. Colors: Use colors in the output logs.
    colors: true,

    // 9. Log Level: Level of detail in the logs (e.g., INFO, DEBUG, ERROR).
    logLevel: config.LOG_INFO,

    // 10. Auto-Watch: Automatically rerun tests on file changes.
    autoWatch: true,

    // 11. Browsers: Browsers to use for testing (e.g., Chrome, Firefox).
    browsers: ['Chrome'],

    // 12. Single Run: Run tests once or keep watching files.
    singleRun: false,

    // 13. Restart on File Change: Restart tests if a file changes.
    restartOnFileChange: true,
  });
};
