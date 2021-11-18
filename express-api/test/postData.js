const   expect = require('chai').expect,
        request = require('supertest'),
        basicSetup = require('./basicSetup')
        app = require('../app');

describe('POST:/ retrieve and update DB', () => {
    basicSetup();

    it('register user', (done)=>{
        request(app)
            .post('/POST/register')
            .send({"username": "Sam F"})
            .send({"password": "password 2"})
            .then((res) => {
                expect(res.statusCode).to.equal(200);
                done();
            })
            .catch((err) => done(err))
    })
    it('register exisiting user', (done)=>{
        request(app)
            .post('/POST/register')
            .send({"username": "Sam F"})
            .send({"password": "password"})
            .then((res) => {
                expect(res.statusCode).to.equal(409);
                done();
            })
            .catch((err) => done(err))
    })
    it('login existing user', (done)=>{
        request(app)
            .post('/POST/login')
            .send({"username": "Sam F"})
            .send({"password": "password 2"})
            .then((res) => {
                expect(res.statusCode).to.equal(200);
                done();
            })
            .catch((err) => done(err))
    })
    it('login existing user with incorrect password', (done)=>{
        request(app)
            .post('/POST/login')
            .send({"username": "Sam"})
            .send({"password": "password"})
            .then((res) => {
                expect(res.statusCode).to.equal(404);
                done();
            })
            .catch((err) => done(err))
    })
    it('login non existing user', (done)=>{
        request(app)
            .post('/POST/login')
            .send({"username": "Bob"})
            .send({"password": "password"})
            .then((res) => {
                expect(res.statusCode).to.equal(404);
                done();
            })
            .catch((err) => done(err))
    })
})