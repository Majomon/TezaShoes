import Main from "@/components/Detail/Main";

async function getProductId(id) {
  const response = await fetch(`${process.env.URL_BASE_DEV}/products/${id}`);
  const data = await response.json();
  return data;
}

async function DetailPage({ params }) {
  const product = await getProductId(params.id);

  return <Main product={product} />;
}

export default DetailPage;
