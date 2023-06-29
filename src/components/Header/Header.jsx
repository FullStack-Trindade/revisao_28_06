import { useContext } from "react";
import Profile from "../Profile/Profile";
import { UsuarioContext } from "../../contexts/UsuarioContext";

const Header = () => {
  const { usuario } = useContext(UsuarioContext);
  return (
    <>
      <h1>Logo</h1>
      <Profile />
    </>
  );
};

export default Header;
