const productos = require("../database/productos");

const getProductos = (request, response) => {
    response.status(200).json({
        success: true, 
        data: productos
    });
}

module.exports = {
    getProductos
}