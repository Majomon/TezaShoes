import Link from "next/link";
import { CiUser, CiEdit } from "react-icons/ci";

function ModalUser({ isOpenUser, setIsOpenUser }) {
  return (
    <div>
      <button className="mx-1">
        <CiUser size={25} onClick={() => setIsOpenUser(!isOpenUser)} />
      </button>

      {isOpenUser && (
        <div className="w-2/12 h-fit absolute top-16 right-0 flex flex-col justify-center bg-white rounded-bl-md border-l-1 border-b-1 z-10">
          <Link
            href={"/login"}
            className="w-full h-16  flex items-center p-4 gap-4"
            onClick={() => setIsOpenUser(!isOpenUser)}
          >
            <CiUser size={25} />
            <h2>Iniciar sesión</h2>
          </Link>
          <Link
            href={"/register"}
            className="w-full h-16 flex items-center p-4 gap-4"
            onClick={() => setIsOpenUser(!isOpenUser)}
          >
            <CiEdit size={25} />
            <h2>Crear cuenta</h2>
          </Link>
        </div>
      )}
    </div>
  );
}

export default ModalUser;
