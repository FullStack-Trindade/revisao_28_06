import { useContext } from "react";
import { UsuarioContext } from "../../contexts/UsuarioContext/UsuarioContext";

function ProfileComponent() {
    const {usuario} = useContext(UsuarioContext)
    return ( 
    <>
    <p>{usuario.email} logado</p>
    </> 
    );
}

export default ProfileComponent;