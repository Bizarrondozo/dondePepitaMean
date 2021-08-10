const express = require('express');
const router = express.Router();
const StoreController = require('../controllers/store');

//GET POST PUT DELETE
// http://localhost:3001/api/store/registerStore
router.post("/registerStore", StoreController.registerStore);
// http://localhost:3001/api/store/listStore
router.get("/listStore", StoreController.listStore);

module.exports = router;