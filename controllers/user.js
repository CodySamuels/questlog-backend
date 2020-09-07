// DEPENDENCIES
// ======================================================
// const db = require("../models");
const router = require("express").Router();
const bcrypt = require('bcrypt');


// ROUTES
// ======================================================
router.get('/readsessions', (req, res) => {
    (!req.session.user) ? res.status(403).end() : res.json(req.session.user)
})

router.post("/login", (req, res) => res.send("nothing to see here"))

router.post("/register", (req, res) => res.send("nothing to see here"))

router.get("/logout", (req, res) => {
        req.session.destroy();
        res.send("logout complete!")
})


// EXPORT
// ======================================================
module.exports = router;