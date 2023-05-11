const express = require('express');
// const validateToken = require("../middleware/validateTokenHandler");
const router = express.Router();
const {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
} = require("../controllers/contactController");
const validateToken = require('../middleware/validateTokenHandler');

// router.route(validateToken);
router
  .route("/")
  .get(validateToken, getContacts)
  .post(validateToken, createContact);
router
  .route("/:id")
  .get(validateToken, getContact)
  .put(validateToken, updateContact)
  .delete(validateToken, deleteContact);


// router.route("/").post(createContact);
// router.route("/:id").put(updateContact);
// router.route("/:id").delete(deleteContact);


module.exports = router;