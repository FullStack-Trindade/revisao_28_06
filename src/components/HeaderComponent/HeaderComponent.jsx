import { useContext } from "react"
import ProfileComponent from "../ProfileComponent/ProfileComponent"
import { UsuarioContext } from "../../contexts/UsuarioContext"

const HeaderComponent = () => {
    const {usuario} = useContext(UsuarioContext);
    return (
        <>
        <p>{usuario.nome}</p>
        <h1>Logo</h1>
        <ProfileComponent/>
        </>
    )
}

export default HeaderComponent