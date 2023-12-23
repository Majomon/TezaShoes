import { CiUser } from "react-icons/ci";

function ModalUser({ isOpenUser, setIsOpenUser }) {
  return (
    <div>
      <button className="mx-1">
        <CiUser size={25} onClick={() => setIsOpenCart(true)} />
      </button>
    </div>
  );
}

export default ModalUser;
