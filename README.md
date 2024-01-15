# Analisador de Texto

## Índice

- [1. Considerações gerais](#1-considerações-gerais)
- [2. Resumo do projeto](#3-resumo-do-projeto)
- [3. Funcionalidades](#4-funcionalidades)
- [4. Boilerplate](#5-boilerplate)
- [5. Critérios de aceitação mínimos e objetivos de aprendizagem](#6-critérios-de-aceitação-mínimos-do-projeto)
- [6. Testes](#7-testes)
---

## 1. Considerações gerais

- Este projeto, Analizador de textos, foi desenvolvido em 4 sprints com objetivo de introduzir o aluno-desenvolvedor às linguagens html, css, java script para certificação como Desenvolvedor Front End. Foi executado de forma individual a partir da metodologia ágil de aprenziagem incentivando  aprenzizagem colaborativa e incremental e autonomia da aprendizagem. Está publicado no Git Pages para composição do portifólio do aluno-desenvolvedor

## 2. Resumo deo Projeto

O Analisador de Texto é uma aplicação acesso on-line que permite uma usuária extrair informações úteis de um
texto que pode fornecer uma variedade de métricas úteis, como contagem de palavras, soma de números, contagem de números. Aplicações como esta são úteis para compreensão mais profunda de textos para processos de tomada de decisões. 


## 3. Funcionalidades

O Analizador de textos permite extrair dados em tempo real à digitação em caixa de texto, em qualuqer lugar por ser oferecido via Web, oportunizando à usuária acessar as seguintes informações:

1. Contagem de Palavras
2. Contagem de Caracteres
3. Contagem de caracteres sem Espaços
4. Contagem de Números
5. Soma de Números
6. Tamanho Médio das Palavras

Possui um botão para limpar o conteúdo da caixa de texto para nova iniciar contagem.


![Demonstração do analisador de texto](./src/Gif%20Text%20Analizer.gif "Demonstração do analisador de texto")

## 4. Boilerplate

Foi oferecida uma estrutura inicial abaixo, a ser seguida, para implementação apenas em Vanilla Java Script, JS puro, sem uso de bibliotecas ou frameworks: 

    ./
    ├── .babelrc
    ├── .editorconfig
    ├── .eslintrc
    ├── .gitignore
    ├── README.md
    ├── package.json
    ├── src
    │   ├── analyzer.js
    │   ├── index.html
    │   ├── index.js
    │   └── style.css
    └── test
        ├── .eslintrc
        └── analyzer.spec.js


## 5. Critérios de aceitação mínimos e objetivos de aprendizagem 

A seguir, você encontrará os critérios de aceitação mínimos do projeto
relacionados a cada objetivo de aprendizado.

### HTML

- **Uso de HTML semântico**
Aplicação facilita as boas práticas de programação ao utilizar html semântico dando mais sentido às tags adicionadas a exemplo de <headaer> para cabelhaho, <ul> pata lista nçao ordenada, 
<footer> para rodapé, <p> para parágrafo e etc..

### CSS

- **Uso de seletores CSS**   
Utiliza seletores de Tipo, Classe, ID, Atributo

- **Modelo de caixa (box model): borda, margem, preenchimento**


### Web APIs

- **Uso de seletores do DOM** 
querySelector e  getElementById

 **Manipulação de eventos do DOM (ouvintes, propagação, delegação)**
addEventListener parar os eventos `click` do `<button>`.

- **Manipulação dinâmica do DOM**
 [`textContent`] ou poderia ser [`innerHTML`]


### JavaScript

- **Tipos de dados primitivos**

  + [ ] A aplicação converte valores do tipo `string` para o tipo `number`.

- **Strings (cadeias de caracteres)**

  + [ ] A aplicação utiliza métodos para manipular strings com [`split`],  [`trim`], [`replace`] e ReGex

- **Variáveis (declaração, atribuição, escopo)**

  + [ ] A aplicação declara variáveis com [`let`] e [`const`], no lugar de variáveis com `var`.

- **Uso de condicionais (if-else, switch, operador ternário, lógica booleana)**

  + [ ] A aplicação utiliza a estrutura [`if..else`] 

- **Uso de loops (while, for, for..of)**

 A aplicação utiliza a estrutura [`for`] para criar um loop

- **Funções (parâmetros, argumentos, retorno)**

  + [ ] O objeto `analyzer` contém um método `getWordCount` para calcular a
        contagem de palavras de um texto.

  + [ ] O objeto `analyzer` contém um método `getCharacterCount` para calcular a
        contagem de caracteres de um texto.

  + [ ] O objeto `analyzer` contém um método `getCharacterCountExcludingSpaces`
        para calcular a contagem de caracteres excluindo espaços e pontuações
        de um texto.

  + [ ] O objeto `analyzer` contém um método `getNumbersCount` para contar quantos
        números existem em um texto.

  + [ ] O objeto `analyzer` contém um método `getNumbersSum` para calcular a soma
        dos números em um texto.

  + [ ] O objeto `analyzer` contém um método `getAverageWordLength` para calcular
        o comprimento médio das palavras em um texto.

- **Testes unitários (unit tests)**

  + [ ] Todos os testes unitários passam à exemplo do npm run test 

- **Módulos do ECMAScript (ES Modules)**

  + [ ] A aplicação utiliza
        [`import`](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/import)
        e
        [`export`](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/export)
        para importar e exportar valores de um módulo JavaScript.

- **Uso de linter (ESLINT)**

  + [ ] Ao executar o linter, não são exibidos erros de formato e estilo.

- **Uso de identificadores descritivos (Nomenclatura e Semântica)**

  + [ ] O código utiliza identificadores descritivos para variáveis e funções.

### Controle de Versões (Git e GitHub)

- **GitHub: Criação de conta e repositórios, configuração de chaves SSH**

  + [ ] A estudante criou uma conta no Github.

  + [ ] A estudante configurou sua conta do Github com uma chave SSH.

- **Git: Controle de versões com git (clone, add, commit, push)**

  + [ ] A estudante criou um _fork_ para o projeto.

  + [ ] A estudante clonou seu repositório usando uma chave SSH.

  + [ ] A estudante criou _commits_ e os salvou no Github.

- **GitHub: Implantação com GitHub Pages**

  + [ ] A aplicação está implantada no GitHub Pages.

### Foco na Usuária

- **Projetar e desenvolver um produto ou serviço centrado nas usuárias**

### Design do Produto

- **Projetar em diferentes níveis de fidelidade**

  + [ ] A estudante criou protótipos de baixa fidelidade para a UI (interface gráfica).

- **Seguir os princípios básicos do design visual**

  + [ ] Foram consideradas as regras básicas de
        [design visual](https://coda.io/d/Bootcamp-UX-Contenido_dqkqk2rV9Z2/Reglas-basicas-de-diseno-visual_suVcO)
        para projetar a UI (interface gráfica).




## 6. Testes

Testes que ajudaram a verificar se os critérios mínimos de aceitação são cumpridos.

### Testes Unitários

Um teste unitário é uma técnica de teste de software na qual se verifica
que cada componente individual de um programa ou sistema funcione corretamente
isoladamente. Em outras palavras, cada unidade de código é testada separadamente
para garantir que atenda aos requisitos e especificações.

Os testes unitários deste projeto executarão os métodos `getWordCount`,
`getCharacterCount`, `getCharacterCountExcludingSpaces`, `getNumbersCount`,
`getNumbersSum` e `getAverageWordLength` com diferentes argumentos e verificarão
se os valores retornados são os esperados.

Você pode executar esses testes com o comando `npm run test` como mostrado
na imagem a seguir:


### Testes de Critérios Mínimos de Aceitação

Esses testes analisarão seus arquivos
[`index.html`](src/index.html),
[`index.js`](src/index.html),
[`analyzer.js`](src/analyzer.js)
[`style.css`](src/style.css)
para verificar se você cumpre os

Você pode executar todos esses testes com o comando `npm run test:oas` ou executar os testes de cada grupo de objetivos de aprendizado
individualmente com os seguintes comandos:

- `npm run test:oas-html`
- `npm run test:oas-css`
- `npm run test:oas-web-api`
- `npm run test:oas-js`

#### Testes End-to-End

Um teste end-to-end (E2E) é uma técnica de teste de software na qual se verifica
o funcionamento de todo o sistema, do início ao fim. Em outras palavras, é testado
o fluxo completo do software, simulando a interação da usuária com a aplicação,
para garantir que todas as partes do sistema funcionem corretamente em conjunto.

Você pode executar esses testes com o comando `npm run test:e2e` como mostrado
na imagem a seguir:

### GitHub Actions

Este repositório usa o GitHub Actions para executar automaticamente
os testes unitários, testes de critérios mínimos de aceitação e
testes end-to-end toda vez que você fizer um _push_ no ramo
_main_ do seu repositório.



8. Conclusões 

O mergulho inicial no mundo do Desenvolvimento Front End pela Laboratória foi um incentivo ao desenvolvimento de habilidades téncnicas e de Life Skills. Foi absolvido  e aplicado um grande volume de informações em 4 semanas com bem sucedido resultado final. A gestão emocional, mentalidade positiva,bem como sistema de colaboração entre colegas e dedicação de toda equipe de couches foi fundamental para aprendizagem, aplicação e continuidade dos estudos. Apesar de cansativo, é muito satisfatório ver os resultados e ainda terminar este projeto conseguindo olhar a tela e ver significados reais na tela preta de letrinhas.   