import {Client} from 'pg'

const dataBase = new Client({
    user: 'usuario.nome',
    host: 'link.host.para.conextar exemplo aws.connections.database.com.br:8080',
    database: 'nome.do.banco.de.dados',
    password: 'senha.do.banco',
    port: 8080//'porta'
})

export default class NomeClassDatabase {

    nomeMetodo(parametro){
        dataBase.connect()
        dataBase.query(
            `select *from tabela where nomeColuna='${parametro}'`
        )
    }
}