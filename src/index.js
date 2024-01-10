import analyzer from './analyzer.js';
//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`
//DECLARAÇÕES 
const textArea = document.querySelector('[name="user-input"]'); // Pego o atributo name="user-input" no html e declaro com nome textarea
const button = document.getElementById("reset-button");
const wordCount = document.querySelector('[data-testid="word-count"]');
const characterCount = document.querySelector('[data-testid="character-count"]');
const characterNoSpacesCount = document.querySelector('[data-testid="character-no-spaces-count"]');
const numberCount = document.querySelector('[data-testid="number-count"]');
const numberSum = document.querySelector('[data-testid="number-sum"]');
const wordLengthAverage = document.querySelector('[data-testid="word-length-average"]');

//ADIÇÃO DE EVENTOS
textArea.addEventListener("input", metricas); //Escuta a função padrão "keyup" e pede que realiza a função que nomeei metricas e explico abaixo, Obs no Redme atual pediu p substituir por input
button.addEventListener("click", resetar);

//DECLARAÇÃO DA FUNÇÕES DOS EVENTOS
function resetar() {
  textArea.value = ''; //Faz apagar o text area - manipulacao visual x lógica
  wordCount.textContent = "Contagem de palavras: 0"; // Por que não só ="0"
  characterCount.textContent = "Contagem de Caracteres: 0";
  characterNoSpacesCount.textContent = "Contagem de Caracteres Sem Espaços: 0";
  numberCount.textContent = "Contagem de Numeros: 0";
  numberSum.textContent = "Soma de Numeros: 0";
  wordLengthAverage.textContent = "Tamanho Medio das Palavras: 0";
}

function metricas() {
  const text = textArea.value; //Text area é o quadrado e value é o digitado no quadrado
  wordCount.textContent = "Contagem de palavras: " + analyzer.getWordCount(text);
  characterCount.textContent = "Contagem de Caracteres: " + analyzer.getCharacterCount(text);
  characterNoSpacesCount.textContent = "Contagem de Caracteres sem Espaços: " + analyzer.getCharacterCountExcludingSpaces(text);
  numberCount.textContent = "Contagem de Numeros:" + analyzer.getNumberCount(text);
  numberSum.textContent = "Soma de Numeros:" + analyzer.getNumberSum(text);
  wordLengthAverage.textContent = "Tamanho Medio das Palavras:" + analyzer.getAverageWordLength(text);

}

//CONEXÃO DE AÇÃO COM ANALYZER















/* MINHA PRIMEIRA TENTATIVA
const resetbutton = document.getElemetById('reset-button'); //Declarando no js um elemento de id buscado no html
const textarea = document.querySelector("user-input"); //Declrando no js um elemento de tag buscado no html

resetbutton.addEventListener(click, funciton[textarea.value = '']); //apaga a text area - qual nome da sintaxe desse textearea.value.
textarea.addEventListener(input, function (){ })
*/

