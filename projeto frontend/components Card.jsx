function Card({ restaurante }) {
  return (
    <div className="card">

      <img
        src={restaurante.imagem}
        alt={restaurante.nome}
      />

      <h3>{restaurante.nome}</h3>

      <p>{restaurante.categoria}</p>

      <p>{restaurante.cidade}</p>

    </div>
  );
}

export default Card;