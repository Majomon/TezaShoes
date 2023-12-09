const Product = require("../../models/products");

const postProductController = async ({
  name,
  category,
  options,
  price,
  description,
  images,
  settlement,
  promotion,
}) => {

  if (!name || !category || !price || !description || !images) {
    const missingField = !name ? 'name' : !category ? 'category' : !price ? 'price' : !description ? 'description' : 'images';
    throw new Error(`Falta ${missingField}`);
  }
  
  const newProduct = await Product.create({
    name,
    category,
    options,
    price,
    description,
    images,
    settlement,
    promotion,
  });

  return newProduct;
};

module.exports = postProductController;
