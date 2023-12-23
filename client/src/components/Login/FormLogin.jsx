"use client";

import { validateFieldLogin, validateFormLogin } from "@/utils/validaciones";
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
    <form onSubmit={handlerSubmit} className="w-1/3 mt-10">
      <div className="">
        {Object.keys(inputForm).map((fieldName, index) => (
          <div className="h-14" key={index}>
            <input
              type="text"
              name={fieldName}
              value={inputForm[fieldName]}
              onChange={handlerChange}
              placeholder={fieldName}
              className={`w-full h-8 pl-2 text-sm border-1 border-gray-400 border-b-2 border-b-gray-700 shadow-md shadow-gray-400 ${
                error[fieldName] ? "focus:outline-none" : ""
              }`}
            />
            {error[fieldName] && (
              <span className="text-xs text-red-400">{error[fieldName]}</span>
            )}
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <button className="py-2 px-6 text-gray-100 bg-gray-950">Enviar</button>
      </div>
    </form>
  );
}

export default FormLogin;
