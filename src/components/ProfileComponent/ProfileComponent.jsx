import { useContext } from "react"
import { UsuarioContext } from './../../assets/contexts/UsuarioContext';

const ProfileComponent = () => {

    const { usuario } = useContext(UsuarioContext)
    return (
        <>
        <p>Tudo certo, { usuario.email }! Você está logado </p>
        </>
    )
}

export default ProfileComponent