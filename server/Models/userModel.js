const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
	name: {
		type: String,
		minlength: 3,
		maxlength: 20,
		required: true,
	},
	surname: {
		type: String,
		minlength: 3,
		maxlength: 20,
		required: true,
	},
	email: {
		type: String,
		trim: true,
		lowercase: true,
		unique: true,
		// validate: {
		// 	validator: function (v) {
		// 		return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
		// 	},
		// 	message: "Please enter a valid email",
		// },
		required: [true, "Email required"],
	},
	password: {
		type: String,
		required: true,
		minlength: 7,
	},
	avatar: {
		type: String,
	},
	color: {
		type: String,
	},
	boards: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'board',
		},
	],
});

module.exports = mongoose.model('user', userSchema);
