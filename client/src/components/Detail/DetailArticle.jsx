import ContainerColorsAndSizes from "./ContainerColorsAndSizes";
import InfoTopDetailArticle from "./InfoTopDetailArticle";

export default function DetailArticle({ product }) {
  return (
    <div className="w-4/12 pt-4 px-14">
      <InfoTopDetailArticle product={product} />
      <ContainerColorsAndSizes product={product} />
    </div>
  );
}
