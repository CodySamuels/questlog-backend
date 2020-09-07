// VARIABLES AND DEPENDENCIES
// ======================================================
const mongoose = require("mongoose");
const Schema = mongoose.Schema;


// SCHEMA
// ======================================================
const questSchema = new Schema({
    title: { type: String, required: true },
    questGiver: String,
    synopsis: String,
    reward: String,
    importance: Number,
    date: { type: Date, default: Date.now }
});

const Quest = mongoose.model("Quest", questSchema);


// EXPORT
// ======================================================
module.exports = Quest;