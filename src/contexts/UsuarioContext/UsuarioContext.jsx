import { createContext, useState } from "react";

export const UsuarioContext = createContext({
  usuario: {
    nome: '',
    email: '',
    senha: '',
  },
  setUsuario: () => {},
});

export const UsuarioProvider = (props) => {
  const [usuario, setUsuario] = useState({
    nome: "Laércio L Barbosa",
    email: 'llbarbosa72@hotmail.com',
    senha: '123456',
  });

  return (
    <UsuarioContext.Provider value={{ usuario, setUsuario }}>
      {props.children}
    </UsuarioContext.Provider>
  );
};
