import { useContext } from "react";
import ProfileComponent from "../ProfileComponent/ProfileComponent";
import { UsuarioContext } from "../../contexts/UsuarioContext/UsuarioContext";

function HeaderComponenet() {
  const { usuario } = useContext(UsuarioContext);
  return (
    <>
    <p>{usuario.nome}</p>
      <ProfileComponent/>
    </>
  );
}

export default HeaderComponenet;
