import {userContext} from "react"
import ProfileComponent from "../ProfileComponent/ProfileComponent";
import { UsuarioContext } from "../../../contexts/UsuarioContext";

const HeaderComponent = () => {
const {usuario} = userContext(UsuarioContext);

    return (
        <>
        <h1>Logo</h1>
        <p>{usuario.nome}</p>
        <ProfileComponent/>
        </>
    )
}

export default HeaderComponent;