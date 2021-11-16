const   expect = require('chai').expect,
        request = require('supertest'),
        basicSetup = require('./basicSetup')
        app = require('../app');

describe('POST:/ retrieve and update DB', () => {
    basicSetup();

    it('register user', (done)=>{
        request(app)
            .post('/POST/register')
            .send({"username": "Sam"})
            .send({"password": "password"})
            .then((res) => {
                expect(res.statusCode).to.equal(200);
                console.log(res.body);
                done();
            })
            .catch((err) => done(err))
    })
})