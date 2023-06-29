import "./App.css";
import FormComponent from "./components/FOrmComponent/FormComponent";
import HeaderComponenet from "./components/headerComponent/HeaderComponent";

import { UsuarioProvider } from "./contexts/UsuarioContext/UsuarioContext";

function App() {
  return (
    <>
      <UsuarioProvider>
        <HeaderComponenet/>
        <FormComponent />
      </UsuarioProvider>
    </>
  );
}

export default App;
