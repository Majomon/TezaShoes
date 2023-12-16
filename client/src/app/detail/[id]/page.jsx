import Carousel from "@/components/Detail/Carousel";
import Description from "@/components/Detail/Description";
import DetailArticle from "@/components/Detail/DetailArticle";

async function getProductId(id) {
  const response = await fetch(`${process.env.URL_BASE_DEV}/products/${id}`);
  const data = await response.json();
  return data;
}

async function DetailPage({ params }) {
  const product = await getProductId(params.id);
  return (
    <div className="w-full min-h-screen px-10 flex">
      <div className="w-8/12 pt-4 px-14">
        <Carousel product={product} />
        <Description product={product} />
      </div>
      <DetailArticle product={product} />
    </div>
  );
}

export default DetailPage;
