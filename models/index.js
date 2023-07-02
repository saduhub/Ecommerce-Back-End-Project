// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});
// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
});
// Products belongToMany Tags (through ProductTag). ID of product tag will define the relationship between a specific product and a specific tag. (Tag: Snacks, Product: Jalapeno chips, Product-Tag: Unique link between the two?)
Product.belongsToMany(Tag, {
  through: 'ProductTag',
  foreignKey: 'product_id',
})
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: 'ProductTag',
  foreignKey: 'tag_id',
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
