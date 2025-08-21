const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

const perguntas = [
    {
        enunciado: "Qual a classe de seu personagem?",
        alternativas: [
            {
                texto: "Mago",
                afirmacao: "Essa classe é especializada em dano mágico em área e de ongo alcance, com uma quantidade média de vida"
            },
            {
                texto: "Guerreiro",
                afirmacao: "Essa classe é especializada em dano físico de perto, contém um escudo e uma grande vida"
            }
        ]
    },
    {
        enunciado: "Você encontrou um monstro no caminho, o que fará?",
        alternativas: [
            {
                texto: "Batalho contra ele!",
                afirmacao: "Graças às minhas habilidades consegui derrotar ele facilmente, ganhei seus espólios e equipei-me com itens novos. Fiquei um pouco mais forte."
            },
            {
                texto: "Vou fugir, é mais seguro.",
                afirmacao: "Você conseguiu fugir, mas não ganhou nenhuma recompensa."
            }
        ]
    },
    {
        enunciado: "Você encontrou uma vila que estava sendo roubada por ladrões, o que você fará?",
        alternativas: [
            {
                texto: "Vou derrotar os ladrões, eu acho que consigo!",
                afirmacao: "Você consegui expulsar todos da pequena vila. Ganhou os espólios deles, e ganhou a admiração de todos na vila."
            },
            {
                texto: "Ignorar a situação, pois não cabe a mim  a proteção da vila.",
                afirmacao: "Você passou reto, a vila foi destruída e saqueada, e você seguiu viagem."
            }
        ]
    },
    {
        enunciado: "Você Achou uma pessoa em situação de rua pedindo comida, o que fará?",
        alternativas: [
            {
                texto: "Decido ajudar ele, pois precisa de ajuda.",
                afirmacao: "O mendingo se revelou em um milionário, e te deu dinheiro o suficiente para você e seus sucessores viverem no luxo pelo resto de suas vidas, tudo por causa de sua bondade!"
            },
            {
                texto: "Chuta ele e fala para não encostar em você, pois acha nojento.",
                afirmacao: "Ele, que se revelou um milionário, fez de sua vida um inferno, não deixando você comercializar seus itens."
            }
        ]
    },
    {
        enunciado: "Você achou uma ruína inexplorada, o que fará?",
        alternativas: [
            {
                texto:  "Vou explorar, estou confiante!",
                afirmacao: "Você conseguiu passar pelas armadilhas, e ao chegar na última sala, foi brutalmente assassinado pelo chefão final. Você foi morto pelo seu excesso de confiança."
            },
            {
                texto: "Vou voltar para casa, consigo proteger minnha família com o poder que tenho.",
                afirmacao: "Você voltou tranquilamente para sua casa, e encontrou sua família morta. Sem motivos para viver, seguiu viagem até encontrar um templo budista, onde passou o resto de sua vida meditando sobre suas ações (boas e más)"
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta (){
    if (atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas (){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
        atual++;
        mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "No final de sua jornada...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
