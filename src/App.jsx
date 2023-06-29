import './App.css';

import FormComponent from './assents/components/FormComponent/FormComponent'
import HeaderComponent from './assents/components/HeaderComponent/HeaderComponent';
import { UsuarioProvider } from './contexts/UsuarioContext';

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

export default App;
