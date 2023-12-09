"use client";

export default function FormRegister() {
  return (
    <form>
      <div>
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          className="w-full h-8 pl-2 mb-4 text-sm border-1 border-gray-400 border-b-2 border-b-gray-700"
        />
        <input
          type="number"
          name="phone"
          placeholder="Telefono"
          className="w-full h-8 pl-2 mb-4 text-sm border-1 border-gray-400 border-b-2 border-b-gray-700"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full h-8 pl-2 mb-4 text-sm border-1 border-gray-400 border-b-2 border-b-gray-700"
        />
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          className="w-full h-8 pl-2 mb-4 text-sm border-1 border-gray-400 border-b-2 border-b-gray-700"
        />
        <input
          type="password"
          name="retryPassword"
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
