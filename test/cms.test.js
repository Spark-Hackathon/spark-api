/*
	Spark API – CMS Unit Test
	This file was created by Spark
	Licensed under CC BY-NC-SA 4.0 (https://creativecommons.org/licenses/by-nc-sa/4.0/)
*/


// import required dependencies
const request = require("supertest")
const cms = require("../endpoints/cms")


// unit tests
describe("GET /", () => {
	it("returns JSON response", () => {
		return request(cms)
			.get("/")
			.expect(200)
			.expect("Content-Type", /json/)
			.expect(`{"msg":"CMS Routes"}`)

		done()
	})
})

describe("POST /pages/hackathon/new", () => {
	it("returns JSON response", () => {
		return request(cms)
			.post("/pages/hackathon/new")
			.send({ "title": "test" })
			.expect(201)

		done()
	})
})

describe("POST /pages/hackathon/delete", () => {
	it("returns JSON response", () => {
		return request(cms)
			.post("/pages/hackathon/delete")
			.send({ "title": "test" })
			.expect(200)

		done()
	})
})

describe("POST /pages/hackathon/update", () => {
	it("returns JSON response", () => {
		return request(cms)
			.post("/pages/hackathon/update")
			.send({ "title": "index", "component": "title", "data": "TEST" })
			.expect(200)

		done()
	})

	it("reverts back to original", () => {
		return request(cms)
			.post("/pages/hackathon/update")
			.send({ "title": "index", "component": "title", "data": "Spark Hackathon" })
			.expect(200)

		done()
	})
})