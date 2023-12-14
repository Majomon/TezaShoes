export const validateField = (name, value, inputForm) => {
  switch (name) {
    case "name":
      if (!value) {
        return "Nombre requerido";
      } else if (value.length > 18) {
        return `El nombre no puede tener más de 25 caracteres`;
      }
      break;
    case "phone":
      if (!value) {
        return "Telefono requerido";
      } else if (value.length < 10) {
        return "El número debe tener minimamente 10 caracteres";
      }
      break;
    case "email":
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!value) {
        return "Correo electrónico requerido";
      } else if (!emailRegex.test(value)) {
        return "El correo electrónico no es válido";
      }
      break;
    case "password":
      if (!value) {
        return "El password es requerido";
      }
      break;
    case "retryPassword":
      if (!value) {
        return "El password es requerido";
      } else if (inputForm.password !== value) {
        return "Las contraseñas no coinciden";
      }
      break;
    default:
      break;
  }

  return "";
};

export const validateForm = (error, inputForm) => {
  return (
    !error.name &&
    inputForm.name.length &&
    !error.phone &&
    inputForm.phone.length &&
    !error.email &&
    inputForm.email.length &&
    !error.password &&
    inputForm.password.length &&
    !error.retryPassword &&
    inputForm.retryPassword.length
  );
};

export const validateFormContact = (error, inputForm) => {
  return (
    !error.name &&
    inputForm.name.length &&
    !error.email &&
    inputForm.email.length &&
    !error.phone &&
    inputForm.phone.length &&
    !error.message &&
    inputForm.message.length
  );
};

export const validateFieldContact = (name, value, inputForm) => {
  switch (name) {
    case "name":
      if (!value) {
        return "Nombre requerido";
      } else if (value.length > 18) {
        return `El nombre no puede tener más de 25 caracteres`;
      }
      break;

    case "email":
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!value) {
        return "Correo electrónico requerido";
      } else if (!emailRegex.test(value)) {
        return "El correo electrónico no es válido";
      }
      break;

    case "phone":
      if (!value) {
        return "Teléfono requerido";
      } else if (value.length < 10) {
        return "El teléfono debe tener minimamente 10 caracteres";
      }
      break;

    case "message":
      if (!value) {
        return "Debe escribir un mensaje";
      }
      break;
    default:
      break;
  }

  return "";
};
