import Carousel from "./Carousel";
import Description from "./Description";
import DetailArticle from "./DetailArticle";
import ShippingCalculator from "./ShippingCalculator";

export default function Main({ product }) {
  return (
    <div className="w-full min-h-screen px-10 flex">
      <div className="w-8/12 pt-4 px-6">
        <Carousel product={product} />
        <Description product={product} />
      </div>
      <div className="w-4/12 pt-4 px-6">
        <DetailArticle product={product} />
        <ShippingCalculator />
      </div>
    </div>
  );
}
