// VARIABLES AND DEPENDENCIES
// ======================================================
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;


// SCHEMA
// ======================================================
const UserSchema = new Schema({
    username: {
        type: String,
        trim: true,
        unique: true,
        required: "Username is required."
    },

    password: {
        type: String,
        trim: true,
        required: "Password is required.",
        validate: [({ length }) => length >= 6, "Password should be longer."]
    },

    userCreated: {
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model("User", userschema);


// SALT AND HASH PASSWORD
// ======================================================
UserSchema.pre('save', function (next) {
    const user = this;

    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();

    // generate a salt
    bcrypt.genSalt(10, function (err, salt) {
        if (err) return next(err);

        // hash the password along with our new salt
        bcrypt.hash(user.password, salt, function (err, hash) {
            if (err) return next(err);

            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
});


// EXPORT
// ======================================================
module.exports = User;