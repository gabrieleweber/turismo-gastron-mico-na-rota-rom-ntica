import { useState } from "react";

import Card from "../components/Card";
import restaurantes from "../data/restaurantes";

function Home() {

  const [pesquisa, setPesquisa] = useState("");

  const resultado = restaurantes.filter((item) =>
    item.nome.toLowerCase().includes(
      pesquisa.toLowerCase()
    )
  );

  return (
    <div className="container">

      <h1>Turismo Gastronômico na Rota Romântica</h1>

      <input
        type="text"
        placeholder="Pesquisar restaurante..."
        value={pesquisa}
        onChange={(e) =>
          setPesquisa(e.target.value)
        }
      />

      <div className="cards">

        {resultado.map((item) => (
          <Card
            key={item.id}
            restaurante={item}
          />
        ))}

      </div>

    </div>
  );
}

export default Home;