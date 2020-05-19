/*
	Spark API – Ping Unit Test
	This file was created by Spark
	Licensed under CC BY-NC-SA 4.0 (https://creativecommons.org/licenses/by-nc-sa/4.0/)
*/


// import required dependencies
const request = require("supertest")
const ping = require("../endpoints/ping.js")


// unit tests
describe("GET /ping", () => {
	it("returns JSON response", () => {
		return request(ping)
			.get("/")
			.expect(200)
			.expect("Content-Type", /json/)
			.expect(`{"msg":"Ping Routes"}`)
		
		done()
	})

	it("returns 404 if invalid endpoint", () => {
		return request(ping)
			.get(`/${Math.random()}`)
			.expect(404)
			
		done()
	})
})

describe("POST /ping/hackathon/mentors", () => {
	it("returns JSON response", () => {
		return request(ping)
			.post("/hackathon/mentors")
			.send({ tableNumber: 1, groupName: "Woomy", question: "What is a NullPointer Exception?" })
			.expect(200)
	})
})

describe("POST /ping/hackathon/organizers", () => {
	it("returns JSON response", () => {
		return request(ping)
			.post("/hackathon/organizers")
			.send({ sender: "Brehanu", message: "Do we have extra cardboard?" })
			.expect(200)
	})
})