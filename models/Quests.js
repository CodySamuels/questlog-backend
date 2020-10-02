// VARIABLES AND DEPENDENCIES
// ======================================================
const mongoose = require("mongoose");
const Schema = mongoose.Schema;


// SCHEMA
// ======================================================
const QuestSchema = new Schema({
    title: { type: String, required: true },
    questGiver: String,
    synopsis: String,
    reward: String,
    importance: Number,
    complete: Boolean,
    date: { type: Date, default: Date.now }
});

const Quest = mongoose.model("Quest", QuestSchema);


// EXPORT
// ======================================================
module.exports = Quest;