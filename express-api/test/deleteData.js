const   expect = require('chai').expect,
        request = require('supertest'),
        basicSetup = require('./basicSetup')
        app = require('../app');
    require('./postData');
    require('./retrieveData');

describe('DELETE:/ delete exisiting user', () => {
    basicSetup();

    it('delete existing user', (done)=>{
        request(app)
            .delete('/DELETE/deleteUser/Sam F')
            .then((res) => {
                expect(res.statusCode).to.equal(200);
                done();
            })
            .catch((err) => done(err))
    })
    it('delete not existing user', (done)=>{
        request(app)
            .delete('/DELETE/deleteUser/Sam')
            .then((res) => {
                expect(res.statusCode).to.equal(404);
                done();
            })
            .catch((err) => done(err))
    })
})