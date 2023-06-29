import './App.css';
import { UsuarioProvider } from './assets/contexts/UsuarioContext';
import FormComponent from './components/FormComponent/FormComponent';
import HeaderComponent from './components/HeaderComponent/HeaderComponent';

function App() {
  return (
    <>
    <UsuarioProvider>
      <HeaderComponent/> 
      <FormComponent/>
    </UsuarioProvider>
    </>
  )
}

export default App
