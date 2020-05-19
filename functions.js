/*
	Spark API – Helper Functions File
	This file was created by Spark
	Licensed under CC BY-NC-SA 4.0 (https://creativecommons.org/licenses/by-nc-sa/4.0/)
*/


/*
	@method isTypeOf
	@param {Anything} the variable the function's evaluting the datatype of
	@param {String} what datatype the variable should be
	@return {Boolean} true if matches, false if not
*/
const isTypeOf = (input, datatype) => typeof input == datatype


/*
	@method isNotTypeOf
	@param {Anything} the variable the function's evaluting the datatype of
	@param {String} what datatype the variable should be
	@return {Boolean} true if does not match, false if matches
*/
const isNotTypeOf = (input, datatype) => typeof input != datatype


/*
	@method isMissingOne
	@param {Array} the array to loop through
	@return {Boolean} true if one of the items is undefined
*/
const isMissingOne = arr => {
	for(let item of arr)
		if(!item) return true

	return false
}


/*
	@method sendError
	@param {String} the error message
	@param {Number} the HTTP status code
	@param {Object} express response object
	@return {Error} the message and status code given
*/
const sendError = (message, status_code, res) => {
	res.status(status_code).json({
		"msg": message,
		"status": status_code
	})
}


// export functions
module.exports = {
	isTypeOf,
	isNotTypeOf,
	isMissingOne,
	sendError
}