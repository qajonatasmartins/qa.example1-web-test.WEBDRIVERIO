import LoginPage from '../../pageobjects/login.page.js'
import SecurePage from '../../pageobjects/secure.page.js'
import allureReporter from '@wdio/allure-reporter'

describe('My Login application', () => {
    it('should login with valid credentials', () => {
        allureReporter.addStory('Login')
        allureReporter.addSeverity('Medium')
        LoginPage.open();

        LoginPage.login('tomsmith', 'SuperSecretPassword!');
        expect(SecurePage.flashAlert).toBeExisting();
        expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!');
    });
});


