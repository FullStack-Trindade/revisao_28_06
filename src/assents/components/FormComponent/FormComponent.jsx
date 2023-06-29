import { useState } from "react"
import { UsuarioContext } from "../../../contexts/UsuarioContext";
// formulario reativo
const FormComponent = () => {
const [data, setData] = useState({
    nome:'',
    email:'',
    senha:'',
});//substituindo um useState para cada input

const {setUsuario} = useContext(UsuarioContext);


// Umas solução maior para os inputs
/*     const handleNome = (e) => {setData({...data, nome: e.target.value})};
    const handleEmail = (e) => {setData({...data, email: e.target.value})};
    const handleSenha = (e) => {setData({...data, senha: e.target.value})}; */

    // pegando dados de forma dinamica.
    const handleInput = (e) =>{
        const {value, name} = e.target;// propriedades que tem no inspesionar do navegador.
        setData ({...data, [name]: value});
    }

    const handleSubmit =(e) =>{
        e.preventDefault();// para nao dar reload na tela
        setUsuario(data);
    }
    return (
        <>
<form onSubmit={handleSubmit}>
    {/*  trazendo const */}
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
        <button type='submit'>Enviar</button>
    </div>
</form>
        </>
    )
}

export default FormComponent