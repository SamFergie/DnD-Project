const mongooseConnect = require('../dbConnect');
const mongoose = require('mongoose');

let basicSetup = () => {
    before((done) => {
        mongooseConnect.dbconnect()
            .once('open', () => done())
            .on('error', (error) => done(error))
    })
    beforeEach((done) => {
        mongoose.connection.db.listCollections({name: "users"})
            .next((error, collection) => {
                if(collection){
                    done()
                }else{
                    done(error)
                }
            })
    })
    after((done) => {
        mongooseConnect.dbclose()
            .then(() => done())
            .catch((err) => done(err))
    })
}

module.exports = basicSetup;