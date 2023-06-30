import './App.css';
import { useState } from 'react';
import FormComponent from './components/FormComponent/FormComponent';
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import { UsuarioProvider } from './contexts/UsuarioContext';

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
