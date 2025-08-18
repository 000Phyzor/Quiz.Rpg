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
        enunciado: "A seleção brasileira, na má fase, resolve chamar alguns voluntários para uma peneira e concorrer a chance de jogar a copa do mundo",
        alternativas: [
            {
                texto:  "Destruir na peneira",
                afirmacao: "É o novo Pelé! Foi convocado para a seleção, marcou 23 gols na final contra a Argentina, quebrou a perna do Messi e ainda ganhou a bola de ouro! Virou o jogador que mais ganha bem na história do futebol e se aposentou aos 30 anos por tédio, mas tem um contrato vitalício com o Barcelona e foi o rico pelo resto da vida!"
            },
            {
                texto: "Não conheço nenhum dos poucos jogadores que foram convocados e esses que estão na peneira não devem nem saber dominar a bola, não vou nem me esforçar",
                afirmacao: "Na peneira, você tentou driblar o Thiago Silva (que estava com 53 anos e jogando na seleção), ele te deu um carrinho e quebrou sua perna em 8 partes diferentes. Você perdeu os movimentos da perna direita (a perna boa) e trabalhou como entregador daqueles panfletos que parecem uma nota de R$100 pelo resto da vida (reagiu ao assalto de um mendigo e morreu aos 30 anos)"
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
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
