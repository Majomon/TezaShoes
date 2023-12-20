import MainHome from "@/components/Home/MainHome";

async function getAllProducts() {
  const response = await fetch(`${process.env.URL_BASE_DEV}/products`);
  const data = await response.json();
  return data;
}



async function Home() {
  const products = await getAllProducts();

  return (
    <>
      <MainHome products={products}/>
    </>
  );

}

export default Home;
