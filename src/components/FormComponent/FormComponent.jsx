
import { useContext, useEffect, useRef, useState } from "react"
import { UsuarioContext } from '../../contexts/UsuarioContext';

const FormComponent = () => {
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
  const [showPassword, setShowPassword] = useState(false)

  const inputSenhaRef = useRef();
  const { listaUsuarios, setListaUsuarios, setUsuario } = useContext(UsuarioContext);


  useEffect(() => {
    inputSenhaRef.current.type = inputSenhaRef.current.type === 'password'
      ? 'text'
      : 'password';
  }, [showPassword])

  //forma mais custosa
  //const handleNome = (e) => {setData({...data, nome: e.target.value})};
  //const handleEmail = (e) => {setData({...data, email: e.target.value})};
  //const handleSenha = (e) => {setData({...data, senha: e.target.value})};
  //forma automatizada
  const handleInput = (e) => {
    const {value, name} = e.target;
    setData({...data, [name]: value});
  }

  const show = () => {
    setShowPassword(!showPassword);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsuario(data);
    setListaUsuarios([...listaUsuarios, data]);
    console.log(listaUsuarios);
    //alert(`Olá ${data.nome}, seu email é ${data.email}`);
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
          <input ref={inputSenhaRef} type="password" name="senha" id="senha" onChange={handleInput} required/>
        </div>
        <div>
          <button type="submit">Enviar</button>
          <button type="button" onClick={show}>
            {showPassword ? 'Ocultar Senha' : 'Mostrar Senha'}
          </button>
        </div>
      </form>
    </>
  )
}

export default FormComponent