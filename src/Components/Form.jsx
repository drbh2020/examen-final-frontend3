//import React from "react";
import { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    nombreCompleto: "",
    email: "",
  });

  const [errors, setErrors] = useState({
    nombreCompleto: "",
    email: "",
  });

  const [success, setSuccess] = useState("");

  const validarForm = () => {
    let esValido = true;
    const errorNuevo = {
      nombreCompleto: "",
      email: "",
    };
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!formData.nombreCompleto) {
      errorNuevo.nombreCompleto = "Ingrese su nombre completo";
      esValido = false;
    } else if (formData.nombreCompleto.length <= 5) {
      errorNuevo.nombreCompleto = "El nombre debe tener más de 5 caracteres";
      esValido = false;
    }

    if (!formData.email) {
      errorNuevo.email = "Ingrese su correo electrónico";
      esValido = false;
    } else if (
      !regexEmail.test(formData.email)
    ) {
      errorNuevo.email = "Por favor introduce una dirección de correo válida.";
      esValido = false;
    }

    setErrors((prev) => ({ ...prev, ...errorNuevo }));
    return esValido;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess("");

    if (validarForm()) {
      console.log("El formulario fue enviado con éxito:", formData);
      setSuccess(
        `Gracias ${formData.nombreCompleto}, te contactaremos cuanto antes vía email`
      );
      setFormData({ nombreCompleto: "", email: "" });
      setErrors({ nombreCompleto: "", email: "" });
    }

    return;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Nombre completo"
            value={formData.nombreCompleto}
            onChange={handleChange}
            name="nombreCompleto"
          />
          {errors.nombreCompleto && <p>{errors.nombreCompleto}</p>}
        </div>

        <div>
          <input
            type="email"
            placeholder="Correo electrónico"
            value={formData.email}
            onChange={handleChange}
            name="email"
          />
          {errors.email && <p>{errors.email}</p>}
        </div>

        <button type="submit">Enviar consulta</button>
      </form>
      {success && <div>{success}</div>}
    </div>
  );
};

export default Form;