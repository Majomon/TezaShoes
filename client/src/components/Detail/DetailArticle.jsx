import ContainerColors from "./ContainerColors";
import InfoTopDetailArticle from "./InfoTopDetailArticle";

export default function DetailArticle({ product }) {
  return (
    <div className="w-4/12 pt-4 px-14">
      <InfoTopDetailArticle product={product} />
      <ContainerColors product={product} />
    </div>
  );
}
