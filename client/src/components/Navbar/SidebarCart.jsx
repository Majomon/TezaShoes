import { CgClose } from "react-icons/cg";
import ItemsCart from "./ItemsCart";
import { Button } from "@nextui-org/react";

export default function SidebarCart({ isOpenCart, setIsOpenCart }) {
  return (
    <div
      className={`${
        isOpenCart ? "w-[500px]" : "w-0"
      } bg-colorWhite-100 min-h-screen fixed top-0 right-0 transition-all duration-300 z-30`}
    >
      <div className={`${!isOpenCart && "hidden"}`}>
        <div className="flex flex-col">
          <div className="flex flex-row items-center justify-between px-5 border-b-1 border-colorBlack-400 h-[50px]">
            <h2 className=" text-xl font-bold">Carrito</h2>
            <button className="" onClick={() => setIsOpenCart(false)}>
              <CgClose size={25} color="black" />
            </button>
          </div>
          <ItemsCart />
          <section className="px-[20px] Py-[5px] border-t-1 border-colorBlack-400 flex flex-col gap-y-[10px]">
            <article className="flex flex-row justify-between">
                <h3 className=" text-lg font-light">Total</h3>
                <p className=" text-lg font-semibold">$30.000</p>
            </article>
            <Button className=" bg-colorBlack-400 text-colorWhite-100 w-[100%] rounded-none">Completar Compra</Button>
          </section>
        </div>
      </div>
    </div>
  );
}
