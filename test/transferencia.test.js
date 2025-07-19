//import { describe } from "mocha";
//import request from 'supertest'
//import { expect } from 'chai'
//import 'dotenv/config'
//import { obterToken } from '../helpers/autenticacao'

const request = require('supertest'); //--o que o Julio falou para colocar não funcionou com chai5
const { expect } = require('chai')
require('dotenv').config()
const { obterToken } = require('../helpers/autenticacao')

describe('Transferencias', () => {
    describe('POST /transferencias', () => {
        let token

        beforeEach( async () => {
           token = await obterToken('julio.lima', '123456')
        })

        it('Deve retornar sucesso com 201 quando o valor da transferencia for igual ou acima de R$10 reais', async () => {
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

        it('Deve retornar sucesso com 422 quando o valor da transferencia for abaixo de R$10 reais', async () => {
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