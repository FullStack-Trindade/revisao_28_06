import { useContext, useState } from "react";
import { UsuarioContext } from "../../contexts/UsuarioContext/UsuarioContext";

function FormComponent() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    password: "",
  });
  
  const {setUsuario} = useContext(UsuarioContext)

  const handleInput = (e) => {
    const { value, name } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsuario(formData)
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nome">Nome </label>
          <input
            type="text"
            name="nome"
            id="nome"
            onChange={handleInput}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={handleInput}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            name="password"
            id="password"
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
