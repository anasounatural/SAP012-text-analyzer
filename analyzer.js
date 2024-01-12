
const analyzer = {
  getWordCount: (text) => {
    const words = text.split(/\s+/).filter(palavra => palavra !== ""); // 'Split' divide em palavras onde tem '/\s+/' espaços vazios  Filter= filtra no texto e colocar num nova caixa tudo que atender a condição dentro de (); Neste caso = pegar strings que declaro como 'palavra' '=>' se o item nao for "" vazio / .//= delimita Regex. \s= espaços. + = o anterior \s será repetido. !== diferente/oposto de "" .'=>' é uma Arrow Function
    return words.length;
  },


  getCharacterCount: (text) => {
    return text.length; // aqui não precisa criar variável como palavras na L5, pq o padrão de entendimento da máquina é em caracteres
  },

  getCharacterCountExcludingSpaces: (text) => {
    return text.replace(/[^\w]/g,'').length; // sintaxe string.replace(tira, adiciona)  substitua o que está antes da vírgula pelo que está depois da vírgula. ^ = negação.  \w = engloba [a-zA-Z0-9_]. g = em todo documento '[]' = colchete mostra qua os regex dentro estão combinados e não isolados
  },

  getAverageWordLength: (text) => {
    const words = text.split(' ');//split: divida (text) onde vc encontrar (' ') espaço em branco. Tb poderia ser onde encontrar vírgula ou etc. + Usa Const pq não vai variar o que quero fazer com text
    let totalWords = 0 
    for (let i = 0; i < words.length; i++) 
      totalWords += words[i].length // pegue o que está no lado esquerdo de += some com a quantidade de intens de word na posição 0
    return parseFloat((totalWords / words.length).toFixed(2)); //parseFloat retorna numeros decimais e o to Fixed para fixar casas deciamis em 2. 
  },

  getNumberCount: (text) => {
    const listaNumeros = text.match(/\b\d+(\.\d+)?\b/g); // 'string.match(regex)' match busca na string o padrão anunciado no regex \b =barreira de palavras; \d = numeros decimais \d+ = 1 dígito ou mais; \. = adiciona ponto: ? = opcional-+ 
    if (listaNumeros) {
      return listaNumeros.length;
    }
    else {
      return 0;
    }
  },

  getNumberSum: (text) => {
    const listaNumeros = text.match(/\b\d+(\.\d+)?\b/g); // regex para pegar numeros interios ou decimais. qdeclara \b???? \d+ um ou mais digitos; (\.\d+) com 2 ou mais numeros decimais; ? opcional, ou seja tb pode ser inteiro

    if (listaNumeros) {
      let resultado = 0 // Declara que quer começar contagem do total de palavras a partir do zero  Usa let pq isso depois vai mudar
      for (let i = 0; i < listaNumeros.length; i++) {// For é um loop com parâmetro (posição inicial; condição; incrementar +1)
        resultado += Number(listaNumeros[i]); //number trasnforma string que representa número em número
        //resultado = resultado + Number(listaNumeros[i]);  outra forma de escrever a linha  acima//Number transforma string em numeros a serem somados // igual a linha 59, mas extendida
      }
      return resultado;
    }
    else return 0;

  },

};

export default analyzer;
