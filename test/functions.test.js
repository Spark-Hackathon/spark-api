/*
	Spark API – Functions Unit Test
	This file was created by Spark
	Licensed under CC BY-NC-SA 4.0 (https://creativecommons.org/licenses/by-nc-sa/4.0/)
*/


// import required dependencies
const expect = require("chai").expect
const { 
	isTypeOf, 
	isNotTypeOf, 
	isMissingOne } = require("../functions")


// unit tests
describe("does isTypeOf work if...", () => {
	it("returns true for isTypeOf(5, 'number')", () => {
		expect(isTypeOf(5, "number")).to.equal(true)
	})

	it("returns false for isTypeOf(5, 'string')", () => {
		expect(isTypeOf(5, "string")).to.equal(false)
	})

	it("returns true for isTypeOf('name', 'string')", () => {
		expect(isTypeOf("name", "string")).to.equal(true)
	})

	it("returns false for isTypeOf('name', 'number')", () => {
		expect(isTypeOf("name", "number")).to.equal(false)
	})

	it("returns true for isTypeOf([1, 2, 3], 'object')", () => {
		expect(isTypeOf([1, 2, 3], "object")).to.equal(true)
	})

	it("returns false for isTypeOf([1, 2, 3], 'array')", () => {
		expect(isTypeOf([1, 2, 3], "array")).to.equal(false)
	})
})

describe("does isNotTypeOf work if...", () => {
	it("returns true for isNotTypeOf(5, 'string')", () => {
		expect(isNotTypeOf(5, "string")).to.equal(true)
	})

	it("returns false for isTypeOf(5, 'number')", () => {
		expect(isNotTypeOf(5, "number")).to.equal(false)
	})

	it("returns true for isNotTypeOf('name', 'number')", () => {
		expect(isNotTypeOf("name", "number")).to.equal(true)
	})

	it("returns false for isNotTypeOf('name', 'string')", () => {
		expect(isNotTypeOf("name", "string")).to.equal(false)
	})

	it("returns true for isNotTypeOf([1, 2, 3], 'array')", () => {
		expect(isNotTypeOf([1, 2, 3], "array")).to.equal(true)
	})

	it("returns false for isNotTypeOf([1, 2, 3], 'object')", () => {
		expect(isNotTypeOf([1, 2, 3], "object")).to.equal(false)
	})
})

describe("does isMissingOne work if...", () => {
	it("returns true if passed in [1, undefined, 3]", () => {
		expect(isMissingOne([1, undefined, 3])).to.equal(true)
	})

	it("returns false if passed in [1, 2, 3]", () => {
		expect(isMissingOne([1, 2, 3])).to.equal(false)
	})

	it("returns true if passed in [1, null, 3]", () => {
		expect(isMissingOne([1, null, 3])).to.equal(true)
	})

	it("returns false if passed in [1, 2, 3]", () => {
		expect(isMissingOne([1, 2, 3])).to.equal(false)
	})
})