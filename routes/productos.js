const { Router } = require("express");
const { getProductos } = require("../controllers/productosController");

const router = Router();

router.get('/', getProductos);

module.exports = router;