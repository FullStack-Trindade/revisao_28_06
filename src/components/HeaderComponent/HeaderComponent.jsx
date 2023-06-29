import { useContext } from "react"
import ProfileComponent from "../ProfileComponent/ProfileComponent"
import { UsuarioContext } from "../../assets/contexts/UsuarioContext"

const HeaderComponent = () => {

    const { usuario } = useContext(UsuarioContext);

    return (
        <>
        <h1>Logo</h1>
        <ProfileComponent/>
        </>
    )
}

export default HeaderComponent