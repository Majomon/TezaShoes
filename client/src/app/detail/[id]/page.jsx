import Main from "@/components/Detail/Main";
import { Toaster } from "sonner";

async function getProductId(id) {
  const response = await fetch(`${process.env.URL_BASE_DEV}/products/${id}`);
  const data = await response.json();
  return data;
}
async function getAllProducts() {
  const response = await fetch(`${process.env.URL_BASE_DEV}/products`);
  const data = await response.json();
  return data;
}
async function DetailPage({ params }) {
  const product = await getProductId(params.id);
  const allproduct = await getAllProducts();


  return (
    <div>
      <Toaster position="top-center" />
      <Main product={product} allproduct={allproduct} />
    </div>
  );
}

export default DetailPage;
