// Definição das perguntas do quiz com suas repostas e respota correta
const perguntas = [
    {
      pergunta: "O que é JavaScript?",
      respostas: [
        "Uma linguagem de marcação",
        "Uma linguagem de programação",
        "Um sistema operacional",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a palavra-chave usada para declarar uma variável em JavaScript?",
      respostas: [
        "var",
        "variable",
        "vrb",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o operador lógico 'E' em JavaScript?",
      respostas: [
        "||",
        "&",
        "&&",
      ],
      correta: 2
    },
    {
      pergunta: "O que é um array em JavaScript?",
      respostas: [
        "Um tipo de dado numérico",
        "Uma estrutura de controle de fluxo",
        "Uma coleção ordenada de valores",
      ],
      correta: 2
    },
    {
      pergunta: "Como você escreve um comentário de uma linha em JavaScript?",
      respostas: [
        "// Comentário",
        "/* Comentário */",
        "-- Comentário",
      ],
      correta: 0
    },
    {
      pergunta: "O que é uma função em JavaScript?",
      respostas: [
        "Um bloco de código que executa uma ação específica",
        "Uma variável",
        "Um operador lógico",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função do método 'toFixed()'?",
      respostas: [
        "Arredondar um número para o inteiro mais próximo",
        "Limitar o número de casas decimais de um número",
        "Transformar uma string em um número",
      ],
      correta: 1
    },
    {
      pergunta: "O que é 'hoisting' em JavaScript?",
      respostas: [
        "Elevar um elemento na página",
        "Elevar uma variável ou função no escopo",
        "Mover um elemento para o final do documento",
      ],
      correta: 1
    },
    {
      pergunta: "Como você verifica se uma variável é de um tipo específico em JavaScript?",
      respostas: [
        "typeof x === 'tipo'",
        "type(x) === 'tipo'",
        "x.isType('tipo')",
      ],
      correta: 0
    },
    {
      pergunta: "O que representa o operador '!=='' em JavaScript?",
      respostas: [
        "Igualdade solta",
        "Desigualdade estrita",
        "Igualdade estrita",
      ],
      correta: 1
    },
    // Outras perguntas seguem o mesmo padrão...
  ];
  
  // Seleciona os elementos do HTML onde as perguntas do quiz serão inseridas
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + 'de' + totalDePerguntas
  
  // Loop ou laço de repetição do array 'perguntas'
  for(const item of perguntas){
    // Clona o conteudo do template para criar um novo item do quiz
    const quizItem = template.content.cloneNode(true)
  
    // Define o texto da pergunta no novo item do quiz
    quizItem.querySelector('h3').textContent = item.pergunta
  
    // Itera sobre cada resposta da pergunta atual e as adiciona ao novo item do quiz
    for (let resposta of item.respostas) {
  
      // Clona o template do elemento 'dt' que contem uma resposta
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      // Define o texto da resposta clonada
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name','pergunta-'+perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
        
        corretas.delete(item)
        if (estaCorreta){
          corretas.add(item)
        }
  
        mostrarTotal.textContent = corretas.size+ 'de' + totalDePerguntas
      }
  
      // Adiciona a resposta clonada ao novo item do quiz
      quizItem.querySelector('dl').appendChild(dt)
    }
  
    // Remove o primeiro elemento 'dt' que é usado como modelo/template
    quizItem.querySelector('dl dt').remove()
    
    //Adiciona o novo item do quiz a pagina HTML
    quiz.appendChild(quizItem)  
  }