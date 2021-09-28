'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pedidos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  pedidos.init({
    fechaingreso: DataTypes.DATE,
    fechaentrega: DataTypes.DATE,
    productid: {
					type: DataTypes.INTEGER,
					reference:{
						model: bread,
						key: 'id'
					}
				}
  }, {
    sequelize,
    modelName: 'pedidos',
  });
  return pedidos;
};