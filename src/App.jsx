import "./App.css";
import FormComponent from "./components/FormComponent/FormComponent";
import HeaderComponenet from "./components/HeaderComponent/HeaderComponent";

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
