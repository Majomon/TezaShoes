const Product = require("../../models/products");

const controllerPostProduct = async ({
  name,
  category,
  options,
  price,
  description,
  images,
  offer,
  newProduct,
  isActive,
}) => {
  if (!name || !category || !price || !description || !images) {
    const missingField = !name
      ? "name"
      : !category
      ? "category"
      : !options
      ? "options"
      : !price
      ? "price"
      : !description
      ? "description"
      : "images";
    throw new Error(`Falta ${missingField}`);
  }

  const newProd = await Product.create({
    name,
    category,
    options,
    price,
    description,
    images,
    offer,
    newProduct,
    isActive,
  });

  return newProd;
};

module.exports = controllerPostProduct;
