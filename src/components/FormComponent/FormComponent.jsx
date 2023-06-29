
import { useState, useContext } from 'react'
import { UsuarioContext } from '../../assets/contexts/UsuarioContext';

const FormComponent = () => {

    const [data, setData] = useState({
        nome: '',
        email: '',
        senha: '',
    });

    const { setUsuario, listaUsuarios, setListaUsuarios } = useContext(UsuarioContext)


     const handleInput = (e) => {
        const {value, name} = e.target;  
        setData({... data, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setUsuario(data)
        setListaUsuarios([... listaUsuarios, data]);

        console.log(listaUsuarios);
    }


  return (
    <>
    <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="">Nome</label>
            <input type="text" name='nome' id='nome' onChange={handleInput} required/>
        </div>
        <div>
            <label htmlFor="email">E-mail</label>
            <input type="email" name="email"  id="email" onChange={handleInput} required/>
        </div>
        <div>
            <label htmlFor="senha">Senha</label>
            <input type="password" name="senha"  id="senha" onChange={handleInput} required/>
        </div>
        <div>
            <button type='submit'>Enviar</button>
        </div>
    </form>
</>
  )

}
export default FormComponent
