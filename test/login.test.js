//const request = require('supertest') --o que o Julio falou para colocar não funcionou
//const { expect } = require('chai')
import request from 'supertest'
import { expect } from 'chai'

describe('Login', () => {
    describe('POST /login', () => {
        it('Deve retornar 200 oim um token em string quando usar credencias validas', async () => {
            const resposta = await request('http://localhost:3000')
                .post('/login')
                .set('Content-Type', 'application/json')
                .send({
                    'username': 'julio.lima',
                    'senha': '123456'
                })

            expect(resposta.status).to.equal(200)
            expect(resposta.body.token).to.be.a('string')
        })
    })
})