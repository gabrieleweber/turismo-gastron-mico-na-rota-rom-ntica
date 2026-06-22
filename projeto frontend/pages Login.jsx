function Login() {
  return (
    <div className="container">

      <h2>Login</h2>

      <form>

        <input
          type="email"
          placeholder="Digite seu e-mail"
        />

        <input
          type="password"
          placeholder="Digite sua senha"
        />

        <button type="submit">
          Entrar
        </button>

      </form>

    </div>
  );
}

export default Login;