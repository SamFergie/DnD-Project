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
    it('add monster to existing user account', (done)=>{
        request(app)
            .post('/POST/addMonster')
            .send({"owner": "Sam F"})
            .send({"name": "Dragon"})
            .send({"predicted_cr": "2"})
            .send({"hp": "20"})
            .send({"ac": "12"})
            .send({"base_speed": "30"})
            .send({"fly_speed": "35"})
            .send({"burrow_speed": "0"})
            .send({"swim_speed": "0"})
            .send({"climb_speed": "0"})
            .send({"STR": "12"})
            .send({"DEX": "12"})
            .send({"CON": "10"})
            .send({"INT": "10"})
            .send({"WIS": "15"})
            .send({"CHA": "16"})
            .send({"passive_number": "2"})
            .send({"action_number": "3"})
            .send({"max_damage": "44"})
            .send({"max_bonus": "6"})
            .send({"legendary_number": "1"})
            .send({"immunity_number": "1"})
            .send({"resistance_number": "2"})
            .then((res) => {
                expect(res.statusCode).to.equal(200);
                done();
            })
            .catch((err) => done(err))
    })
    it('add monster to non-existant user account', (done)=>{
        request(app)
            .post('/POST/addMonster')
            .send({"owner": "ABCDEF"})
            .send({"name": "Dragon"})
            .send({"predicted_cr": "2"})
            .send({"hp": "20"})
            .send({"ac": "12"})
            .send({"base_speed": "30"})
            .send({"fly_speed": "35"})
            .send({"burrow_speed": "0"})
            .send({"swim_speed": "0"})
            .send({"climb_speed": "0"})
            .send({"STR": "12"})
            .send({"DEX": "12"})
            .send({"CON": "10"})
            .send({"INT": "10"})
            .send({"WIS": "15"})
            .send({"CHA": "16"})
            .send({"passive_number": "2"})
            .send({"action_number": "3"})
            .send({"max_damage": "44"})
            .send({"max_bonus": "6"})
            .send({"legendary_number": "1"})
            .send({"immunity_number": "1"})
            .send({"resistance_number": "2"})
            .then((res) => {
                expect(res.statusCode).to.equal(404);
                done();
            })
            .catch((err) => done(err))
    })
})