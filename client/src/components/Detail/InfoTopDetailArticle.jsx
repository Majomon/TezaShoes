import { useStoreProducts } from "@/zustand/store";

export default function InfoTopDetailArticle() {
  const { detail } = useStoreProducts();

  return (
    <div>
      <h2 className="text-lg font-bold py-2">{detail.name}</h2>
      <p className="text-lg font-semibold py-2">${detail.price}</p>
    </div>
  );
}
