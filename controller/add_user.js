require("dotenv").config();
const jwt = require('jsonwebtoken')
const User = require("../model/admin_login");
const securePassword = require("../utils/securePassword");
const errorFunction = require('../utils/errorFunction')
const defaultController = require('./defualtController')

	
const addUser = async (username, password) => {
	try {
		console.log("add username", username);
		console.log("add password", password);
		
		
		const existingUser = await User.findOne({
			username: username
		}).then((result) => {
			return false
		}).catch((err) => {
			return true
		});

		console.log("Existing user:", existingUser);

		if (existingUser) {
			console.log('User exist')
			return false
		}
		else {
			// console.log('Inside else of adduser', typeof password, password);
			const hashedPassword =  await securePassword(password);
			// console.log('hash password', hashedPassword);

			const token = jwt.sign(
				{ _id: User._id, username},
				process.env.TOKEN_KEY,
				{
				  expiresIn: "2h",
				},
			  );

			console.log('TOKEN', token);
			const newUser =  User.insertMany({
				username: username,
				password: hashedPassword.toString(),
				token: token
			});
			if (newUser) {
				console.log('User inserted')
				return true;
			}
		}
	}
	catch (error) {
		console.log(error);
	}
}

module.exports = addUser