import React, { useState } from "react";
import ReactDOMServer from "react-dom/server";
import TratamentoDados from "./TratamentoDados";

const Dados = () => {
  const [comandaBruta, setComandaBruta] = useState("");
  const [id, setId] = useState("");

  const SalvarComanda = (e) => {
    e.preventDefault();
    const componenteHTML = ReactDOMServer.renderToString(
      <TratamentoDados texto={comandaBruta} id={id} />
    );
    const janela = window.open("", "", "width=880,height=1200");
    janela.document.write(componenteHTML);
    janela.print();
    janela.close();

    // <
    // console.log(comandaBruta);
  };
  return (
    <>
      <form action="">
        <div>
          <label htmlFor="comanda">Copie aqui: </label>
          <br />
          <textarea
            cols="35"
            rows="20"
            id="comanda"
            onChange={(e) => setComandaBruta(e.target.value)}
          />

          
          <input type="number" id="txtnum" onChange={(e) => setId(e.target.value)} />

          <button onClick={SalvarComanda}>Imprimir</button>
        </div>
        <br />
      </form>
      <TratamentoDados texto={comandaBruta} id={id} />
    </>
  );
};

export default Dados;
