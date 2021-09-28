const Producto = require('./generate_producto');

const modelo = require('./sequelize_generator/sequelize_model');

modelo.generar('cosa', {
    pepe:"string",
});
