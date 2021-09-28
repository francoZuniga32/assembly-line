const path = require("path");
const Product = require("./src/generate_product");
const Order = require("./src/generate_order");

//this is a function to create the structures of the assambly line
//define the base path
const basePath = path.join(__dirname, "api");
//create a one product
var product = new Product(
  "bread",
  {
    sabor: "string",
    tamaño: "decimal",
  },
  {
    basePath: basePath,
  }
);

product.set();

var order = new Order(
  "pedidos",
  {
    fechaingreso: "date",
    fechaentrega: "date"
  },
  product,
  {
    basePath: basePath,
  }
)

order.set();