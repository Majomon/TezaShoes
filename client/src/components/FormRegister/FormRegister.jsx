"use client";
import axios from "axios";
import { validateField, validateForm } from "../../utils/validaciones";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function FormRegister() {
  const [error, setError] = useState({});
  const [disabled, setDisabled] = useState(true);
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
      } else {
        toast.warning("Error al crear usuario");
      }
    } catch (error) {
      console.error("Error al realizar la solicitud:", error);
    }
  };

  return (
    <form onSubmit={handlerSubmit}>
      <div>
        <div>
          <input
            type="text"
            name="name"
            value={inputForm.name}
            onChange={handlerChange}
            placeholder="Nombre"
            className="w-full h-8 pl-2 mb-4 text-sm border-1 border-gray-400 border-b-2 border-b-gray-700"
          />
          {error.name && <span>{error.name}</span>}
        </div>

        <div>
          <input
            type="number"
            name="phone"
            value={inputForm.phone}
            onChange={handlerChange}
            placeholder="Telefono"
            className="w-full h-8 pl-2 mb-4 text-sm border-1 border-gray-400 border-b-2 border-b-gray-700"
          />
          {error.phone && <span>{error.phone}</span>}
        </div>
        <div>
          <input
            type="email"
            name="email"
            value={inputForm.email}
            onChange={handlerChange}
            placeholder="Email"
            className="w-full h-8 pl-2 mb-4 text-sm border-1 border-gray-400 border-b-2 border-b-gray-700"
          />
          {error.email && <span>{error.email}</span>}
        </div>
        <div>
          <input
            type="password"
            name="password"
            value={inputForm.password}
            onChange={handlerChange}
            placeholder="Contraseña"
            className="w-full h-8 pl-2 mb-4 text-sm border-1 border-gray-400 border-b-2 border-b-gray-700"
          />
          {error.password && <span>{error.password}</span>}
        </div>
        <div>
          <input
            type="password"
            name="retryPassword"
            value={inputForm.retryPassword}
            onChange={handlerChange}
            placeholder="Confirmar contraseña"
            className="w-full h-8 pl-2 mb-4 text-sm border-1 border-gray-400 border-b-2 border-b-gray-700"
          />
          {error.retryPassword && <span>{error.retryPassword}</span>}
        </div>
      </div>
      <div className="w-full h-full flex justify-center">
        <button
          disabled={disabled}
          className={`text-sm text-gray-100 p-2 ${
            disabled
              ? "bg-gray-400 cursor-not-allowed transition"
              : "bg-yellow-400 hover:bg-yellow-500 shadow-md border-none rounded-md font-bold mt-4 mb-4 cursor-pointer"
          }`}
        >
          Crear usuario
        </button>
      </div>
    </form>
  );
}
