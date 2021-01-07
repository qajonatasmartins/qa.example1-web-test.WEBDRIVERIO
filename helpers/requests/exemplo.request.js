import request from 'superagent'
const urlBase = 'urlBase do endpoint exemplo https://adm.local:8080/login'

export async function nomeMetodo() {
    var response
    await request.post(urlBase)
        .disableTLSCerts()
        .set('Content-Type', 'application/json')
        .send({
            atributosDoBodyDoJson: 'a',
            nome: 'a',
            email: 'a',
            numero: 4,
            verdadeiroFalso: true
        })
        .then((res) => {
            response = res.body.nomeDoAtributoDoResponseQueDesejaPegar;
        })
        .catch(e => {
            console.log('\n\n\n Error sending request: ' + e + '\n\n\n')
        })
        return response
}