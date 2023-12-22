import { CiShoppingCart } from "react-icons/ci";
import { CgClose } from "react-icons/cg";
import ItemsCart from "./ItemsCart";

function ModalShoppingCard({ isOpenCart, setIsOpenCart }) {
  return (
    <div className="mx-1">
      <button>
        <CiShoppingCart size={25} onClick={() => setIsOpenCart(true)} />
      </button>
      <div
        className={`${
          !isOpenCart && "hidden"
        } bg-gray-400/25 min-h-screen w-full fixed top-0 left-0 right-0 backdrop-blur-sm z-10`}
        onClick={() => setIsOpenCart(false)}
      />
      <div
        className={`${
          isOpenCart ? "w-[400px]" : "w-0"
        } bg-white min-h-screen fixed top-0 right-0 transition-all duration-300 z-30`}
      >
        <div className={`${!isOpenCart && "hidden"} pt-3`}>
          <div className="flex flex-row items-center justify-start px-5 ">
            <button className="" onClick={() => setIsOpenCart(false)}>
              <CgClose size={25} color="black" />
              <ItemsCart
                isOpenCart={isOpenCart}
                setIsOpenCart={setIsOpenCart}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalShoppingCard;
