/*
	Spark API – Pages Endpoints File
	This file was created by Spark
	Licensed under CC BY-NC-SA 4.0 (https://creativecommons.org/licenses/by-nc-sa/4.0/)
*/


// import required dependencies
const express = require("express")
const app = express()

const path = require("path")
const fs = require("fs")


// application setup
app.use(express.urlencoded({ extended: false }))
app.use(express.json())


// api endpoints
app.get("/", (req, res) => {
	res.json({
		"msg": "Pages Routes"
	})
})

app.get("/:project/:route", (req, res) => {
	const proj = req.params.project
	const route = req.params.route

	const jsonPath = `${__dirname}/../pages/${proj}/${route}.json`
	const file = path.normalize(jsonPath)
	
	res.sendFile(file)
})

app.get("/*", (req, res) => {
	res.sendStatus(404)
})


// export app
module.exports = app