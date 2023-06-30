import { useState } from 'react';
import './App.css';
import { UsuarioProvider } from './assets/contexts/UsuarioContext';
import FormComponent from './components/FormComponent/FormComponent';
import HeaderComponent from './components/HeaderComponent/HeaderComponent';

function App() {
const [show, setShow] = useState(false);

const showFormulario = () => {
  setShow(!show);
}

  return (
    <>
    <UsuarioProvider>
      <HeaderComponent/> 
      { show?  <FormComponent/> : '' }
      <button onClick={showFormulario}>{!show ? 'Exibir' : 'Ocultar'}</button>
    </UsuarioProvider>
    </>
  )
}

export default App
