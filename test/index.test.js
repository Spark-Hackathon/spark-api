/*
	Spark API – Index Unit Test
	This file was created by Spark
	Licensed under CC BY-NC-SA 4.0 (https://creativecommons.org/licenses/by-nc-sa/4.0/)
*/


// import required dependencies
const request = require("supertest")
const index = require("../api")


// unit tests
describe("GET /", () => {
	it("returns JSON response", () => {
		return request(index)
			.get("/")
			.expect(200)
			.expect("Content-Type", /json/)
			.expect(`{"msg":"Spark API"}`)

		done()
	})
})