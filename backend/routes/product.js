const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/product');

//GET POST PUT DELETE
// http://localhost:3001/api/role/registerProduct
router.post("/registerProduct", ProductController.registerProduct);
// http://localhost:3001/api/role/listProduct
router.get("/listProduct", ProductController.listProduct);

module.exports = router;