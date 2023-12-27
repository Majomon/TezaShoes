"use client";
import Link from "next/link";
import { CiUser, CiEdit, CiLogout } from "react-icons/ci";
import { toast } from "sonner";

function ModalUser({ isOpenUser, setIsOpenUser }) {
  const userData = localStorage.getItem("userData");

  const logOut = () => {
    window.localStorage.removeItem("userData");
    toast.success("Cerraste sesión");
    setIsOpenUser(!isOpenUser);
  };

  return (
    <div>
      <button className="mx-1">
        <CiUser size={25} onClick={() => setIsOpenUser(!isOpenUser)} />
      </button>

      {isOpenUser ? (
        !userData ? (
          <div className="w-2/12 h-fit absolute top-16 right-0 px-6 flex flex-col justify-center bg-white rounded-bl-md border-l-1 border-b-1 z-10">
            <Link
              href={"/login"}
              className="w-full h-12 flex items-center gap-4"
              onClick={() => setIsOpenUser(!isOpenUser)}
            >
              <CiUser size={25} />
              <h2>Iniciar sesión</h2>
            </Link>
            <Link
              href={"/register"}
              className="w-full h-12 flex items-center gap-4"
              onClick={() => setIsOpenUser(!isOpenUser)}
            >
              <CiEdit size={25} />
              <h2>Crear cuenta</h2>
            </Link>
          </div>
        ) : (
          <div className="w-2/12 h-24 absolute top-16 right-0 flex flex-col justify-center items-center bg-white rounded-bl-md border-l-1 border-b-1 z-10 gap-2">
            <Link href={"/account"} onClick={() => setIsOpenUser(!isOpenUser)}>
              Ingresa a tu <strong>Cuenta!</strong>
            </Link>
            <div className="flex gap-2">
              <CiLogout size={20} />
              <button onClick={() => logOut()}>Cerrar sesión</button>
            </div>
          </div>
        )
      ) : null}
    </div>
  );
}

export default ModalUser;
