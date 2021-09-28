const sequelize_model = require("./sequelize_generator/sequelize_model");
const replace = require("./replace/remplace");

module.exports = class Product{
  constructor(name, structure, options) {
    this.name = name;
    this.structure = structure;
    this.options = options;
    this.url = this.options.basePath
  }
  async set(){
    console.log("Generando modelo")
    await sequelize_model.generate(this.name, this.structure);
  }
};
