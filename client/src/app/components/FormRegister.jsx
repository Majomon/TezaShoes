"use client";

import { useState } from "react";

export default function FormRegister() {
  const [inputForm, setInputForm] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    retryPassword: "",
  });

  const handlerChange = (e) => {
    const { name, value } = e.target;
    setInputForm({ ...inputForm, [name]: value });
  };

  const handlerSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name: inputForm.name,
      phone: inputForm.phone,
      email: inputForm.email,
      password: inputForm.password,
    };
  };

  return (
    <form onSubmit={handlerSubmit}>
      <div>
        <input
          type="text"
          name="name"
          value={inputForm.name}
          onChange={handlerChange}
          placeholder="Nombre"
          className="w-full h-8 pl-2 mb-4 text-sm border-1 border-gray-400 border-b-2 border-b-gray-700"
        />
        <input
          type="number"
          name="phone"
          value={inputForm.phone}
          onChange={handlerChange}
          placeholder="Telefono"
          className="w-full h-8 pl-2 mb-4 text-sm border-1 border-gray-400 border-b-2 border-b-gray-700"
        />
        <input
          type="email"
          name="email"
          value={inputForm.email}
          onChange={handlerChange}
          placeholder="Email"
          className="w-full h-8 pl-2 mb-4 text-sm border-1 border-gray-400 border-b-2 border-b-gray-700"
        />
        <input
          type="password"
          name="password"
          value={inputForm.password}
          onChange={handlerChange}
          placeholder="Contraseña"
          className="w-full h-8 pl-2 mb-4 text-sm border-1 border-gray-400 border-b-2 border-b-gray-700"
        />
        <input
          type="password"
          name="retryPassword"
          value={inputForm.retryPassword}
          onChange={handlerChange}
          placeholder="Confirmar contraseña"
          className="w-full h-8 pl-2 mb-4 text-sm border-1 border-gray-400 border-b-2 border-b-gray-700"
        />
      </div>
      <div className="w-full h-full flex justify-center">
        <button className="text-sm text-gray-100 p-2 bg-gray-800">
          Crear usuario
        </button>
      </div>
    </form>
  );
}
