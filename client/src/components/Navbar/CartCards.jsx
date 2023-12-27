import { useEffect, useState } from "react";
import DeleteIcon from "../../../assets/svg/deleteIcon";
import Counter from "../Detail/Counter";

export default function CartCards({
  image,
  name,
  count,
  price,
  totalPrice,
  color,
  size,
  stock,
}) {

  const [countCant, setCountCant] = useState(count);

  useEffect(() => {
    setCountCant(count)
  },[count])

  console.log(countCant)

  const decrementCount = () => {
    if (countCant > 1) {
      setCountCant(countCant - 1);

      const listCardsCart = JSON.parse(localStorage.getItem("cart"))
    
      const indexCardsCart = listCardsCart.findIndex(item => item.name === name && item.color === color && item.size === size);
      const itemCardsCart = listCardsCart.splice(indexCardsCart,1);

      itemCardsCart[0].count = countCant - 1;
      itemCardsCart[0].totalPrice = itemCardsCart[0].count * price;

      const currentListCardsCart = [...listCardsCart,...itemCardsCart];
      
      localStorage.setItem('cart',JSON.stringify(currentListCardsCart));
    }
  };

  const incrementCount = () => {
    if (countCant < stock) {
      setCountCant(countCant + 1);
      
      const listCardsCart = JSON.parse(localStorage.getItem("cart"))
    
      const indexCardsCart = listCardsCart.findIndex(item => item.name === name && item.color === color && item.size === size);
      const itemCardsCart = listCardsCart.splice(indexCardsCart,1);

      itemCardsCart[0].count = countCant + 1;

      const currentListCardsCart = [...listCardsCart,...itemCardsCart];
      
      localStorage.setItem('cart',JSON.stringify(currentListCardsCart));
    }
  };

  return (
    <li className="w-full h-[110px] border-b-1 flex flex-col gap-y-[5px] items-center justify-between p-[10px] relative">
      <div className="flex gap-x-[8px] w-full h-16">
        <img src={image} alt={name} className="w-16 h-16" />
        <section className="flex flex-col justify-between h-full">
          <h2 className=" text-md font-bold text-colorBlack-400">{name}</h2>
          <div
            className={`w-[16px] h-[16px] border-gray-900 border-1 rounded-full`}
            style={{ backgroundColor: color }}
          ></div>
          <p className=" text-sm">{size}</p>
        </section>
      </div>
      <section className="flex items-end justify-between w-full">
        {/* <p>{count}</p> */}
        <Counter
          count={countCant}
          incrementCount={incrementCount}
          decrementCount={decrementCount}
        />
        <p className=" text-colorGray-100">${price}</p>
        <p>${totalPrice}</p>
      </section>
      <button className=" cursor-pointer w-[20px] absolute top-0 right-0">
        <DeleteIcon />
      </button>
    </li>
  );
}
