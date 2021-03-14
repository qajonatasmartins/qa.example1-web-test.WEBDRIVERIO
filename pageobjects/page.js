import Actions from "../helpers/actions"

export default class Page {

    open() {
        Actions.open(browser.config.baseUrl)
        browser.maximizeWindow()
    }
}
