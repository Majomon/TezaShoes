"use client";
import axios from "axios";
import { validateField, validateForm } from "../../utils/validaciones";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function FormRegister() {
  const [error, setError] = useState({});
  const [disabled, setDisabled] = useState(true);
  const [registerOk, setRegisterOk] = useState(false);
  const [inputForm, setInputForm] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    retryPassword: "",
  });

  useEffect(() => {
    if (validateForm(error, inputForm)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [inputForm]);

  const handlerChange = (e) => {
    const { name, value } = e.target;
    setInputForm({ ...inputForm, [name]: value });

    setError((prevError) => ({
      ...prevError,
      [name]: validateField(name, value, inputForm),
    }));
  };

  const handlerSubmit = async (e) => {
    e.preventDefault();
    if (disabled) {
      toast.success("Completa el formulario");
    } else {
      try {
        const response = await axios.post(
          "http://localhost:8080/users",
          inputForm
        );

        if (response.status === 200) {
          toast.success("Usuario creado");
          setInputForm({
            name: "",
            phone: "",
            email: "",
            password: "",
            retryPassword: "",
          });
          setRegisterOk(true);
        } else {
          toast.warning("Error al crear usuario");
          setRegisterOk(false);
        }
      } catch (error) {
        console.error("Error al realizar la solicitud:", error);
      }
    }
  };

  return (
    <form onSubmit={handlerSubmit} className="w-8/12 mx-auto py-4">
      {/* Formulario */}
      {!registerOk && (
        <div>
          <div className="w-full h-full">
            <div className="h-14">
              <input
                type="text"
                name="name"
                value={inputForm.name}
                onChange={handlerChange}
                placeholder="Nombre"
                className={`w-full h-8 pl-2 text-sm border-1 border-gray-400 border-b-2 border-b-gray-700 shadow-md  shadow-gray-400 ${
                  error.name ? "focus:outline-none" : ""
                }`}
              />
              {error.name && (
                <span className="text-xs  text-red-400">{error.name}</span>
              )}
            </div>
            <div className="h-14">
              <input
                type="number"
                name="phone"
                value={inputForm.phone}
                onChange={handlerChange}
                placeholder="Teléfono"
                className={`w-full h-8 pl-2 text-sm border-1 border-gray-400 border-b-2 border-b-gray-700 shadow-md  shadow-gray-400 ${
                  error.phone ? "focus:outline-none" : ""
                }`}
              />
              {error.phone && (
                <span className="text-xs  text-red-400">{error.phone}</span>
              )}
            </div>
            <div className="h-14">
              <input
                type="email"
                name="email"
                value={inputForm.email}
                onChange={handlerChange}
                placeholder="Email"
                className={`w-full h-8 pl-2 text-sm border-1 border-gray-400 border-b-2 border-b-gray-700 shadow-md  shadow-gray-400 ${
                  error.email ? "focus:outline-none" : ""
                }`}
              />
              {error.email && (
                <span className="text-xs  text-red-400">{error.email}</span>
              )}
            </div>
            <div className="h-14">
              <input
                type="password"
                name="password"
                value={inputForm.password}
                onChange={handlerChange}
                placeholder="Contraseña"
                className={`w-full h-8 pl-2 text-sm border-1 border-gray-400 border-b-2 border-b-gray-700 shadow-md  shadow-gray-400 ${
                  error.password ? "focus:outline-none" : ""
                }`}
              />
              {error.password && (
                <span className="text-xs  text-red-400">{error.password}</span>
              )}
            </div>
            <div className="h-14">
              <input
                type="password"
                name="retryPassword"
                value={inputForm.retryPassword}
                onChange={handlerChange}
                placeholder="Confirmar contraseña"
                className={`w-full h-8 pl-2 text-sm border-1 border-gray-400 border-b-2 border-b-gray-700 shadow-md  shadow-gray-400 ${
                  error.retryPassword ? "focus:outline-none" : ""
                }`}
              />
              {error.retryPassword && (
                <span className="text-xs  text-red-400">
                  {error.retryPassword}
                </span>
              )}
            </div>
          </div>
          <div className="w-full h-full flex justify-center">
            <button
              className={`text-sm text-gray-100 p-2 ${
                disabled
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-yellow-400 hover:bg-yellow-500 shadow-md border-none rounded-md font-bold mt-4 mb-4 cursor-pointer"
              }`}
            >
              Crear usuario
            </button>
          </div>
        </div>
      )}
      {/* Registro exitoso */}
      {registerOk && (
        <div>
          <h2>Hola</h2>
        </div>
      )}
    </form>
  );
}
