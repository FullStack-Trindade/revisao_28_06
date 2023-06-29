import "./App.css";
import Header from "./components/Header/Header";
import FormComponent from "./components/formComponents/FormComponents";
import { UsuarioProvider } from "./contexts/UsuarioContext";

function App() {
  return (
    <>
      <UsuarioProvider>
        <Header />
        <FormComponent />
      </UsuarioProvider>
    </>
  );
}

export default App;
