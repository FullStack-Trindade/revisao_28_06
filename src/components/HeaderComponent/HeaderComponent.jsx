import { useContext } from "react";
import ProfileComponent from "../ProfileComponent/ProfileComponent";
import { UsuarioContext } from "../../contexts/UsuarioContext";

const HeaderComponent = () => {
    const { usuario } = useContext(UsuarioContext);
    return(
        <>
            <p>{ usuario.nome }</p>
            <ProfileComponent />
        </>
    )
}

export default HeaderComponent;