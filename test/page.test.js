/*
	Spark API – Page Unit Test
	This file was created by Spark
	Licensed under CC BY-NC-SA 4.0 (https://creativecommons.org/licenses/by-nc-sa/4.0/)
*/


// import required dependencies
const request = require("supertest")
const page = require("../endpoints/pages")


// unit tests
describe("GET /pages", () => {
	it("returns JSON response", () => {
		return request(page)
			.get("/")
			.expect(200)
			.expect("Content-Type", /json/)
			.expect(`{"msg":"Pages Routes"}`)

		done()
	})
})

describe("GET /pages/hackathon/index", () => {
	it("returns JSON response", () => {
		return request(page)
			.get("/hackathon/index")
			.expect(200)
			.expect("Content-Type", /json/)
	})
})

describe("GET /pages/hackathon/not-a-real-page", () => {
	it("returns 404 if invalid endpoint", () => {
		return request(page)
			.get("/hackathon/not-a-real-page")
			.expect(404)
	})
})