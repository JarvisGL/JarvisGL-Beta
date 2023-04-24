
var botaoMenu = document.getElementById('botao');
var fundoTela = document.getElementById('tela');
var corDoTexto = document.getElementById('texto');
var cabecalho = document.getElementById('cabecalho');
var itemUl = document.getElementById('item');
var divBefore = document.getElementById('divBefore');
var navMenu = document.getElementById('nav--Menu');
var aMenu = document.getElementById('txtMenu');
var menu = document.getElementById('menu');

const especificação = {
    afirmacoes: ['sim', 'não', 'nao', 'aham', 'talvez', 'claro'],
    mudarCor: ['mudar a cor', 'mude a cor', 'mude cor', 'mudar cor', 'w', 'cor',
        'eu quero mudar a cor', 'eu quero que mude a cor', 'quero mudar a cor'],
    artigo: ['pra', 'para', 'e', 'o', 'com', 'a'],
    cor: ['azul', 'verde', 'vermelho',
        'cinza', 'preto', 'laranja', 'rosa',
        'roxo', 'ciano', 'turquesa'],
    texto: ['texto'],
    corAdd: ['claro', 'escuro', 'marinho', 'shock'],
    imagem: ['imagem', 'quero uma imagem', 'quero imagem', 'faz imagem'],
    escolhaElement: [],
    fazCanvas: ['canvas', 'faz desenho', 'fazer desenho', 'desenho',
     'criar um desenho', 'criar canvas'],
    formatoDesenho: {
        circulo:['circulo', 'círculo', 'bola', 'redondo'],
        retangulo: ['retangulo', 'retângulo'],
        triangulo: ['triangulo', 'triângulo'], 
        quadrado: ['quadrado'],
        hexagono: ['hexagono']
    },
    criaBotao: ['fazer botão', 'fazer botao', 'criar botão',
     'criar botao', 'botao', 'botão', 'eu quero um botão', 'eu quero um botao'],
    tabela: ['tabela', 'faz tabela', 'fazer tabela', 'fazer uma tabela']
}

var aviso = alert('AVISO! Responda a todas as perguntas do bot em minúsculo e com gramática correta, que o seu pedido seja realizado!');
var nome = prompt('Olá! Me informe seu nome');
var pedido = prompt(nome + ', seja bem vindo! O que você deseja?');


especificação.cor.push('amarelo', 'violeta', 'vinho', 'marrom', 'salmão',
    'salmao', 'magenta', 'chocolate', 'lima', 'limão', 'limao', 'azul claro',
    'azul escuro', 'azul marinho', 'verde claro', 'verde escuro', 'verde forte',
    'rosa claro', 'rosa escuro', 'rosa shock', 'salmao claro', 'salmão claro',
    'vermelho claro', 'vermelho escuro', 'cinza claro', 'branco');

especificação.corAdd.push('forte');

especificação.texto.push('quero um texto', 'faça um texto', 'faz texto');

especificação.escolhaElement.push('fundo', 'cabecalho', 'cabeçalho', 'botão', 'botao')

function corMudaCanvas(desejo, elemento) {

    if (desejo === especificação.cor[0]) {

        elemento.fillStyle = 'blue';
    }
    if (desejo === especificação.cor[1]) {

        elemento.fillStyle = 'green';
    }
    if (desejo === especificação.cor[2]) {

        elemento.fillStyle = 'red';
    }
    if (desejo === especificação.cor[3]) {

        elemento.fillStyle = 'gray';
    }
    if (desejo === especificação.cor[4]) {

        elemento.fillStyle = 'black';
    }
    if (desejo === especificação.cor[5]) {

        elemento.fillStyle = 'orange';
    }
    if (desejo === especificação.cor[6]) {

        elemento.fillStyle = 'hotPink';
    }
    if (desejo === especificação.cor[7]) {

        elemento.fillStyle = 'indigo';
    }
    if (desejo === especificação.cor[8]) {

        elemento.fillStyle = 'cyan';
    }
    if (desejo === especificação.cor[9]) {

        elemento.fillStyle = 'turquoise';
    }
    if (desejo === especificação.cor[10]) {

        elemento.fillStyle = 'yellow';
    }
    if (desejo === especificação.cor[11]) {

        elemento.fillStyle = 'slateBlue';
    }
    if (desejo === especificação.cor[12]) {

        elemento.fillStyle = 'maroon';
    }
    if (desejo === especificação.cor[13]) {

        elemento.fillStyle = 'saddleBrown';
    }
    if (desejo === especificação.cor[14] || desejo === especificação.cor[15]) {

        elemento.fillStyle = 'salmon';
    }
    if (desejo === especificação.cor[16]) {

        elemento.fillStyle = 'magenta';
    }
    if (desejo === especificação.cor[17]) {

        elemento.fillStyle = 'chocolate';
    }
    if (desejo === especificação.cor[18]
        || desejo === especificação.cor[19]
        || desejo === especificação.cor[20]
        || desejo === especificação.cor[26]) {

        elemento.fillStyle = 'lime';
    }
    if (desejo === especificação.cor[21]) {

        elemento.fillStyle = 'dodgerBlue';
    }
    if (desejo === especificação.cor[22]
        || desejo === especificação.cor[23]) {

        elemento.fillStyle = 'darkBlue';
    }
    if (desejo === especificação.cor[24]) {

        elemento.fillStyle = 'lightGreen';
    }
    if (desejo === especificação.cor[25]) {

        elemento.fillStyle = 'darkGreen';
    }
    if (desejo === especificação.cor[27]) {

        elemento.fillStyle = 'lightPink';
    }
    if (desejo === especificação.cor[28]) {

        elemento.fillStyle = 'darkPink';
    }
    if (desejo === especificação.cor[29]) {

        elemento.fillStyle = 'deepPink';
    }

    if (desejo === especificação.cor[30]
        || desejo === especificação.cor[31]) {

        elemento.fillStyle = 'lightSalmon';
    }
    if (desejo === especificação.cor[32]) {

        elemento.fillStyle = 'tomato';
    }
    if (desejo === especificação.cor[33]) {

        elemento.fillStyle = 'darkRed';
    }
    if (desejo === especificação.cor[34]) {

        elemento.fillStyle = 'darkGray';
    }
    if (desejo === especificação.cor[35]) {
        
        elemento.fillStyle = 'white';
        
    }
}

function corMuda(desejo, elemento) {

    if (desejo === especificação.cor[0]) {

        elemento.style.backgroundColor = 'blue';
    }
    if (desejo === especificação.cor[1]) {

        elemento.style.backgroundColor = 'green';
    }
    if (desejo === especificação.cor[2]) {

        elemento.style.backgroundColor = 'red';
    }
    if (desejo === especificação.cor[3]) {

        elemento.style.backgroundColor = 'gray';
    }
    if (desejo === especificação.cor[4]) {

        elemento.style.backgroundColor = 'black';
    }
    if (desejo === especificação.cor[5]) {

        elemento.style.backgroundColor = 'orange';
    }
    if (desejo === especificação.cor[6]) {

        elemento.style.backgroundColor = 'hotPink';
    }
    if (desejo === especificação.cor[7]) {

        elemento.style.backgroundColor = 'indigo';
    }
    if (desejo === especificação.cor[8]) {

        elemento.style.backgroundColor = 'cyan';
    }
    if (desejo === especificação.cor[9]) {

        elemento.style.backgroundColor = 'turquoise';
    }
    if (desejo === especificação.cor[10]) {

        elemento.style.backgroundColor = 'yellow';
    }
    if (desejo === especificação.cor[11]) {

        elemento.style.backgroundColor = 'slateBlue';
    }
    if (desejo === especificação.cor[12]) {

        elemento.style.backgroundColor = 'maroon';
    }
    if (desejo === especificação.cor[13]) {

        elemento.style.backgroundColor = 'saddleBrown';
    }
    if (desejo === especificação.cor[14] || desejo === especificação.cor[15]) {

        elemento.style.backgroundColor = 'salmon';
    }
    if (desejo === especificação.cor[16]) {

        elemento.style.backgroundColor = 'magenta';
    }
    if (desejo === especificação.cor[17]) {

        elemento.style.backgroundColor = 'chocolate';
    }
    if (desejo === especificação.cor[18]
        || desejo === especificação.cor[19]
        || desejo === especificação.cor[20]
        || desejo === especificação.cor[26]) {

        elemento.style.backgroundColor = 'lime';
    }
    if (desejo === especificação.cor[21]) {

        elemento.style.backgroundColor = 'dodgerBlue';
    }
    if (desejo === especificação.cor[22]
        || desejo === especificação.cor[23]) {

        elemento.style.backgroundColor = 'darkBlue';
    }
    if (desejo === especificação.cor[24]) {

        elemento.style.backgroundColor = 'lightGreen';
    }
    if (desejo === especificação.cor[25]) {

        elemento.style.backgroundColor = 'darkGreen';
    }
    if (desejo === especificação.cor[27]) {

        elemento.style.backgroundColor = 'lightPink';
    }
    if (desejo === especificação.cor[28]) {

        elemento.style.backgroundColor = 'darkPink';
    }
    if (desejo === especificação.cor[29]) {

        elemento.style.backgroundColor = 'deepPink';
    }

    if (desejo === especificação.cor[30]
        || desejo === especificação.cor[31]) {

        elemento.style.backgroundColor = 'lightSalmon';
    }
    if (desejo === especificação.cor[32]) {

        elemento.style.backgroundColor = 'tomato';
    }
    if (desejo === especificação.cor[33]) {

        elemento.style.backgroundColor = 'darkRed';
    }
    if (desejo === especificação.cor[34]) {

        elemento.style.backgroundColor = 'darkGray';
    }
    if (desejo === especificação.cor[35]) {
        
        elemento.style.backgroundColor = 'white';
        
    }
}
function colorMuda(desejo, elemento) {

    if (desejo === especificação.cor[0]) {

        elemento.style.color = 'blue';
    }
    if (desejo === especificação.cor[1]) {

        elemento.style.color = 'green';
    }
    if (desejo === especificação.cor[2]) {

        elemento.style.color = 'red';
    }
    if (desejo === especificação.cor[3]) {

        elemento.style.color = 'gray';
    }
    if (desejo === especificação.cor[4]) {

        elemento.style.color = 'black';
    }
    if (desejo === especificação.cor[5]) {

        elemento.style.color = 'orange';
    }
    if (desejo === especificação.cor[6]) {

        elemento.style.color = 'hotPink';
    }
    if (desejo === especificação.cor[7]) {

        elemento.style.color = 'indigo';
    }
    if (desejo === especificação.cor[8]) {

        elemento.style.color = 'cyan';
    }
    if (desejo === especificação.cor[9]) {

        elemento.style.color = 'turquoise';
    }
    if (desejo === especificação.cor[10]) {

        elemento.style.color = 'yellow';
    }
    if (desejo === especificação.cor[11]) {

        elemento.style.color = 'slateBlue';
    }
    if (desejo === especificação.cor[12]) {

        elemento.style.color = 'maroon';
    }
    if (desejo === especificação.cor[13]) {

        elemento.style.color = 'saddleBrown';
    }
    if (desejo === especificação.cor[14] || desejo === especificação.cor[15]) {

        elemento.style.color = 'salmon';
    }
    if (desejo === especificação.cor[16]) {

        elemento.style.color = 'magenta';
    }
    if (desejo === especificação.cor[17]) {

        elemento.style.color = 'chocolate';
    }
    if (desejo === especificação.cor[18]
        || desejo === especificação.cor[19]
        || desejo === especificação.cor[20]
        || desejo === especificação.cor[26]) {

        elemento.style.color = 'lime';
    }
    if (desejo === especificação.cor[21]) {

        elemento.style.color = 'dodgerBlue';
    }
    if (desejo === especificação.cor[22]
        || desejo === especificação.cor[23]) {

        elemento.style.color = 'darkBlue';
    }
    if (desejo === especificação.cor[24]) {

        elemento.style.color = 'lightGreen';
    }
    if (desejo === especificação.cor[25]) {

        elemento.style.color = 'darkGreen';
    }
    if (desejo === especificação.cor[27]) {

        elemento.style.color = 'lightPink';
    }
    if (desejo === especificação.cor[28]) {

        elemento.style.color = 'darkPink';
    }
    if (desejo === especificação.cor[29]) {

        elemento.style.color = 'deepPink';
    }

    if (desejo === especificação.cor[30]
        || desejo === especificação.cor[31]) {

        elemento.style.color = 'lightSalmon';
    }
    if (desejo === especificação.cor[32]) {

        elemento.style.color = 'tomato';
    }
    if (desejo === especificação.cor[33]) {

        elemento.style.color = 'darkRed';
    }
    if (desejo === especificação.cor[34]) {

        elemento.style.color = 'darkGray';
    }
    if (desejo === especificação.cor[35]) {
        
        elemento.style.color = 'white';
    }
}

function mudaCorTxt(desejo, elemento) {

    if (desejo === especificação.cor[0]) {
        var corId1 = document.getElementById('cor1');
        corId1.style.color = 'blue';
        elemento.id = corId1.id;
      }
      if (desejo === especificação.cor[1]) {
        var corId2 = document.getElementById('cor2');
        corId2.style.color = 'Green';
        elemento.id = corId2.id;
      }
    if (desejo === especificação.cor[2]) {

        var corId3 = document.getElementById('cor3').style.color = 'red';
        elemento.id = corId3;
    }
    if (desejo === especificação.cor[3]) {

        var corId4 = document.getElementById('cor4').style.color = 'gray';
        elemento.id = corId4;
    }
    if (desejo === especificação.cor[4]) {

        var corId5 = document.getElementById('cor5').style.color = 'black';
        elemento.id = corId5;
    }
    if (desejo === especificação.cor[5]) {

        var corId6 = document.getElementById('cor6').style.color = 'orange';
        elemento.id = corId6;
    }
    if (desejo === especificação.cor[6]) {

        var corId7 = document.getElementById('cor7').style.color = 'hotPink';
        elemento.id = corId7;
    }
    if (desejo === especificação.cor[7]) {

        var corId8 = document.getElementById('cor8').style.color = 'indigo';
        elemento.id = corId8;
    }
    if (desejo === especificação.cor[8]) {

        var corId9 =document.getElementById('cor9').style.color = 'cyan';
        elemento.id = corId9;
    }
    if (desejo === especificação.cor[9]) {

        var corId10 = document.getElementById('cor10').style.color = 'turquoise';
        elemento.id = corId10;
    }
    if (desejo === especificação.cor[10]) {

        var corId11 = document.getElementById('cor11').style.color = 'yellow';
        elemento.id = corId11;
    }
    if (desejo === especificação.cor[11]) {

        var corId12 = document.getElementById('cor12').style.color = 'slateBlue';
        elemento.id = corId12;
    }
    if (desejo === especificação.cor[12]) {

        var corId13 = document.getElementById('cor13').style.color = 'blue';
        elemento.id = corId13;
    }
    if (desejo === especificação.cor[13]) {

        var corId14 = document.getElementById('cor14').style.color = 'blue';
        elemento.id = corId14;
    }
    if (desejo === especificação.cor[14] || desejo === especificação.cor[15]) {

        var corId15 = document.getElementById('cor15').style.color = 'blue';
        elemento.id = corId15;
    }
    if (desejo === especificação.cor[16]) {

        var corId16 = document.getElementById('cor16').style.color = 'blue';
        elemento.id = corId16;
    }
    if (desejo === especificação.cor[17]) {

        var corId17 = document.getElementById('cor17');
        elemento.id = corId17;
    }
    if (desejo === especificação.cor[18]
        || desejo === especificação.cor[19]
        || desejo === especificação.cor[20]
        || desejo === especificação.cor[26]) {

            var corId18 = document.getElementById('cor18');
            elemento.id = corId18;
    }
    if (desejo === especificação.cor[21]) {

        var corId19 = document.getElementById('cor19');
        elemento.id = corId19;
    }
    if (desejo === especificação.cor[22]
        || desejo === especificação.cor[23]) {

            var corId20 = document.getElementById('cor20');
            elemento.id = corId20;
    }
    if (desejo === especificação.cor[24]) {

        var corId21 = document.getElementById('cor21');
        elemento.id = corId21;
    }
    if (desejo === especificação.cor[25]) {

        var corId22 = document.getElementById('cor22');
        elemento.id = corId22;
    }
    if (desejo === especificação.cor[27]) {

        var corId23 = document.getElementById('cor23');
        elemento.id = corId23;
    }
    if (desejo === especificação.cor[28]) {

        var corId24= document.getElementById('cor24');
        elemento.id = corId24;
    }
    if (desejo === especificação.cor[29]) {

        var corId25= document.getElementById('cor25');
        elemento.id = corId25;
    }

    if (desejo === especificação.cor[30]
        || desejo === especificação.cor[31]) {

            var corId26 = document.getElementById('cor26');
            elemento.id = corId26;
    }
    if (desejo === especificação.cor[32]) {

        var corId27 = document.getElementById('cor27');
        elemento.id = corId27;
    }
    if (desejo === especificação.cor[33]) {

        var corId28= document.getElementById('cor28');
        elemento.id = corId28;
    }
    if (desejo === especificação.cor[34]) {

        var corId29 = document.getElementById('cor29');
        elemento.id = corId29;
    }
    if (desejo === especificação.cor[35]) {
        
        var corId30 = document.getElementById('cor30');
        elemento.id = corId30; 
    }
}

function mudaFundo(desejo) {

    if (desejo === especificação.mudarCor[0]
        || desejo === especificação.mudarCor[1]
        || desejo === especificação.mudarCor[2]
        || desejo === especificação.mudarCor[3]
        || desejo === especificação.mudarCor[4]
        || desejo === especificação.mudarCor[5]
        || desejo === especificação.mudarCor[6]
        || desejo === especificação.mudarCor[7]
        || desejo === especificação.mudarCor[8]) {
        let escolhaCor = prompt('você deseja mudar a cor de fundo, cabecalho ou do botão?');
        let corOuImg = prompt('Gostaria de mudar a cor ou colocar uma imagem de fundo?');
       if(corOuImg === 'cor') {
        if (escolhaCor === especificação.escolhaElement[0]) {
            var corFundo = prompt('qual a cor de fundo desejada?');

            corMuda(corFundo, fundoTela);
            if (corFundo === especificação.cor[21] ||
                corFundo === especificação.cor[22]
                || corFundo === especificação.cor[23]
                || corFundo === especificação.cor[0]) {

                botaoMenu.style.backgroundColor = 'turquoise';
                botaoMenu.style.color = 'blue';
            }

            if (corFundo === especificação.cor[7] || corFundo === especificação.cor[6]
                || corFundo === especificação.cor[27] || corFundo === especificação.cor[28]
                || corFundo === especificação.cor[29]
                || corFundo === especificação.cor[2]
                || corFundo === especificação.cor[3]
                || corFundo === especificação.cor[33]
                || corFundo === especificação.cor[4]
                || corFundo === especificação.cor[5]) {

                botaoMenu.style.backgroundColor = 'white';
                botaoMenu.style.color = 'black';
            }
        } if(escolhaCor === especificação.escolhaElement[1] 
            || escolhaCor === especificação.escolhaElement[2]) {
            
                var corFundo = prompt('qual a cor do cabeçalho desejada?');
                corMuda(corFundo, cabecalho);
            }
            if (escolhaCor === especificação.escolhaElement[3]
                || escolhaCor === especificação.escolhaElement[4]) {
            
                    corBotao(botaoMenu);
        }}
        if (corOuImg === especificação.imagem[0]) {
            let imgLinkFundo = prompt('coloque o link da imagem desejada');
            let imgFundo = createElement('img');
            let imgCSS = getElementById('imgFundoCSS');
            imgFundo.href = imgLinkFundo;
            imgFundo.id = imgCSS;
            fundoTela.style.background = imgLinkFundo;
            
        }
    }
}
//Oi!! Você me achou! merece um prêmio! você está sendo desafiado para uma partida de mario kart!

function texto(desejo) {

    if (desejo === especificação.texto[0]
        || desejo === especificação.texto[1]
        || desejo === especificação.texto[2]
        || desejo === especificação.texto[3]) {
        let ifTexto = prompt('Qual o texto desejado?');
        let divsoria = document.getElementById('divBefore');

       // let teste3 = document.createElement('p');
       let teste2 = document.createTextNode(ifTexto);
      //  teste2.title = ifTexto;
        divsoria.appendChild(teste2);

        let corTexto = prompt('qual a cor desejada no texto?');
        mudaCorTxt(corTexto, teste2);
       
    }
}

function addImg(desejo) {
    
    var img = document.createElement('img');
    if (desejo === especificação.imagem[0] 
        || desejo === especificação.imagem[1] 
        || desejo === especificação.imagem[2] 
        || desejo === especificação.imagem[3]) {
           var selectImg = prompt('Coloque o link da imagem aqui por favor');
            img.src = selectImg;
            divsoria.appendChild(img);
    }
    
}

function fazBotao(desejo) {
    if (desejo === especificação.criaBotao[0] 
        || desejo === especificação.criaBotao[1] 
        || desejo === especificação.criaBotao[2] 
        || desejo === especificação.criaBotao[3] 
        || desejo === especificação.criaBotao[4] 
        || desejo === especificação.criaBotao[5] 
        || desejo === especificação.criaBotao[6] 
        || desejo === especificação.criaBotao[7]) {
        
            var fazA = document.createElement('a');
            var ifBotao = document.createElement('button');
            
            var txtBotao = prompt('qual texto você deseja adicionar no botão?');
            ifBotao.title = txtBotao;

            var desejaLink = prompt('você deseja adicionar um link nesse botão?');
            var linkBotao = prompt('coloque aqui o link desejado como destino deste botão');

            if (desejaLink === especificação.afirmacoes[0] 
                || desejaLink === especificação.afirmacoes[3] 
                || desejaLink === especificação.afirmacoes[5]) {
                
                    fazA.href = linkBotao;
            }
            fazA.appendChild(ifBotao);
            ifBotao.id = 'botao';
            divBefore.appendChild(fazA);
            
            
            corBotao(ifBotao);
    }
}

function corBotao(nomeBotao) {
    
        var corFundoBotao = prompt('qual a cor do botão desejada?');
        corMuda(corFundoBotao, nomeBotao);
            
        var corTextoBotao = prompt('qual cor do texto do botão você deseja?');
        colorMuda(corTextoBotao, nomeBotao);
}

function criaCirculo(element, x, y, raio, ang1, ang2, variavel) {
    
    //element.fillStyle = variavel;
    corMudaCanvas(variavel, element);
	element.beginPath();
	element.arc(x, y, raio, ang1, ang2 * Math.PI);
	element.fill();

   
}

function criaRetangulo(x, y, largura, altura, variavel, element) {

    corMudaCanvas(variavel, element);
    element.fillRect(x, y, largura, altura);
}

function criaQuadrado(x, y, propriedades, variavel, element) {

    corMudaCanvas(variavel, element);
    element.fillRect(x, y, propriedades, propriedades);

}

function criaCanvas(desejo) {

    if (desejo === especificação.fazCanvas[0] 
        || desejo === especificação.fazCanvas[1] 
        || desejo === especificação.fazCanvas[2] 
        || desejo === especificação.fazCanvas[3] 
        || desejo === especificação.fazCanvas[4] 
        || desejo === especificação.fazCanvas[5] ) {
        var canvas = document.createElement('canvas');
        var pincel = canvas.getContext('2d');
        divBefore.appendChild(canvas);

        var heightCanvas = prompt('qual altura desejada ao seu quadro de desenho?');
        canvas.height = heightCanvas;
        var widthCanvas = prompt('qual largura desejada ao quadro de desenho?');
        canvas.width = widthCanvas;

        var qualDesenho = prompt('qual o desenho desejado? coloque apenas a forma desejada!!');
       
        if(qualDesenho === especificação.formatoDesenho.circulo[0] 
        || qualDesenho === especificação.formatoDesenho.circulo[1] 
        || qualDesenho === especificação.formatoDesenho.circulo[2] 
        || qualDesenho === especificação.formatoDesenho.circulo[3] ) {
           
            var corCirculo = prompt('qual será a cor do seu circulo?');

            var diametroCirculo = prompt('qual será o diametro do círculo?');

            var raioCirculo = prompt('Qual será o raio do círculo?');

            var tamanhoCirculo = prompt('qual será o angulo inicial do seu circulo?');

            var xCirculo = prompt('defina a posição do angulo final do circulo');

            var yCirculo = prompt('defina o "y" (posição vertical) do seu círculo');

            criaCirculo(pincel, xCirculo, yCirculo, tamanhoCirculo, raioCirculo, diametroCirculo, corCirculo);

        }
        if (qualDesenho === especificação.formatoDesenho.retangulo[0] 
            || qualDesenho === especificação.formatoDesenho.retangulo[1] ) {
            
            var larguraRetangulo = prompt('digite a largura desejada ao seu retângulo');
            
            var alturaRetangulo = prompt('qual será a altura do retângulo?');

            var xRetangulo = prompt('defina a posição "X" do seu retângulo');

            var yRetangulo = prompt('defina a posição "Y" do seu retângulo');

            var corRetangulo = prompt('qual a cor desejada ao retângulo?');

            criaRetangulo(xRetangulo, yRetangulo, larguraRetangulo, alturaRetangulo, corRetangulo, pincel);
        }
        if (qualDesenho === especificação.formatoDesenho.quadrado[0]) {
            
            var propriedadeQuadrado = prompt('qual será a proporção em pixels do quadrados?');

            var xQuadrado = prompt('defina a posição "X" do seu quadrado');

            var yQuadrado = prompt('defina a posição "Y" do seu quadrado');

            var corQuadrado = prompt('qual a cor desejada ao quadrado?');

            criaQuadrado(xQuadrado, yQuadrado, propriedadeQuadrado, corQuadrado, pincel);
        }
    }
}



function criaTabela(desejo) {

    if (desejo === especificação.tabela[0] 
        || desejo === especificação.tabela[1] 
        || desejo === especificação.tabela[2] 
        || desejo === especificação.tabela[3]) {
        var colunaTab = prompt('quantas colunas sua tabela terá?');

        function nColunas(numero) {
            var tab = createElement('table');
            var tHeadTab =  createElement('thead');
            var trTab = createElement('tr');
           
            tab.appendChild(tHeadTab);
            tab.border = '1';
            tHeadTab.appendChild(trTab);
            

              if(numero === 1) {
                
                var trTab1 = createElement('tr');
                var thTab = createElement('th');
               
                trTab1.appendChild(thTab);
              }
              if(numero === 2) {
                var trTab2 = createElement('tr');
                var thTab = createElement('th');
                var thTab = createElement('th');
               
                trTab2.appendChild(thTab);
                trTab2.appendChild(thTab2);
            }
            if(numero === 3) {
                var trTab3 = createElement('tr');
                var thTab = createElement('th');
                var thTab = createElement('th');
                var thTab = createElement('th');

                trTab3.appendChild(thTab);
                trTab3.appendChild(thTab2);
                trTab3.appendChild(thTab3);
            }
            if(numero === 4) {
               
                var trTab4 = createElement('tr');
                var thTab = createElement('th');
                var thTab2 = createElement('th');
                var thTab3 = createElement('th');
                var thTab4 = createElement('th');

                trTab4.appendChild(thTab);
                trTab4.appendChild(thTab2);
                trTab4.appendChild(thTab3);
                trTab4.appendChild(thTab4);
            }
            if(numero === 5) {
                
                var trTab5 = createElement('tr');
                var thTab = createElement('th');
                var thTab2 = createElement('th');
                var thTab3 = createElement('th');
                var thTab4 = createElement('th');
                var thTab5 = createElement('th');

                trTab5.appendChild(thTab);
                trTab5.appendChild(thTab2);
                trTab5.appendChild(thTab3);
                trTab5.appendChild(thTab4);
                trTab5.appendChild(thTab5);
            }
            if(numero === 6) {
                
                var trTab6 = createElement('tr');
                var thTab = createElement('th');
                var thTab2 = createElement('th');
                var thTab3 = createElement('th');
                var thTab4 = createElement('th');
                var thTab5 = createElement('th');
                var thTab6 = createElement('th');

                trTab6.appendChild(thTab);
                trTab6.appendChild(thTab2);
                trTab6.appendChild(thTab3);
                trTab6.appendChild(thTab4);
                trTab6.appendChild(thTab5);
                trTab6.appendChild(thTab6);
            }
            if(numero === 7) {
                
                var trTab7 = createElement('tr');
                var thTab = createElement('th');
                var thTab2 = createElement('th');
                var thTab3 = createElement('th');
                var thTab4 = createElement('th');
                var thTab5 = createElement('th');
                var thTab6 = createElement('th');
                var thTab7 = createElement('th');

                trTab7.appendChild(thTab);
                trTab7.appendChild(thTab2);
                trTab7.appendChild(thTab3);
                trTab7.appendChild(thTab4);
                trTab7.appendChild(thTab5);
                trTab7.appendChild(thTab6);
                trTab7.appendChild(thTab7);
            }
            if(numero === 8) {
                
                var trTab8 = createElement('tr');
                var thTab = createElement('th');
                var thTab2 = createElement('th');
                var thTab3 = createElement('th');
                var thTab4 = createElement('th');
                var thTab5 = createElement('th');
                var thTab6 = createElement('th');
                var thTab7 = createElement('th');
                var thTab8 = createElement('th');
               
                trTab8.appendChild(thTab);
                trTab8.appendChild(thTab2);
                trTab8.appendChild(thTab3);
                trTab8.appendChild(thTab4);
                trTab8.appendChild(thTab5);
                trTab8.appendChild(thTab6);
                trTab8.appendChild(thTab7);
                trTab8.appendChild(thTab8);
            }
            if(numero === 9) {
 
                var trTab9 = createElement('tr');
                var thTab = createElement('th');
                var thTab2 = createElement('th');
                var thTab3 = createElement('th');
                var thTab4 = createElement('th');
                var thTab5 = createElement('th');
                var thTab6 = createElement('th');
                var thTab7 = createElement('th');
                var thTab8 = createElement('th');
                var thTab9 = createElement('th');

                trTab9.appendChild(thTab);
                trTab9.appendChild(thTab2);
                trTab9.appendChild(thTab3);
                trTab9.appendChild(thTab4);
                trTab9.appendChild(thTab5);
                trTab9.appendChild(thTab6);
                trTab9.appendChild(thTab7);
                trTab9.appendChild(thTab8);
                trTab9.appendChild(thTab9);
            }
            if(numero === 10) {
                
                var trTab10 = createElement('tr');
                var thTab = createElement('th');
                var thTab2 = createElement('th');
                var thTab3 = createElement('th');
                var thTab4 = createElement('th');
                var thTab5 = createElement('th');
                var thTab6 = createElement('th');
                var thTab7 = createElement('th');
                var thTab8 = createElement('th');
                var thTab9 = createElement('th');
                var thTab10 = createElement('th');

                trTab10.appendChild(thTab);
                trTab10.appendChild(thTab2);
                trTab10.appendChild(thTab3);
                trTab10.appendChild(thTab4);
                trTab10.appendChild(thTab5);
                trTab10.appendChild(thTab6);
                trTab10.appendChild(thTab7);
                trTab10.appendChild(thTab8);
                trTab10.appendChild(thTab9);
                trTab10.appendChild(thTab10);
            }
           
          }
          nColunas(colunaTab);
    }
}

function adicional() {

    let pedido2 = prompt('Deseja mais alguma coisa?');
    texto(pedido2);
    mudaFundo(pedido2);
    addImg(pedido2);
    fazBotao(pedido2);
    criaCanvas(pedido2);
    criaTabela(pedido2);
    if (pedido2 === especificação.afirmacoes[0]
        || pedido2 === especificação.afirmacoes[3]
        || pedido2 === especificação.afirmacoes[5]) {
        
        let pedido3 = prompt('O que você deseja?');
        texto(pedido3);
        mudaFundo(pedido3);
        addImg(pedido3);
        fazBotao(pedido3);
        criaCanvas(pedido3);
        criaTabela(pedido3);

        while(pedido2 === especificação.afirmacoes[0]
            || pedido2 === especificação.afirmacoes[3]
            || pedido2 === especificação.afirmacoes[5]){
    
                adicional();
                pedido2--;
            }
       }
}


mudaFundo(pedido);
texto(pedido);
addImg(pedido);
fazBotao(pedido);
criaCanvas(pedido);
criaTabela(pedido);
adicional();


