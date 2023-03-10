'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class brands extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.invoices,{
        through:models.inoicesBrands,
        foreignKey:'idBrand'
      })
    }
  }
  brands.init({
    name: DataTypes.STRING,
    price: DataTypes.STRING,
    stock: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'brands',
    freezeTableName: true,
    name:{
      singular:'brands',
      plural: 'brands',
    }
  });
  return brands;
};