//import request from 'supertest'
//import { expect } from 'chai'
//import 'dotenv/config'

const request = require('supertest') //--o que o Julio falou para colocar não funcionou com chai5
const { expect } = require('chai')
require('dotenv').config()
const postLogin = require('../fixtures/postLogin.json')

describe('Login', () => {
    describe('POST /login', () => {
        it('Deve retornar 200 com um token em string quando usar credencias validas', async () => {
            const bodyLogin ={ ...postLogin}
            const resposta = await request(process.env.BASE_URL)
                .post('/login')
                .set('Content-Type', 'application/json')
                .send(bodyLogin)

            expect(resposta.status).to.equal(200)
            expect(resposta.body.token).to.be.a('string')
        })
    })
})