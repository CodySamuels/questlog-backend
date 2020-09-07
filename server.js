// DEPENDENCIES AND VARIABLES
// ===============================================
const express = require("express")
const mongoose = require("mongoose")
const app = express();
const cors = require("cors")
const PORT = process.env.PORT || 3001;
// const session = require("express-session")
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


// SESSION
// =====================================================
// LOCAL TESTING
// app.use(session({
//     secret: process.env.SESSION_SECRET,
//     resave: false,
//     saveUninitialized: true,
//     cookie: {
//         maxAge: 7200000
//     }
// }))

// DEPLOYED
// app.use(session({
//     secret: process.env.SESSION_SECRET,
//     resave: false,
//     saveUninitialized: false,
//     proxy: true,
//     cookie: {
//       maxAge: 2 * 60 * 60 * 1000,
//       sameSite: "none",
//       secure: true
//     }
//   }))


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