// DEPENDENCIES AND VARIABLES
// ===============================================
const express = require("express")
const mongoose = require("mongoose")
const app = express();
const cors = require("cors")
const PORT = process.env.PORT || 3001;
require('dotenv').config()


// EXPRESS CONFIGURATION
// =====================================================
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// MONGOOSE
// =====================================================
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});


// CORS
// =====================================================
// LOCAL TESTING
app.use(cors({
    origin: ["http://localhost:3000"],
    credentials: true
}))

// DEPLOYED
// app.use(cors({
//     origin: ["https://cs-google-readinglist.herokuapp.com"],
//     credentials: true
// }))


// ROUTES
// =====================================================
const routes = require('./controllers/');
app.use('/', routes);

// HOME ROUTE
app.get("/", (req, res) => res.send("nothing to see here"))


// APP LISTEN
// =====================================================
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});