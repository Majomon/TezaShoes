import { CgClose } from "react-icons/cg";
import ItemsCart from "./ItemsCart";

export default function SidebarCart({ isOpenCart, setIsOpenCart }) {
  return (
    <div
      className={`${
        isOpenCart ? "w-[500px]" : "w-0"
      } bg-colorWhite-100 min-h-screen fixed top-0 right-0 transition-all duration-300 z-30`}
    >
      <div className={`${!isOpenCart && "hidden"} pt-3`}>
        <div className="flex flex-col">
          <div className="flex items-center justify-between px-5 border-b-1 border-colorBlack-400 h-[50px]">
            <h2 className=" text-lg font-bold">Carrito</h2>
            <button className="" onClick={() => setIsOpenCart(false)}>
              <CgClose size={25} color="black" />
            </button>
          </div>
          <ItemsCart />
        </div>
      </div>
    </div>
  );
}
