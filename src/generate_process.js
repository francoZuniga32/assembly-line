const sequelize_model = require("./sequelize_generator/sequelize_model");
class Product {
  name = "";
  structure = {};
  options = {};
  url = '';
  construct(name, structure, options) {
    this.name = this.name;
    this.structure = structure;
    this.options = options;
    this.url = this.options.basePath + `/${this.name}.js`
  }
  set() {
      sequelize_model.generate(this.name, this.structure);
  }
}

module.exports = Producto;
