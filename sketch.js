let imagemUnicornio, imagemTrem, imagemFundo;

let unicornio = null;
let listaTrens = [];

let classificadorSonoro = null;

function preload() {
  const opcoes = { probabilityThreshold: 0.95 };
  classificadorSonoro = ml5.soundClassifier('SpeechCommands18w', opcoes);
  
  imagemUnicornio = loadImage('unicornio.png');
  imagemTrem = loadImage('trem.png');
  imagemFundo = loadImage('fundo.jpg');
}

function setup() {
  createCanvas(800, 450);
  
  unicornio = new Unicornio();
  
  classificadorSonoro.classify(obterComando);
}

function obterComando(erro, resultados) {
  if (erro) {
    console.error(erro);
  }
  
  console.log(resultados[0].label, resultados[0].confidence)
  if (resultados[0].label == 'up') {
    unicornio.pular();
  }
}

function mousePressed() {
  listaTrens.push(new Trem());
}

function keyPressed() {
  if (key == ' ') {
    unicornio.pular();
  }
}

function draw() {
  // if (random(1) < 0.005) {
  //   listaTrens.push(new Trem());
  // }
  
  background(imagemFundo);
  
  for (let trem of listaTrens) {
    trem.mover();
    trem.exibir();
    
    if (unicornio.colisao(trem)) {
      console.log('game over...');
      noLoop();
    }
  }
  
  unicornio.exibir();
  unicornio.mover();
}