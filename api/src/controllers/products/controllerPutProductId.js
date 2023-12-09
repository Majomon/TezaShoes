const Products = require("../../models/products");

const controllerPutProductId = async ({
  id,
  name,
  category,
  options,
  price,
  description,
  images,
  settlement,
  promotion,
}) => {
  const updateProduct = await Products.findByIdAndUpdate(id, {
    name,
    category,
    options,
    price,
    description,
    images,
    settlement,
    promotion,
  });
  return `Producto de ID: ${id} modificado con exito`;
};

module.exports = controllerPutProductId;
