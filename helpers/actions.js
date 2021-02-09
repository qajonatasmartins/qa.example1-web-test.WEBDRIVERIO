import moment from 'moment'
export default class Actions {

    set buttons(nameButton) { this.button = $(`//button[contains(text(),'${nameButton}')]`) }
    get buttons() { return this.button }

    static clickButton(nameButton) {
        this.buttons = nameButton
        this.buttons.waitForDisplayed()
        this.buttons.click()
    }

    static getCurrentDate() {
        return moment().utc().format('DD/MM/YYYY')
    }
}