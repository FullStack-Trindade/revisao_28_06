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
    nome: "Robert Garcia",
    email: "kyooukugen@gmail.com",
    senha: "24346244",
  });

  return (
    <UsuarioContext.Provider value={{ usuario, setUsuario }}>
      {props.children}
    </UsuarioContext.Provider>
  );
};
