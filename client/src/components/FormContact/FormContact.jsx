"use client";
import { useState } from "react";
import InputForm from "../InputForm/InputForm";
import { validateField } from "@/utils/validaciones";

function FormContact() {
  const [error, setError] = useState({});
  const [inputForm, setInputForm] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    retryPassword: "",
  });

  const handlerChange = (e) => {
    const { name, value } = e.target;
    setInputForm((prevInputForm) => ({
      ...prevInputForm,
      [name]: value,
    }));

    setError((prevError) => ({
      ...prevError,
      [name]: validateField(name, value, inputForm),
    }));
  };

  return (
    <form className="w-1/3">
      {Object.keys(inputForm).map((fieldName, index) => (
        <InputForm
          key={index}
          handlerChange={handlerChange}
          inputForm={inputForm}
          error={error}
          name={fieldName}
        />
      ))}
    </form>
  );
}

export default FormContact;
