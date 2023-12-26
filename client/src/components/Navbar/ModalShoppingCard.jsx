import { CiShoppingCart } from "react-icons/ci";
import SidebarCart from "./SidebarCart";

function ModalShoppingCard({ isOpenCart, setIsOpenCart }) {
  return (
    <div className="mx-1">
      <button>
        <CiShoppingCart size={25} onClick={() => setIsOpenCart(true)} />
      </button>
      <SidebarCart isOpenCart={isOpenCart} setIsOpenCart={setIsOpenCart} />
    </div>
  );
}

export default ModalShoppingCard;
