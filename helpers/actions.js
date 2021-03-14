import moment from 'moment'
import { HML, HML1, HML2, PROD } from '../environmentUrls'
export default class Actions {

    static clickButton(nameButton) {
        var buttons = $(`//button[contains(text(),'${nameButton}')]`)
        buttons.waitForDisplayed()
        buttons.click()
    }

    static getCurrentDate() {
        return moment().utc().format('DD/MM/YYYY')
    }

    static getEnvironmentName() {
        switch (ENV) {
            case 'HML':
                return HML.name
                break;
            case 'HML1':
                return HML1.name
                break;
            case 'HML2':
                return HML2.name
                break;
            case 'PROD':
                return PROD.name
                break;
            default:
                break;
        }
    }

    static getEnvironmentUrl() {
        switch (ENV) {
            case 'HML':
                return HML.url
                break;
            case 'HML1':
                return HML1.url
                break;
            case 'HML2':
                return HML2.url
                break;
            case 'PROD':
                return PROD.url
                break;
            default:
                break;
        }
    }

    static open(path) { browser.url(path) }
    static reloadSession() { browser.reloadSession() }
    static newUrl(path) { browser.navigateTo(path) }
}