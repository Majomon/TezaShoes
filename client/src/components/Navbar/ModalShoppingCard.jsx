import { CgClose } from "react-icons/cg";
import { CiShoppingCart } from "react-icons/ci";
import ItemsCart from "./ItemsCart";
import SidebarCart from "./SidebarCart";

function ModalShoppingCard({ isOpenCart, setIsOpenCart }) {


  return (
    <div className="mx-1">
      <button>
        <CiShoppingCart size={25} onClick={() => setIsOpenCart(true)} />
      </button>
      <SidebarCart 
        
      />
    </div>
  );
}

export default ModalShoppingCard;
