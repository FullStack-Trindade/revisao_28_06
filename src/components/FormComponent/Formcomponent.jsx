import { useState } from "react";

const FormComponent = () => {

    //para manipular o formulário eu poderia criar um estado para cada elemento. porém, se o forumulário for muito grande, fica difícil.
    // const[nome, setNome] = useState('')
    // const[email, setemail] = useState('')
    // const[senha, setsenha] = useState('')

    //para facilitar quando tiver muitos campos para serem manipulados, podemos criar um objeto data e utilizar ele no useState, como feito abaixo:
    const [data, setData] = useState({
        nome: '',
        email: '',
        senha: ''
    })

    //esta função foi primeiramente criada lá embaixo quando chamamos a função onChange. jogamos para cá para limpar o código. 
    // const handleNome = (e) =>{setData({...data, nome: e.target.value})}
    // const handleEmail = (e) =>{setData({...data, email: e.target.value})}
    // const handleSenha = (e) =>{setData({...data, senha: e.target.value})}

    // Porém, para não ficarmos criando um handle para cada input, melhoramos o código criando um handle que sirva para todos capturando o valor do input a partir da sua chave nome, veja:
    const handleInput = (e) => {
        const {value, name} = e.target;
        setData({...data, [name]:value}); //aqui estamos setando no objeto data o valor da propriedade que o handleInput está manipulando. O name está entre colchetes pq ele é um item o objeto data e é o identificador do valor do input que está sendo mexido.
    }

    //agora estamos conseguindo guardar os dados. Porém é preciso enviá-los para algum lugar. Então mexemos com o botão submit:
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Olá ${data.nome}, seu email é ${data.email}`)
    }


  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nome">Nome:</label>
          <input type="text" name="nome" id="nome" onChange={handleInput} required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" id="email" onChange={handleInput}required/>
        </div>
        <div>
          <label htmlFor="senha">Senha:</label>
            <input type="password" name="senha" id="senha" onChange={handleInput}required/>
          
        </div>
        <div><button type="submit">Enviar</button></div>
      </form>
    </>
  );
};

export default FormComponent;
