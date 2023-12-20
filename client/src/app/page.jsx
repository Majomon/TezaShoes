import MainHome from "@/components/Home/MainHome";

async function getAllProducts() {
  const response = await fetch(`${process.env.URL_BASE_DEV}/products`);
  const data = await response.json();
  return data;
}
async function Home() {
  const product = await getAllProducts();
  return (
    <>
      <MainHome />
    </>
  );

}

export default Home;
