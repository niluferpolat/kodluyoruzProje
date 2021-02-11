const express = require("express");
const { createAdopt, fetchAdopt, getSingleAdopt, fetchFourAdopt, deleteAdopt, updateAdopt } = require("../controllers/adoptController");
const router = express.Router();

router.post("/adoption/addAdopt", createAdopt);
router.get("/adoption", fetchAdopt)
router.get("/fouradoption", fetchFourAdopt)
router.get("/adoption/:id", getSingleAdopt);
router.delete("/adoption/:id", deleteAdopt);
router.patch("/adoption/:id", updateAdopt)

module.exports = router;