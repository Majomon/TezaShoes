import Carousel from "./Carousel";
import Description from "./Description";
import DetailArticle from "./DetailArticle";

export default function Main({ product }) {
  return (
    <div className="w-full min-h-screen px-10 flex">
      <div className="w-8/12 pt-4 px-14">
        <Carousel product={product} />
        <Description product={product} />
      </div>
      <DetailArticle product={product}/>
    </div>
  );
}
