import './App.css';
import { useState } from 'react';
import FormComponent from './components/FormComponent/FormComponent';
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import { UsuarioProvider } from './contexts/UsuarioContext';

//como opção pode ser adicionario ao ternario { show ?  <FormComponent/> : null } o componente form não exibido que esta abaixo
//o componente foi adicionado diretamente no app só para demonstração
const FormNaoExibidoComponent = () => {
  return (
    <>
    <p>Formulário não esta sendo exibido</p>
    </>
  )
}

function App() {
const [show, setShow] = useState(false);

const showFormulario = () => {
  setShow(!show);
}
  return (
    <>
      <UsuarioProvider>
        <HeaderComponent/>
        { show ?  <FormComponent/> : <FormNaoExibidoComponent/> }
        <button onClick={showFormulario}>{!show ? 'Exibir' : 'Ocultar'}</button>
      </UsuarioProvider>
    </>

  )
}

export default App
