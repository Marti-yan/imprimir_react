// Array original com várias strings
const arrayOriginal = ["Item 1", "Item 2", "1x", "Item 3", "Item 4", "1x", "Item 5", "1x", "Item 6"];

// Array para armazenar as arrays separadas
const arraysSeparadas = [];
let novaArray = [];

// Variável para rastrear se estamos coletando dentro de "1x"
let coletando = false;

// Percorre o array original
for (const elemento of arrayOriginal) {
  if (elemento === "1x") {
    if (coletando) {
      // Se já estávamos coletando, adicionamos a nova array à lista de arrays separadas
      arraysSeparadas.push(novaArray);
      novaArray = []; // Reinicia a nova array
    }
    coletando = !coletando; // Inverte o valor de coletando
  } else if (coletando) {
    novaArray.push(elemento); // Adiciona o elemento à nova array
  }
}

console.log(arraysSeparadas);