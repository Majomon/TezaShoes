export default function InfoTopDetailArticle({product}) {
  return (
    <div>
      <h2 className="text-lg font-bold">{product.name}</h2>
      <p className="text-lg font-semibold ">{product.price}</p>
    </div>
  );
}
