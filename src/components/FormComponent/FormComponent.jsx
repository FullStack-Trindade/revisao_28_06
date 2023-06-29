
import { useState } from 'react';

function FormComponent() {
  //forma mais custosa
  //const [nome,setNome] = useState('');
  //const [email,setEmail] = useState('');
  //const [senha,setSenha] = useState('');
  //forma mais otimizada
  const [data, setData] = useState({
    nome: '',
    email: '',
    senha: '',
  });

  //forma mais custosa
  //const handleNome = (e) => {setData({...data, nome: e.target.value})};
  //const handleEmail = (e) => {setData({...data, email: e.target.value})};
  //const handleSenha = (e) => {setData({...data, senha: e.target.value})};
  //forma automatizada
  const handleInput = (e) => {
    const {value, name} = e.target;
    setData({...data, [name]: value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
        console.log(`Olá ${data.nome}, seu email é ${data.email}`);
  }

  return (
    <>
      <form>
        <div>
          <label htmlFor="nome">Nome</label>
          <input type="text" name="nome" id="nome" onChange={handleInput} required/>
        </div>
        <div>
          <label htmlFor="email"></label>
          <input type="email" name="email" id="email" onChange={handleInput}required/>
        </div>
        <div>
          <label htmlFor="password"></label>
          <input type="password" name="senha" id="senha" onChange={handleInput} required/>
        </div>
        <div>
          <button type='submit'>Enviar</button>
        </div>
      </form>
    </>
  )
}

export default FormComponent