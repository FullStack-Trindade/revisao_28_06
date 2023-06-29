import { createContext, useState } from "react";

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

export const UsuarioProvider = ( props ) => {
  const [usuario, setUsuario] = useState({
    nome: 'Robert Santos',
    email: 'robertsantosti@outlook.com',
    senha: '12345678',
  });

  const [listaUsuarios, setListaUsuarios] = useState([...[], usuario]);

  return(
    <UsuarioContext.Provider value={{usuario, setUsuario, listaUsuarios, setListaUsuarios}}>
      { props.children }
    </UsuarioContext.Provider>
  )
}