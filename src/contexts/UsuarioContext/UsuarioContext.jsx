import { createContext, useState } from "react";

export const UsuarioContext = createContext({
  usuario: {
    nome: "",
    email: "",
    senha: "",
  },
  setUsuario: () => {},
});

export const UsuarioProvider = (props) => {
  const [usuario, setUsuario] = useState({
    nome: "Ursula",
    email: "ursulacobabeto@gmail.com",
    senha: "1234",
  });

  return (
    <UsuarioContext.Provider value={{ usuario, setUsuario }}>
      {props.children}
    </UsuarioContext.Provider>
  );
};
