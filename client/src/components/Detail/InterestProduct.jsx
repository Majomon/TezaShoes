import { useStoreProducts } from "@/zustand/store";
import Card from "../Card/Card";

function InterestProduct() {
  const { detail, allProducts } = useStoreProducts();

  const sameCategoryProducts = allProducts.filter(
    (product) =>
      product.category === detail.category && product._id !== detail._id
  );

  const getRandomProducts = (arr, n) => {
    const mescla = arr.sort(() => 0.5 - Math.random());
    return mescla.slice(0, n);
  };

  const randomProducts = getRandomProducts(sameCategoryProducts, 4);

  return (
    <div className="w-11/12 h-fit mx-auto">
      <h2>Productos relacionados</h2>
      <div className="w-full h-full flex justify-between items-center py-10 gap-x-10">
        {randomProducts.map((product) => (
          <Card
            key={product._id}
            id={product._id}
            title={product.name}
            price={product.price}
            cantDues={product.cantDues}
            newProduct={product.newProduct}
            images={product.images}
          />
        ))}
      </div>
    </div>
  );
}

export default InterestProduct;
