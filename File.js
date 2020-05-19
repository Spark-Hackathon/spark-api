/*
	Spark API – File Class Definition
	This file was created by Spark
	Licensed under CC BY-NC-SA 4.0 (https://creativecommons.org/licenses/by-nc-sa/4.0/)
*/


// import required dependencies
const path = require("path")
const fs = require("fs")


class File {
	constructor(filename_, project_, options) {
		this.filename = filename_
		this.project = project_

		this.isPage = options.isPage

		this.data = {}

		if(this.isPage)
			this.path = `${__dirname}/pages/${this.project}/${this.filename}.json`
		else
			this.path = null
	}

	/*
		@method create
		create the file if it does not exist already
		@return {Null}
	*/
	create() {
		try {
			if(!fs.existsSync(this.path)) {
				fs.writeFileSync(this.path, JSON.stringify(this.data, null, 3))
			}
		} catch(err) {
			throw err
		}
	}

	/*
		@method delete
		delete the file
		@return {Null}
	*/
	delete() {
		try {
			fs.unlinkSync(this.path)
		} catch(err) {
			throw err
		}
	}

	/*
		@method loadData
		make sure the current data matches the file's data
		@return {Null}
	*/
	loadData() {
		const rawData = fs.readFileSync(this.path)
		const json = JSON.parse(rawData)

		this.data = json
	}

	/*
		@method save
		save & write the file to disk
		@return {Null}
	*/
	save() {
		try {
			fs.writeFileSync(this.path, JSON.stringify(this.data, null, 3))
		} catch(err) {
			throw err
		}
	}

	/*
		@method update
		@param {String} the key in the JSON to update
		@param {Object} the new value for the specified key
		@return {Null}
	*/
	update(component, data) {
		this.loadData()
		this.data[component] = data
		this.save()
	}
}


// export class
module.exports = File