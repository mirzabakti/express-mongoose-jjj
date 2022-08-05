const express = require("express");
const router = express.Router();

const {
  getAllUser,
  getUserByID,
  addUser,
  updateUserByID,
  deleteUserByID,
} = require("../controller/UserController");

router.get("/", getAllUser);
router.get("/:id", getUserByID);
router.post("/", addUser);
router.put("/:id", updateUserByID);
router.delete("/:id", deleteUserByID);

module.exports = router;
