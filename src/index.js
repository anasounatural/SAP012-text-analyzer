import analyzer from './analyzer.js';

//DECLARAÇÕES 
const textArea = document.querySelector('[name="user-input"]'); // Pega o atributo name="user-input" no html e declaro com nome textarea
const button = document.getElementById('reset-button');
const wordCount = document.querySelector('[data-testid="word-count"]'); //nomes das contantes aqui estao só aqui. o que liga c html é dentro do  parenteses.  [] é sintaxe padrão do query selector
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
//CONEXÃO DE AÇÃO COM ANALYZER

function metricas() {
  const digitacao = textArea.value; //Text area é o quadrado e value é o digitado no quadrado; value é p quanhaverá entrada de informação e textContent pra quando a  info é fixa
  wordCount.textContent = "Contagem de Palavras: " + analyzer.getWordCount(digitacao);
  characterCount.textContent = "Contagem de Caracteres: " + analyzer.getCharacterCount(digitacao);
  characterNoSpacesCount.textContent = "Contagem de Caracteres sem Espaços: " + analyzer.getCharacterCountExcludingSpaces(digitacao);
  numberCount.textContent = "Contagem de Números: " + analyzer.getNumberCount(digitacao);
  numberSum.textContent = "Soma de Números: " + analyzer.getNumberSum(digitacao);
  wordLengthAverage.textContent = "Tamanho Médio das Palavras: " + analyzer.getAverageWordLength(digitacao); //pegue o TextContent do que declarei como WordLengthAverage e Escreva a string Tamanho medio das palvras + o resultado da função que chamei de GetWordLength no Analyzer para maniulas esses dados (digitacao)  

}

