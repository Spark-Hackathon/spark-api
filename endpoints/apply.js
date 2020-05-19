/*
	Spark API – Application Endpoints File
	This file was created by Spark
	Licensed under CC BY-NC-SA 4.0 (https://creativecommons.org/licenses/by-nc-sa/4.0/)
*/


// import required dependencies
const express = require("express")
const app = express()

const dotenv = require("dotenv").config()
const Airtable = require("airtable")


// application setup
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

const base = new Airtable({ apiKey: process.env.API_KEY }).base(process.env.BASE)


// api endpoints
app.get("/", (req, res) => {
	res.json({
		"msg": "Application Routes"
	})
})

app.post("/hackathon/participant", (req, res) => {
	if(req.body.first_name == "TESTING") {
		res.status(200).json({
			"msg": "Successfully accepted new Spark Participant application!",
			"status": 200
		})
	} else {
		base("Participants").create({
			"First Name": req.body.first_name,
			"Last Name": req.body.last_name,
			"Email Address": req.body.email,
			"Date of Birth": req.body.date_of_birth,
			"School": req.body.school,
			"Grade": req.body.grade,
			"Sex": req.body.sex,
			"Experience": req.body.experience,
			"Race/Ethnicity": req.body.race,
			"Hopes & Dreams": req.body.hopes,
			"T-Shirt Size": req.body.t_shirt_size,
			"Borrow Laptop?": req.body.borrow_laptop,
			"Parent/Guardian Name": req.body.adult_name,
			"Parent/Guardian Email": req.body.adult_email,
			"Parent/Guardian Phone Number": req.body.adult_phone,
			"Have Participated Before?": req.body.participated_before,
			"Refer Name": req.body.refer_name,
			"Refer Email": req.body.refer_email
		}, { typecast: true }, (err, record) => {
			if(err)
				console.error(err)

			res.status(200).json({
				"msg": "Successfully accepted new Spark Participant application!",
				"status": 200
			})
		})
	}
})

app.post("/hackathon/volunteer", (req, res) => {
	if(req.body.first_name == "TESTING") {
		res.status(200).json({
			"msg": "New volunteer successfully signed up!",
			"status": 200
		})
	} else {
		base("Volunteers").create({
			"First Name": req.body.first_name,
			"Last Name": req.body.last_name,
			"Email Address": req.body.email,
			"Company/Organization/School": req.body.company_organization_school,
			"Sex": req.body.sex,
			"Role": req.body.role,
			"Availability": req.body.availablity,
			"Assistance Type": req.body.type,
			"Workshop/Expertise": req.body.workshop_expertise,
			"T-Shirt Size": req.body.t_shirt_size,
			"Comments/Questions": req.body.comments_or_questions
		}, { typecast: true }, (err, record) => {
			if(err) 
				throw err

			res.status(200).json({
				"msg": "New volunteer successfully signed up!",
				"status": 200
			})
		})
	}
})

app.get("/*", (req, res) => {
	res.sendStatus(404)
})


// export app
module.exports = app