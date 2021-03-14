const allure = require('allure-commandline')
const base = require('./environmentUrls')
const ENV = process.env.ENV

if (!ENV || !['HML', 'HML2', 'HML3', 'PROD'].includes(ENV)) {
    console.log('Por favor informe corretamente o ambiente de execução dos testes.\n')
    console.log('Entradas válidas: ENV=HML | ENV=HML2 | ENV=HML3 | ENV=PROD |\n')
    console.log('Exemplo válido: ENV=HML npm run login\n')
    process.exit()
}
exports.config = {
    // ====================
    // Runner Configuration
    // ====================

    host: 'locahost',
    port: 4444,
    path: '/',

    // ==================
    // Specify Test Files
    // ==================

    specs: [
        './test/**/*.js'
    ],
    suites: {
        login: [
            './test/**/*.js'
        ]
    },
    exclude: [
        // 'path/to/excluded/files'
    ],
    // ============
    // Capabilities
    // ============
    maxInstances: 5,
    capabilities: [{
        maxInstances: 5,
        browserName: 'chrome'//,
        // 'goog:chromeOptions': {
        //   args: ['--headless', '--disable-gpu', 'window-size=1280,1024', '--no-sandbox']
        //},
    }],
    // ===================
    // Test Configurations
    // ===================
    logLevel: 'silent',
    bail: 0,
    baseUrl: base[process.env.ENV].url,
    waitforTimeout: 80000,
    connectionRetryTimeout: 50000,
    connectionRetryCount: 3,
    services: ['selenium-standalone'],
    seleniumInstallArgs: {
        drivers: {
            chrome: true
        }
    },
    seleniumArgs: {
        drivers: {
            chrome: true
        }
    },
    framework: 'mocha',
    specFileRetries: 1,
    reporters: [['allure', {
        outputDir: 'allure-results/',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: false,
        disableMochaHooks: true
    }]],
    mochaOpts: {
        ui: 'bdd',
        timeout: 120000,
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
