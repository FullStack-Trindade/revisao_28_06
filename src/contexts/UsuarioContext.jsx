import { createContext, useState } from "react";

export const UsuarioContext = createContext({
    usuario: {},
    setUsuario: () => {},
});

export const UsuarioProvider = ({ children }) => {
    const [usuario, setUsuario] = useState({
        nome: 'André Luiz',
        email: 'andre_luiz_amorim@estudante.sc.senai.br',
        senha: 'testando$1234',
    });
    return (
        <UsuarioContext.Provider value={{usuario, setUsuario}}>
            { children }
        </UsuarioContext.Provider>
    )
}