import allureReporter from '@wdio/allure-reporter'
import { assert } from 'chai';
import { loginPage } from '../../constants'
import Actions from '../../helpers/actions';

describe('My Login application', function () {

    beforeEach(function () {
        allureReporter.addStory('Login')
        allureReporter.addSeverity('Medium')
        // allureReporter.addEnvironment(Actions.getEnvironmentName(), Actions.getEnvironmentUrl())
    })

    it('[CT0001]Validação - Exemplo 01', function () {
        loginPage.login('tomsmith', 'SuperSecretPassword!')

        assert.isTrue(true)
    });

    it.skip('[CT0002]Validação - Exemplo 02', function () {
        loginPage.login('tomsmith', 'SuperSecretPassword!')
        assert.isTrue(true)
    });
});


