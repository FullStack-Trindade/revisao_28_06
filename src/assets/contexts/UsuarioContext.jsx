import { createContext, useState } from "react"


export const UsuarioContext = createContext({
    usuario: {
        nome: '',
        email: '',
        senha: '',
    },
    setUsuario: () => {},
    listaUsuarios: [],
    setListaUsuarios: () => {},
});

export const UsuarioProvider = (props) => {
const [usuario, setUsuario] = useState ({
  
        nome: 'Dan',
        email: 'a@a.com',
        senha: 'asd',
    
});

const [listaUsuarios, setListaUsuarios] = useState([... [], usuario])

    return (
        <UsuarioContext.Provider value={{usuario, setUsuario, listaUsuarios, setListaUsuarios}}>
            { props.children}
        </UsuarioContext.Provider>
    )
}