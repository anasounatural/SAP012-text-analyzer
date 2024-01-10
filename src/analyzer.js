
const analyzer = {
  getWordCount: (text) => {
    const words = text.split(/\s+/).filter(palavra => palavra !== ""); //variável const word pega o (text) declarado no js, divide em palavras e retira espaços vazios. Split= tira espaços. Filter= filtrar filtrar no texto e colocar num nova caixa tudo que atender a condição dentro de (), que neste caso é pegar strings que nao sejam vazias.//= delimita Regex. \s= espaços. += o anterior \s será repetido. !== significa diferente/opost. "" vazio
    return words.length;
  },


  getCharacterCount: (text) => {
    return text.length; // aqui não precisa criar variável como palavras na L5, pq o padrão de entendimento da máquina é em caracteres
  },

  getCharacterCountExcludingSpaces: (text) => {
    return text.replace(/[^\w]/g,'').length; // sintaxe string.replace(tira, adiciona)  substitua o que está antes da vírgula pelo que está depois da vírgula. ^ = negação.  \w = engloba [a-zA-Z0-9_]. g = em todo documento
  },

  getAverageWordLength: (text) => {
    const words = text.split(' ');//split: divida (text) onde vc encontrar (' ') espaço em branco. Tb poderia ser onde encontrar vírgula ou etc. + Usa Const pq não vai variar o que quero fazer com text
    let totalWords = 0 // Declara que quer começar contagem do total de palavras a partir do zero  Usa let pq isso depois vai mudar
    for (let i = 0; i < words.length; i++) // For é um loop com parâmetro (posição inicial; condição; incrementar +1)
      totalWords += words[i].length // pegue o que está no lado esquerdo de += some com a quantidade de intens de word na posição 0
    return parseFloat((totalWords / words.length).toFixed(2)); //parseFloat retorna numeros decimais e o to Fixed para fixar casas deciamis em 2. 
  },

  getNumberCount: (text) => {
    const listaNumeros = text.match(/\b\d+(\.\d+)?\b/g); // string.match(regex) match busca na string o padrão anunciado no regex 
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
      let resultado = 0 //diz que o padrao inicial de acumular a soma dos numeros é 0
      for (let i = 0; i < listaNumeros.length; i++) {//FOR percorre numeros da lista e segura / i++, i=1+1, i+=1 adiciona à uma "caixa" os números encontrados
        resultado += Number(listaNumeros[i]); // outra forma de escrever a linha  acima //Numer pegou todas as stings tranformou em numero e + (somou) e =(deu o resultado) 
        //resultado = resultado + Number(listaNumeros[i]);  outra forma de escrever a linha  acima//Number transforma string em numeros a serem somados // igual a linha 59, mas extendida
      }
      return resultado;
    }
    else return 0;

  },

};

export default analyzer;
