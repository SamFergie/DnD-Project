const   expect = require('chai').expect,
        request = require('supertest'),
        basicSetup = require('./basicSetup')
        app = require('../app');

describe('GET:/ retrieve from the DB', () => {
    basicSetup();

    it('get all users', (done)=>{
        request(app).get('/GET/Users')
            .then((res) => {
                expect(res.statusCode).to.equal(200);
                done();
            })
            .catch((err) => done(err))
    })
    it('get existing user', (done)=>{
        request(app).get('/GET/Users/Sam')
            .then((res) => {
                expect(res.statusCode).to.equal(200);
                done();
            })
            .catch((err) => {
                done(err)
            })
    })
    it('get not existing user', (done)=>{
        request(app).get('/GET/Users/Bob')
            .then((res) => {
                expect(res.statusCode).to.equal(404);
                expect(res.body).to.deep.equal({err:"data not found"});
                done();
            })
            .catch((err) => {
                done(err)
            })
    })
})