import { useState } from "react"

const FormComponent = () => {
  const [data, setData] = useState({
    nome: '',
    email: '',
    senha: '',
  });

  const handleInput = (e) => {
    const { value, name } = e.target;
    setData({...data, [name]: value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Ola ${data.nome}, seu email e ${data.email}`);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nome">Nome</label>
          <input type="text" name="nome" id="nome" onChange={handleInput} required/>
        </div>
        <div>
          <label htmlFor="email">E-mail</label>
          <input type="email" name="email" id="email" onChange={handleInput} required/>
        </div>
        <div>
          <label htmlFor="senha">Senha</label>
          <input type="password" name="senha" id="senha" onChange={handleInput} required/>
        </div>
        <div>
          <button type="submit">Enviar</button>
        </div>
      </form>
    </>
  )
}

export default FormComponent