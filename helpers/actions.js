import moment from 'moment'
export default class Actions {

    static clickButton(nameButton) {
        var buttons = $(`//button[contains(text(),'${nameButton}')]`)
        buttons.waitForDisplayed()
        buttons.click()
    }

    static getCurrentDate() {
        return moment().utc().format('DD/MM/YYYY')
    }

    static open(path) { browser.url(path) }
    static reloadSession() { browser.reloadSession() }
    static newUrl(path) { browser.navigateTo(path) }
}