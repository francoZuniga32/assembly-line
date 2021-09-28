const sequelize_model = require("./sequelize_generator/sequelize_model");
const replace = require("./replace/remplace");

class RawMaterial {
  name = "";
  structure = {};
  options = {};
  product = null;
  url = "";
  construct(name, structure, product, options) {
    this.name = this.name;
    this.structure = structure;
    this.options = options;
    this.url = this.options.basePath + `/${this.name}.js`;
    this.product = product;
  }

  set() {
    sequelize_model.generate(this.name, this.structure);
    //replace the function in the
    replace(this.url, "}, {", `}, {`);
  }
}

module.exports = RawMaterial
