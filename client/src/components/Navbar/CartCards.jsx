export default function CartCards({
  image,
  name,
  count,
  price,
  totalPrice,
  color,
  size,
}) {
  return (
    <li className="w-full h-[110px] border-b-1 flex items-center justify-between p-[10px]">
      <div className="flex gap-x-[8px]">
        <img src={image} alt={name} className="w-16 h-16" />
        <section className="flex flex-col h-full ">
          <h2 className=" text-md font-bold text-colorBlack-400">{name}</h2>
          <div
            className={`w-[14px] h-[14px] border-gray-900 border-1 rounded-full`}
            style={{ backgroundColor: color }}
          ></div>
          <p className=" text-xs">{size}</p>
          <p>{count}</p>
        </section>
      </div>
      <section className="flex flex-col justify-between h-full">
        <p>${price}</p>
        <p>{totalPrice}</p>
      </section>
    </li>
  );
}
