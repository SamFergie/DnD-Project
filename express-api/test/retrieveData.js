const   expect = require('chai').expect,
        request = require('supertest'),
        basicSetup = require('./basicSetup')
        app = require('../app');

describe('GET:/ retreive all user information from database', () => {
    basicSetup();

    it('existing data', (done)=>{
        request(app).get('/GET/Users')
            .then((res) => {
                expect(res.statusCode).to.equal(200);
                console.log(res.body);
                done();
            })
            .catch((err) => done(err))
    })
})