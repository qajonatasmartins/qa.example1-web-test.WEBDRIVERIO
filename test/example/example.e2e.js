import allureReporter from '@wdio/allure-reporter'
import { loginPage, securePage } from '../../constants'

describe('My Login application', function () {

    beforeEach(function () {
        allureReporter.addStory('Login')
        allureReporter.addSeverity('Medium')
        loginPage.open()
        loginPage.login('tomsmith', 'SuperSecretPassword!')
    })

    it('[CT0001]Validação - Exemplo 01', () => {
        expect(securePage.flashAlert).toBeExisting()
    });

    it('[CT0002]Validação - Exemplo 02', () => {
        expect(securePage.flashAlert).toHaveTextContaining('You logged into a secure area!')
    });
});


