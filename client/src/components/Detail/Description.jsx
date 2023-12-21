import { useStoreProducts } from "@/zustand/store";

export default function Description() {
  const { detail } = useStoreProducts();

  return (
    <div className="w-full py-14 ">
      <h2 className="text-xl  font-bold">Descripción</h2>
      <p className="text-sm pt-4">{detail.description}</p>
    </div>
  );
}
