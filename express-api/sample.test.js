const mongoose = require("mongoose")
const createServer = require("./server")
const supertest = require('supertest')

beforeEach((done) => {
	mongoose.connect(
		"mongodb+srv://User:8d1u4wO4M5jpuVhL@dndproject.rwoe3.mongodb.net/Website?retryWrites=true&w=majority",
		{ useNewUrlParser: true },
		() => done()
	)
})

afterEach((done) => {
	mongoose.connection.db.dropDatabase(() => {
		mongoose.connection.close(() => done())
	})
})

const app = createServer()

test("GET /users", async () => {
	await supertest(app)
		.get("/GET/Users")
		.expect(200)
})