import Page from '../page.js';

export default class LoginPage extends Page {

    get inputUsername() { return $('#username') }
    get inputPassword() { return $('#password') }
    get btnSubmit() { return $('button[type="submit"]') }

    // forma de pegar com get e set
    set clickNoBotaoDeSelect(opcaoDesejada) { this.botao = $(`select[option='${opcaoDesejada}']`) }
    get clickNoBotaoDeSelect() { return this.botao }

    metodoClicarBotao(opcao) {
        // esperar o elemento estar disponivel
        this.clickNoBotaoDeSelect.waitForDisplayed()
        // esperar estar habilitado na tela displayed = true
        this.clickNoBotaoDeSelect.waitForEnabled()
        this.clickNoBotaoDeSelect = opcao
        this.clickNoBotaoDeSelect.click()
        // esperar o elemento não estar disponivel
        this.clickNoBotaoDeSelect.waitForDisplayed({ reverse: true })
        // esperar não estar habilitado na tela displayed = false
        this.clickNoBotaoDeSelect.waitForEnabled({ reverse: true })
    }

    login(username, password) {
        this.inputUsername.setValue(username);
        this.inputPassword.setValue(password);
        this.btnSubmit.click();
    }

    open() {
        return super.open('login');
    }
}
