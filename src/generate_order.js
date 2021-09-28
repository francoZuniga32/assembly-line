const sequelize_model = require("./sequelize_generator/sequelize_model");
const replace = require("./replace/remplace");

module.exports = class Order {
  constructor(name, structure, product, options) {
    this.name = name;
    this.structure = structure;
	this.structure.productid = "integer"
    this.options = options;
    this.url = this.options.basePath + `/databases/models/${this.name}.js`;
    this.product = product;
  }
  getName() {
    return this.name;
  }
  async set() {
    await sequelize_model.generate(this.name, this.structure);
    //call the model product for association
	await replace(
		this.url,
		" => {",
		` => {
				const ${this.product.name} = require("./${this.product.name}.js")`
	  );
  
	  replace(
		this.url,
		"productid: DataTypes.INTEGER",
		`productid: {
					type: DataTypes.INTEGER,
					reference:{
						model: ${this.product.name},
						key: 'id'
					}
				}`
	  );
  }
};
