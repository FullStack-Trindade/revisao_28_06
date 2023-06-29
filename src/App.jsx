import './App.css';
import FormComponent from './components/FormComponent/FormComponent';
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import { UsuarioProvider } from './contexts/UsuarioContext';

function App() {
  return (
    <>
      <UsuarioProvider>
        <HeaderComponent />
        <FormComponent />
      </UsuarioProvider>
    </>
  )
}

export default App
