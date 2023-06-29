import { useContext } from "react";
import { UsuarioContext } from "../../contexts/UsuarioContext";

const Profile = () => {
  const { usuario } = useContext(UsuarioContext);
  return (
    <>
      <p>{usuario.email} esta logado</p>
    </>
  );
};

export default Profile;
