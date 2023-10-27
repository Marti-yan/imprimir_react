import React from "react";

const TratamentoDados = ({ texto, id }) => {
  const string = texto.replace(/(R\$\s\d+,\d{2}|subtotal)/gi, "");
  const lista = string.split("1x").slice(1);
  const linha = string.split("\n");
  // const resultado1 = linhas.slice(4)

  // console.log(string)
  // console.log(linha);

  const complementos = lista.map((line) => {
    let comp = line.split("\n").filter((line) => line !== "");
    let comps2 = comp.slice(2).filter((line) => line !== "Queijo");
    let pedido = `<hr>
                  <br>
                  <h2>${"Pedido #" + id}</h2>
                  <h3>${comp[0]}</h3>  
                  
                    
                    <ul>
                      ${comps2
                        .map(
                          (line) =>
                            `<li key=${line.slice(
                              2
                            )} style="list-style:none">${line}</li>`
                        )
                        .join("")}
                    </ul>
                    <br>
                    <br>
                  <hr>     
                  <br>     
                  <br>             
    `;
    return pedido;
  });
  console.log(complementos);

  return (
    <>
      <div>
        {complementos.map((line, index) => (
          <div
            id="pedido"
            key={index}
            dangerouslySetInnerHTML={{ __html: line }}
          />
        ))}
      </div>
      <hr />
    </>
  );
};

export default TratamentoDados;
