import { describe } from "mocha";
//const request = require('supertest'); //--o que o Julio falou para colocar não funcionou
//const { expect } = require('chai')
import request from 'supertest'
import { expect } from 'chai'
//require('dotenv').config()
import 'dotenv/config'

describe('Transferencias', () => {
    describe('POST /transferencias', () => {
        it('Deve retornar sucesso com 201 quando o valor da transferencia for igual ou acima de R$10 reais', async () =>{
            const respostaLogin = await request(process.env.BASE_URL)
                .post('/login')
                .set('Content-Type', 'application/json')
                .send({
                    'username': 'julio.lima',
                    'senha': '123456'
                })

            const token = respostaLogin.body.token

            const resposta = await request(process.env.BASE_URL)
                .post('/transferencias')
                .set('Content-Type', 'application/json')
                .set('Authorization', `Bearer ${token}`)
                .send({
                    contaOrigem: 1,
                    contaDestino: 2,
                    valor: 11,
                    token: ""
                })

            expect(resposta.status).to.equal(201);
            //console.log(resposta.body)
        })

        it('Deve retornar sucesso com 422 quando o valor da transferencia for abaixo de R$10 reais', async () =>{
            const respostaLogin = await request(process.env.BASE_URL)
                .post('/login')
                .set('Content-Type', 'application/json')
                .send({
                    'username': 'julio.lima',
                    'senha': '123456'
                })

            const token = respostaLogin.body.token

            const resposta = await request(process.env.BASE_URL)
                .post('/transferencias')
                .set('Content-Type', 'application/json')
                .set('Authorization', `Bearer ${token}`)
                .send({
                    contaOrigem: 1,
                    contaDestino: 2,
                    valor: 9,
                    token: ""
                })

            expect(resposta.status).to.equal(422);            
        })

    })
})