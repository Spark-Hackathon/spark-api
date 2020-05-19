/*
	Spark API – Applications Unit Test
	This file was created by Spark
	Licensed under CC BY-NC-SA 4.0 (https://creativecommons.org/licenses/by-nc-sa/4.0/)
*/


// import required dependencies
const request = require("supertest")
const apply = require("../endpoints/apply.js")


// unit tests
describe("GET /apply", () => {
	it("returns JSON response", () => {
		return request(apply)
			.get("/")
			.expect(200)
			.expect("Content-Type", /json/)
			.expect(`{"msg":"Application Routes"}`)
		
		done()
	})

	it("returns 404 if invalid endpoint", () => {
		return request(apply)
			.get(`/${Math.random()}`)
			.expect(404)
			
		done()
	})
})

describe("POST /apply/hackathon/participant", () => {
	it("returns JSON response", () => {
		return request(apply)
			.post("/hackathon/participant")
			.send({ 
				"first_name": "TESTING",
				"last_name": "TESTING",
				"email": "test@testing.com",
				"date_of_birth": new Date(),
				"school": "TESTING",
				"grade": "TESTING",
				"sex": "TESTING",
				"experience": "TESTING",
				"race": "TESTING",
				"hopes": "TESTING",
				"t_shirt_size": "TESTING",
				"borrow_laptop": "TESTING",
				"adult_name": "TESTING",
				"adult_email": "testing@testing.com",
				"adult_phone": "(111) 111-1111",
				"participated_before": "TESTING",
				"refer_name": "TEST",
				"refer_email": "tester@test.com" 
			})
			.expect(200)
			.expect({
				msg: "Successfully accepted new Spark Participant application!",
				status: 200
			})
			
		done()
	})
})

describe("POST /apply/hackathon/volunteer", () => {
	it("returns JSON response", () => {
		return request(apply)
			.post("/hackathon/volunteer")
			.send({ 
				"first_name": "TESTING", 
				"last_name": "TESTING",
				"email": "testing@testing.com",
				"company_organization_school": "TESTING INC.",
				"sex": "TESTING",
				"role": "TESTING",
				"availablity": ["TEST_1", "TEST_2", "TEST_3"],
				"type": "TESTING",
				"workshop_expertise": "TESTING",
				"t_shirt_size": "TESTING",
				"comments_or_questions": "TESTING"
			})
			.expect(200)
			.expect({
				msg: "New volunteer successfully signed up!",
				status: 200
			})
			
		done()
	})
})