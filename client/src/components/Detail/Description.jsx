export default function Description({ product }) {
  return (
    <div className="w-full py-14 ">
      <h2 className="text-xl  font-bold">Descripción</h2>
      <p className="text-sm pt-4">{product.description}</p>
    </div>
  );
}
