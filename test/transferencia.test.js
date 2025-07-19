//import { describe } from "mocha";
//import request from 'supertest'
//import { expect } from 'chai'
//import 'dotenv/config'
//import { obterToken } from '../helpers/autenticacao'

const request = require('supertest'); //--o que o Julio falou para colocar não funcionou com chai5
const { expect } = require('chai')
require('dotenv').config()
const { obterToken } = require('../helpers/autenticacao')
const postTransferencias = require('../fixtures/postTransferencias.json')

describe('Transferencias', () => {
    let token

    beforeEach( async () => {
        token = await obterToken('julio.lima', '123456')
    })

    describe('POST /transferencias', () => {

        it('Deve retornar sucesso com 201 quando o valor da transferencia for igual ou acima de R$10 reais', async () => {
            const bodyTransferencias = {...postTransferencias}

            const resposta = await request(process.env.BASE_URL)
                .post('/transferencias')
                .set('Content-Type', 'application/json')
                .set('Authorization', `Bearer ${token}`)
                .send(bodyTransferencias)

            expect(resposta.status).to.equal(201);
            //console.log(resposta.body)
        })

        it('Deve retornar sucesso com 422 quando o valor da transferencia for abaixo de R$10 reais', async () => {
            const bodyTransferencias = {...postTransferencias}
            bodyTransferencias.valor = 9;

            const resposta = await request(process.env.BASE_URL)
                .post('/transferencias')
                .set('Content-Type', 'application/json')
                .set('Authorization', `Bearer ${token}`)
                .send(bodyTransferencias)

            expect(resposta.status).to.equal(422);            
        })

    })

    describe('POST /transferencias/{id}', () => {
        it('Deve retornar sucesso com 100 e dados iguas ao registro de transferencia contido no bando de dados quando o id for valido', async () => {
            const resposta = await request(process.env.BASE_URL)
                .get('/transferencias/1')
                .set('Authorization', `Bearer ${token}`)

            //console.log(resposta.status)
            //console.log(resposta.body)
            expect(resposta.status).to.equal(200);
            expect(resposta.body.id).to.equal(1);
            expect(resposta.body.id).to.be.a('number'); //conferindo se o id é um número
            expect(resposta.body.conta_origem_id).to.equal(1);
            expect(resposta.body.conta_destino_id).to.equal(2);
            expect(resposta.body.valor).to.equal(11.00);
            expect(resposta.body.data_hora).to.equal('2025-07-18T02:13:11.000Z');
            expect(resposta.body.autenticada).to.equal(0);
        })
    })

    describe('GET /transferencias', () => {
        it('Deve retornar 10 elemento na paginação', async () => {
            resposta = await request(process.env.BASE_URL)
                .get('/transferencias?pag=1&limit=10')
                .set('Authorization', `Bearer ${token}`)

            //console.log(resposta.body)
            expect(resposta.status).to.equal(200);
            expect(resposta.body.limit).to.equal(10);
            expect(resposta.body.transferencias).to.have.lengthOf(10);
        })
    })

})