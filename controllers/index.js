// DEPENDENCIES AND VARIABLES
// ===============================================
const express = require("express");
const router = express.Router();
const questRoutes = require("./quests")
const userRoutes = require("./user")


// SUBROUTES
// ===============================================
router.use("/api/quests",questRoutes)
router.use("/api/users",userRoutes)


// EXPORT
// ===============================================
module.exports = router