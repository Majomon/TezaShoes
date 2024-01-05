import { useEffect, useState } from "react";
import DeleteIcon from "../../../assets/svg/deleteIcon";
import Counter from "../Detail/Counter";
import ItemsCart from "./ItemsCart";

export default function CartCards({
  image,
  name,
  count,
  price,
  totalPrice,
  color,
  size,
  stock,
  setListCartArray,
  listCartArray,
  resultTotal
}) {

  const [countCant, setCountCant] = useState(null);
  const [subTotalPrice,setSubTotalPrice] = useState(totalPrice);

  
  useEffect(() => {
    setCountCant(count)
  },[count])

 /*  useEffect(()=>{
    const listCardsCart = JSON.parse(localStorage.getItem("cart"))
    const resultTotal = listCardsCart.reduce((acc,curr) => {
      return acc + curr.totalPrice;
    },0);
    setTotalCart(resultTotal);
  },[countCant]) 
 */
  /* const resultTotal = () => {
    listCartArray?.reduce((acc,curr) => {
      return acc + curr.totalPrice;
    },0);
  } */

  const decrementCount = () => {
    if (countCant > 1) {
      setCountCant(countCant - 1);
      const currentListCart = [...listCartArray];
      
      const indexCardsCart = currentListCart.findIndex(item => item.name === name && item.color === color && item.size === size);
      const itemCardsCart = currentListCart.splice(indexCardsCart,1);
      const newItemCart = itemCardsCart[0];

      newItemCart.count = countCant - 1;
      newItemCart.totalPrice = newItemCart.count * price;

      setSubTotalPrice(newItemCart.totalPrice);

      currentListCart.splice(indexCardsCart,0,newItemCart);

      resultTotal();

      localStorage.setItem('cart',JSON.stringify(currentListCart));
    }
  };

  const incrementCount = () => {
    if (countCant < stock) {
      setCountCant(countCant + 1);
      
      const currentListCart = [...listCartArray];

      const indexCardsCart = currentListCart.findIndex(item => item.name === name && item.color === color && item.size === size);
      const itemCardsCart = currentListCart.splice(indexCardsCart,1);
      const newItemCart = itemCardsCart[0];

      newItemCart.count = countCant + 1;
      newItemCart.totalPrice = newItemCart.count * price;

      setSubTotalPrice(newItemCart.totalPrice);

      currentListCart.splice(indexCardsCart,0,newItemCart);

      resultTotal();
      
      localStorage.setItem('cart',JSON.stringify(currentListCart));
  
    }
  };

  const hancleClickDelete = () => {
    const listCardsCart = JSON.parse(localStorage.getItem("cart"));

    const indexListCard = listCardsCart.findIndex(item => item.name === name && item.color === color && item.size === size);
    listCardsCart.splice(indexListCard,1);
    localStorage.setItem('cart',JSON.stringify(listCardsCart));

    if(listCardsCart.length === 0){
        localStorage.removeItem("cart");
    }
    setListCartArray(listCardsCart);
  }

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
          <p>${subTotalPrice}</p>
        </section>
        <button className=" cursor-pointer w-[20px] absolute top-0 right-0" onClick={hancleClickDelete}>
          <DeleteIcon />
        </button>
      </li>
  );
}
