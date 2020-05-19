/*
	Spark API – CMS Endpoints File
	This file was created by Spark
	Licensed under CC BY-NC-SA 4.0 (https://creativecommons.org/licenses/by-nc-sa/4.0/)
*/


// import required dependencies
const express = require("express")
const app = express()

const path = require("path")
const fs = require("fs")

const File = require("../File")


// application setup
app.use(express.urlencoded({ extended: false }))
app.use(express.json())


// api endpoints
app.get("/", (req, res) => {
	res.json({
		"msg": "CMS Routes"
	})
})

app.get("/pages/:project/all", (req, res) => {
	const project = req.params.project
	const projectDir = `${__dirname}/../pages/${project}`

	const dir = path.normalize(projectDir)

	fs.readdir(dir, (err, files) => {
		if(err)
			throw err

		const pages = files.map(file => file.substring(0, file.length-5))

		res.status(200).json({
			"project": project,
			"numberOfPages": files.length,
			pages
		})
	})
})

app.post("/pages/:project/new", (req, res) => {
	const project = req.params.project
	const title = req.body.title

	const newPage = new File(title, project, { isPage: true })
	newPage.create()

	res.sendStatus(201)
})

app.post("/pages/:project/delete", (req, res) => {
	const project = req.params.project
	const title = req.body.title

	const newPage = new File(title, project, { isPage: true })
	newPage.delete()

	res.sendStatus(200)
})

app.post("/pages/:project/update", (req, res) => {
	const project = req.params.project
	const title = req.body.title
	const component = req.body.component
	const data = req.body.data

	const newPage = new File(title, project, { isPage: true })
	newPage.update(component, data)

	res.sendStatus(200)
})

app.get("/*", (req, res) => {
	res.status(404).json({
		"msg": "404 - Page Not Found"
	})
})


// export app
module.exports = app