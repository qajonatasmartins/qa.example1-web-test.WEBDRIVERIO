import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () { return $('#username') }
    get inputPassword () { return $('#password') }
    get btnSubmit () { return $('button[type="submit"]') }

    // forma de pegar com get e set
    set clickNoBotaoDeSelect(opcaoDesejada) {this.botao = $(`select[option='${opcaoDesejada}']`)}
    get clickNoBotaoDeSelect() {return this.botao}

    //
    // como chamar no metodo
    //

    metodoClicarBotao(opcao){
        // esperar o elemento estar disponivel
        this.clickNoBotaoDeSelect.waitForDisplayed()
        // esperar estar habilitado na tela displayed = true
        this.clickNoBotaoDeSelect.waitForEnabled()
        this.clickNoBotaoDeSelect = opcao
        this.clickNoBotaoDeSelect.click()
        // esperar o elemento não estar disponivel
        this.clickNoBotaoDeSelect.waitForDisplayed({reverse: true})
        // esperar não estar habilitado na tela displayed = false
        this.clickNoBotaoDeSelect.waitForEnabled({reverse: true})
    }


    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    login (username, password) {
        this.inputUsername.setValue(username);
        this.inputPassword.setValue(password);
        this.btnSubmit.click(); 
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

export default new LoginPage();
