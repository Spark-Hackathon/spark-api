/*
	Spark API – API Configuration File
	This file was created by Spark
	Licensed under CC BY-NC-SA 4.0 (https://creativecommons.org/licenses/by-nc-sa/4.0/)
*/


// import required dependencies
const express = require("express")
const app = express()


// application setup
app.use(express.urlencoded({ extended: false }))
app.use(express.json())


// load endpoint files
const applications = require("./endpoints/apply")
const pages = require("./endpoints/pages")
const ping = require("./endpoints/ping")
const cms = require("./endpoints/cms")


// api endpoints
app.get("/", (req, res) => {
	res.json({
		"msg": "Spark API"
	})
})

app.use("/apply", applications)
app.use("/pages", pages)
app.use("/ping", ping)
app.use("/cms", cms)


// start server
app.listen(8000, () => console.log("Spark API on :8000"))


// export app
module.exports = app