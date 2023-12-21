import MainHome from "@/components/Home/MainHome";

async function getAllProducts() {
  const response = await fetch(`http://localhost:8080/products`);
  const data = await response.json();
  return data;
}



async function Home() {
  const product = await getAllProducts();

  return (
    <>
      <MainHome product={product}/>
    </>
  );

}

export default Home;
