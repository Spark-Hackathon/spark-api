/*
	Spark API – Ping Endpoints File
	This file was created by Spark
	Licensed under CC BY-NC-SA 4.0 (https://creativecommons.org/licenses/by-nc-sa/4.0/)
*/


// import required dependencies
const express = require("express")
const app = express()

const { isMissingOne, isNotTypeOf, sendError } = require("../functions")


// application setup
app.use(express.urlencoded({ extended: false }))
app.use(express.json())


// api endpoints
app.get("/", (req, res) => {
	res.json({
		"msg": "Ping Routes"
	})
})

app.post("/hackathon/mentors", (req, res) => {
	const missingArgument = isMissingOne([
		req.body.tableNumber, 
		req.body.groupName, 
		req.body.question])

	const invalidTableNumber = isNotTypeOf(req.body.tableNumber, "number")
	const invalidGroupName = isNotTypeOf(req.body.groupName, "string")
	const invalidQuestion = isNotTypeOf(req.body.question, "string")

	if(missingArgument)
		sendError("Missing either table number, group name, or question", 501, res)
	else if(invalidTableNumber)
		sendError("The table number should be a Number", 501, res)
	else if(invalidGroupName)
		sendError("The group name should be a String", 501, res)
	else if(invalidQuestion)
		sendError("The question should be a String", 501, res)
	else
		res.status(200).json({
			"msg": "Pinging mentors...",
			"status": 200
		})
})

app.post("/hackathon/organizers", (req, res) => {
	const missingArgument = isMissingOne([
		req.body.sender, 
		req.body.message])

	const invalidSender = isNotTypeOf(req.body.sender, "string")
	const invalidMessage = isNotTypeOf(req.body.message, "string")

	if(missingArgument)
		sendError("Missing either a sender or message", 501, res)
	else if(invalidSender)
		sendError("The sender should be a String", 501, res)
	else if(invalidMessage)
		sendError("The message should be a String", 501, res)
	else
		res.json({
			"msg": "Pinging organizers...",
			"status": 200
		})
})

app.get("/*", (req, res) => {
	res.sendStatus(404)
})


// export app
module.exports = app