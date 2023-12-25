export default function CartCards({image,name,count,price,totalPrice,color}) {
  return (
    <li className="w-full h-full flex items-center gap-2">
      <img src={image} alt={name} className="w-16 h-16 mr-2" />
      <h2>{name}</h2>
      <div
        className={`w-8 h-8 border-gray-900 border-2 rounded-full`}
        style={{ backgroundColor: color }}
      ></div>
      <p>{price}</p>
      <p>{count}</p>
      <p>{totalPrice}</p>
    </li>
  );
}
