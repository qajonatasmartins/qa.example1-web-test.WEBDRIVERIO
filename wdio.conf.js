const allure = require('allure-commandline')

exports.config = {
    // ====================
    // Runner Configuration
    // ====================

    runner: 'local',

    // ==================
    // Specify Test Files
    // ==================

    specs: [
        './test/*.js'
    ],
    suites: {
        login: [
            './test/*.js'
        ]
    },
    exclude: [
        // 'path/to/excluded/files'
    ],
    // ============
    // Capabilities
    // ============
    maxInstances: 10,
    capabilities: [{
        maxInstances: 5,
        browserName: 'chrome',
        'goog:chromeOptions': {
            args: ['--headless', '--disable-gpu', 'window-size=1280,1024']
        },
    }],
    // ===================
    // Test Configurations
    // ===================
    logLevel: 'info',
    bail: 0,
    baseUrl: 'https://the-internet.herokuapp.com/login',
    waitforTimeout: 80000,
    connectionRetryTimeout: 50000,
    connectionRetryCount: 3,
    services: ['chromedriver'],
    framework: 'mocha',
    reporters: [['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: false,
        disableMochaHooks: true
    }]],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000,
        require: ['@babel/register']
    },
    // =====
    // Hooks
    // =====
    onPrepare: function (config, capabilities) {
    },
    afterTest: function (test, context, { error, result, duration, passed, retries }) {
        browser.takeScreenshot();
        browser.reloadSession();
    },
    onComplete: function () {
        const reportError = new Error('Could not generate Allure report')
        const generation = allure(['generate', 'allure-results', '--clean'])
        return new Promise((resolve, reject) => {
            const generationTimeout = setTimeout(
                () => reject(reportError),
                5000)

            generation.on('exit', function (exitCode) {
                clearTimeout(generationTimeout)

                if (exitCode !== 0) {
                    return reject(reportError)
                }

                console.log('Allure report successfully generated')
                resolve()
            })
        })
    }
}
