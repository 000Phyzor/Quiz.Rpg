const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

const perguntas = [
    {
        enunciado: "Você tem 6 anos e já uma estrela no futebol, possui uma habilidade nos pés como ninguém. Seu pai, ao notá-lo, te dá a oportunidade de entrar em uma escolinha",
        alternativas: [
            {
                texto: "Aceitar",
                afirmacao: "Essa escolinha é reconhecida como a melhor ecolinha do estado do Paraná, sendo conhecida por ser o berço de grandes jogadores, logo, suas habilidades no futebol aumentam ainda mais."
            },
            {
                texto: "Recusar e treinar em casa",
                afirmacao: "Por não ter um treinador, sua única alternativa é imitar os lances que vê na TV, usando cadeiras como bonecos e, depois, pondo em prática com o seu pai."
            }
        ]
    },
    {
        enunciado: "O tempo passou e agora você tem 12 anos! Um olheiro percebe seu potencial e te chama para jogar no time da cidade. Obs: é um time pequeno.",
        alternativas: [
            {
                texto: "É uma ótima chance de crescer, eu topo!",
                afirmacao: "Graças a esse clube, você pode trocar experiências com outros jogadores e jogar com clubes de fora, ganhando inúmeras partidas e um grande destaque no próprio estado."
            },
            {
                texto: "Esse clube não me merece",
                afirmacao: "Sua habilidade continuou a mesma e a soberba foi crescendo. Mesmo assim, você menteve o sonho de ser um grande jogador."
            }
        ]
    },
    {
        enunciado: "Aos 17, perto de sair da categoria de base, seu pai numa última tentativa de torná-lo grande te increve na peneira do Vasco da Gama",
        alternativas: [
            {
                texto: "Me esforçar ao máximo para conseguir essa vaga",
                afirmacao: "Você foi escolhido para jogar no Vasco, e não no sub 17! O treinador logo notou suas habilidades e te mandou direto para o time principal!"
            },
            {
                texto: "Só fazer o que treinou em casa, você sabe que todos os que estão lá são perebentos no futebol",
                afirmacao: "As coisas não aconteceram da forma que você planejava, pois o neto do Romário estava naquela peneira e te mandou direto pra casa. Aquilo foi um banho de água fria na sua vida."
            }
        ]
    },
    {
        enunciado: "Você foi jogar um society com seus amigos e, por algum motivo, o treinador do Barcelona estava lá assistindo, passando o final de semana.",
        alternativas: [
            {
                texto: "Jogar como se fosse a partida da sua vida, vai que ele cresce o olho",
                afirmacao: "Dito e feito! O técnico do Barcelona nem conversou com o presidente do clube e te contratou ali mesmo com um guardanapo e uma Bic falhada. Seu futuro está feito!"
            },
            {
                texto: "Ele nem deve estar prestando atenção e eu tô numa preguiça, vou jogar de boa",
                afirmacao: "O tongo jogou como se fosse o Ronaldo gordo, errou até o nó da chuteira e, novamente, o neto do Romário estava lá. Ele pegou sua vaga no Barcelona."
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
