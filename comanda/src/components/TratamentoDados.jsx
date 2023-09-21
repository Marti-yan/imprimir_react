import React from 'react';

const TratamentoDados = ({ texto, id }) => {
  

  const string = texto.replace(/(R\$\s\d+,\d{2}|subtotal)/gi, '');
  const lista = string.split('1x').slice(1);
  const linha = string.split('\n');
  // const resultado1 = linhas.slice(4)

  // console.log(string)
  // console.log(linha);

   
  const complementos = lista.map((line) => {
    let comp = line.split('\n').filter(line => line !== '');
    let comps2 = comp.slice(2)
    let pedido = `<h2>${'Pedido #'+id}</h2>
                  <h4>${comp[0]}</h4>  
                  <ul> 
                    <b>${comp[1]}</b> 
                    <ul>
                      ${comps2.map(line => `<li key={line}>${line}</li>`)}
                    </ul>
                  </ul>  
                  <hr>                       
    `
    return pedido
  })
  console.log(complementos)

  return (
    <>
      <div>
        {complementos.map((line, index) => (
          <div key={index} dangerouslySetInnerHTML={{ __html: line }} />
        ))}
      </div>
      <hr />
    </>
  );
};

export default TratamentoDados;
