const FormComponent = () => {
  const [data, setData] = useState({
    nome: "",
    email: "",
    senha: "",
  });

  const handleInput = (e) => {
    const { value, name } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`ola ${data.nome}, seu email e ${data.email}`);
  };

  return (
    <>
      <form action="">
        <div>
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            name="nome"
            id="nome"
            onChange={handleInput}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={handleInput}
            required
          />
        </div>
        <div>
          <label htmlFor="senha">Senha</label>
          <input
            type="senha"
            name="senha"
            id="senha"
            onChange={handleInput}
            required
          />
        </div>
        <div>
          <button type="submit" onSubmit={handleSubmit}>
            {" "}
            Enviar
          </button>
        </div>
      </form>
    </>
  );
};

export default FormComponent;
