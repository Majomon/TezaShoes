import Main from "@/components/Detail/Main";
import { Toaster } from "sonner";

async function getProductId(id) {
  const response = await fetch(`${process.env.URL_BASE_DEV}/products/${id}`);
  const data = await response.json();
  return data;
}

async function DetailPage({ params }) {
  const product = await getProductId(params.id);

  return (
    <div>
      <Toaster position="top-center" />
      <Main product={product} />
    </div>
  );
}

export default DetailPage;
