import { useState } from "react";

function FormComponent() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    password: "",
  });
  const handleInput = (e) => {
    const { value, name } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Ola, ${formData.nome}, seu email é ${formData.email}`)
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nome">Nome </label>
          <input
            type="text"
            name="nome"
            id='nome'
            onChange={handleInput}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id={formData.email}
            onChange={handleInput}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            name="password"
            id={formData.password}
            onChange={handleInput}
            required
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </>
  );
}

export default FormComponent;
