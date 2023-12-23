"use client";

import { validateFieldLogin, validateFormLogin } from "@/utils/validaciones";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "sonner";

function FormLogin() {
  const [error, setError] = useState({});
  const [disabled, setDisabled] = useState(true);
  const [inputForm, setInputForm] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (validateFormLogin(error, inputForm)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [inputForm]);

  const handlerChange = (e) => {
    const { name, value } = e.target;
    setInputForm((prevInputForm) => ({
      ...prevInputForm,
      [name]: value,
    }));

    setError((prevError) => ({
      ...prevError,
      [name]: validateFieldLogin(name, value),
    }));
  };

  const handlerSubmit = async (e) => {
    e.preventDefault();
    if (disabled) {
      toast.warning("Completa el formulario");
    } else {
      try {
        const response = await axios.post(
          "http://localhost:8080/resendEmail",
          inputForm
        );

        if (response.status === 200) {
          toast.success("Email enviado");
          setInputForm({
            name: "",
            phone: "",
            email: "",
            message: "",
          });
        } else {
          toast.warning("Error al enviar el mail. Contactate por Whatapp");
        }
      } catch (error) {
        toast.warning("Error al enviar el mail. Contactate por Whatapp");
        console.error("Error al realizar la solicitud:", error);
      }
    }
  };
  return (
    <div className="w-6/12 h-full mx-auto flex flex-col justify-center gap-6 mb-4">
      <h1 className="py-4 text-lg font-bold">Iniciar sesión</h1>
      <form onSubmit={handlerSubmit} className="">
        {/* Inputs */}
        <div className="flex flex-col gap-6">
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              value={inputForm.email}
              onChange={handlerChange}
              placeholder="Ingresa tu email"
              className={`w-full h-8 pl-2 text-sm border-1 border-gray-400 border-b-2 border-b-gray-700 shadow-md shadow-gray-400 ${
                error.email ? "focus:outline-none" : ""
              }`}
            />
            {error.email && (
              <span className="text-xs text-red-400">{error.email}</span>
            )}
          </div>
          <div>
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              name="password"
              value={inputForm.password}
              onChange={handlerChange}
              placeholder="Ingresa tu contraseña"
              className={`w-full h-8 pl-2 text-sm border-1 border-gray-400 border-b-2 border-b-gray-700 shadow-md shadow-gray-400 ${
                error.password ? "focus:outline-none" : ""
              }`}
            />
            {error.password && (
              <span className="text-xs text-red-400">{error.password}</span>
            )}
          </div>
        </div>
        <div className="py-4">
          <button className="w-full py-2 text-gray-100 bg-gray-950">
            Ingresar
          </button>
        </div>
      </form>
      <h2 className="text-center">O</h2>
      <div className="flex gap-x-4">
        <h2>No tenes cuenta?</h2>
        <Link href={"/register"}>
          <strong>Registrate</strong>
        </Link>
      </div>
    </div>
  );
}

export default FormLogin;
