/*
Sons usados no game podem ser encontrados nos seguintes links:

https://play.google.com/store/apps/details?id=com.tianxingjian.supersound

https://play.google.com/store/apps/details?id=net.zedge.android
*/

//Link youtube Codigo explicado: https://youtu.be/GzPqzg99oHM

/*
Variaveis gerais do jogo
*/
let texto =" ";
let nome= prompt(" Digite Seu Nome !!");
let quest=1;
let music1=1;
let music2=1;
let music3=1;
let music4=1;
let music5=1;
let music6=1;
let menux = 220;
let menuy = 170;
let opcao = 1;
let menuop = 0;
let cont = 10;
let img1,img2,img3,img4,img5,img6,img7,img8,img9,img10;
let img11;
let snd,snd1,snd2,snd3,snd4,snd5;
var c;
var esc = 30;
var comida;
var cor;
tela = 600;
let timeS;

function preload() {
  soundFormats('mp3');
  snd = createAudio("som1.mp3")
  snd1 = createAudio("som2.mp3")
  snd2 = createAudio("som3.mp3")
  snd3 = createAudio("som4.mp3")
  snd4 = createAudio("youwin.mp3")
  snd5 = createAudio("som6.mp3")
  
  img1 = loadImage('1.jpeg');
  img2 = loadImage('2.jpeg');
  img3 = loadImage('3.jpg');
  img4 = loadImage('nave1.jpg');
  img5 = loadImage('4.jpg')
  img6 = loadImage('menu.png')
  img7 = loadImage('tut1.jpg')
  img8 = loadImage('tut2.jpg')
  img9 = loadImage('tut3.jpg')
  img10 = loadImage('tut4.jpg')
  img11 = loadImage('tut5.jpg')
 
}

/* Mensagens de Começo de jogo
 */
alert(nome+" Use as teclas para 🔼 e para 🔽 e Enter ✅!!")


function setup() {
  createCanvas(600, 600);
  inicio();
  
}

function draw() {
  background(0, 206, 209);

  if (menuop == 0) {
    menu();
  }
  if (menuop == 1) {
    fase1();
  }
  if (menuop == 2) {
    tutorial();
  }
  if (menuop == 3) {
    recorde();
  }
  if (menuop == 4) {
    creditos();
  }
  if (menuop == 5) {

    fim();
  }

}

function menu() {
  image(img6, 0, 0, 600, 600);
  fill(255, 255, 230)
  rect(menux-120, 38, 440, 60);
  rect(menux, menuy, 140, 50, 60)

  fill(0)
  textSize(50)
  textFont("Georgia");
  text("Resgate Matemático", menux-100, 80);
  textSize(30)
  textFont("Serif");
  text("Jogar", menux + 20, 200);
  text("Tutorial", menux + 20, 250);
  text("Recorde", menux + 20, 300);
  text("Creditos", menux + 20, 350);

  if(music1===1){
    snd1.pause();
    snd.loop();
    snd.volume(0.5)
    music1 = 0;
    music2 = 1;
  }
}



function inicio() {
  createCanvas(600, 600);
  background(51);
  c = new cobra();
  frameRate(10);
  localiza();
}

function fase1() {
  image(img5, 0, 0,600, 600);
  if (c.comer(com)) {
    localiza();
  }
  time();
  c.morrer();
  c.atualizar();
  c.iniciar();
  console.log("SCORE: "+c.score);
 
  rect(com.x, com.y, esc, esc);
  
if(music2===1){
    snd.pause();
    snd1.loop();
    snd1.volume(0.25)
    music1 = 1;
    music2 = 0;
  }
}

function localiza() {
  var linha = floor(tela / esc);
  var coluna = floor(tela / esc);
  com = createVector(floor(random(linha)), floor(random(coluna)));
  com.mult(esc);

  for (var i = 0; i < c.cauda.length; i++) {
    var pos = c.cauda[i];
    var d = dist(com.x, com.y, pos.x, pos.y);
    if (d < 1) {
      localiza();
    }
  }
}


function fim() {
  background(100,149,237)
  fill(0);
  textFont("Arial")
  textSize(36);
  text("Fim de Jogo, Meus Parabéns!", 60, 60);
  textFont("Georgia")
  textSize(20)
  text("Use os 🔢 do  ⌨️ para responder!!",40,120);
  text("Use a tecla Backspace 🔙 para corrigir!!",40, 160);
  text("Use a tecla  Enter para Responder 💾!!",40, 200);

  fill(255);
  textFont("Georgia");
  textSize(18);
  fill(0);
  textFont("Serif");
  textSize(30);
  text("Quantos você recuperou? ", 140, 280);
  textSize(80);
  fill(0);
  text(texto, 240, 360);
  
  textSize(30);
  text(" 🔽 Conte quantos voce recuperou  🔽 ", 60, 400);
  
  fill(255,255,0);
   for(var i=0;i<c.score;i++)  {
     square(30+(i*50), 440, 40);
  }

}

function cobra() {
  cx = 0;
  cy = 0;
  xvel = 1;
  yvel = 0;
  this.total = 0;
  this.cauda = [];
  this.score = 1;
  this.highscore = 1;

  this.dir = function(x, y) {
    xvel = x;
    yvel = y;
  }

  this.comer = function(pos) {
    var d = dist(cx, cy, pos.x, pos.y);
    if (d < 1) {
      this.total++;
      this.score++;
  if(music3===1){
    snd2.play();
    snd.volume(0.5)  
  }
      text(this.score, 70, 625);
      if (this.score > this.highscore) {
        this.highscore = this.score;
      }
      
      text(this.highscore, 540, 625);
      return true;
    } else {
      return false;
    }
  }

  this.morrer = function() {
    for (var i = 0; i < this.cauda.length; i++) {
      var pos = this.cauda[i];
      var d = dist(cx, cy, pos.x, pos.y);
      if (d < 1) {
          if(music4===1){
            snd3.play();
            snd.volume(0.5)  
            }
        this.total = 0;
        this.cauda = [];
        menuop = 5;
        cont=0;
      } else {
        if (timeS == 15) {
          this.total = 0;
          this.cauda = [];
          menuop = 5;
          cont=0;
        }
      }
    }
  }

  this.atualizar = function() {
    if (this.total === this.cauda.length) {
      for (var i = 0; i < this.cauda.length - 1; i++) {
        this.cauda[i] = this.cauda[i + 1];
      }

    }
    this.cauda[this.total - 1] = createVector(cx, cy);

    cx = cx + xvel  * esc ;
    cy = cy + yvel  * esc ;

    cx = constrain(cx, 0, tela - esc);
    cy = constrain(cy, 0, tela - esc);


  }
  this.iniciar = function() {
    fill(255, 255, 0);
    for (var i = 0; i < this.cauda.length; i++) {
      rect(this.cauda[i].x, this.cauda[i].y, esc, esc);
    }
    image(img4,cx,cy,esc,esc);
    //rect(cx, cy, esc, esc);
  }

  function keyPressed1() {
    if (keyCode === UP_ARROW) {
      c.dir(0, -1);
    } else if (keyCode === DOWN_ARROW) {
      c.dir(0, 1);
    } else if (keyCode === RIGHT_ARROW) {
      c.dir(1, 0);
    } else if (keyCode === LEFT_ARROW) {
      c.dir(-1, 0);
    }
  }
}

/*Temporizador do jogo*/
function time() {
  if(menuop == 1) {
    cont = cont + 1;
    timeS = parseInt(cont / 10)
  }
  if(menuop == 0) {
    cont = 0;
    timeS = 0;
    console.log("FIM")
  }
  fill(255);
  textSize(20)
  text("Tempo: " + timeS, 490, 20);
}

function tutorial() {
   fill(255, 255, 230);
  rect(180, 18, 210, 60, 80);
  fill(0);
  textSize(40);
  text("Tutorial", 200, 60);
  fill(255, 255, 230)
  rect(50, 100, 500, 400);
  let tut1, tut2, tut3, tut4,tut5, tut6,tut7,tut8,tut9;
  tut1 = "Olá Seja Bem-vindo ao Resgate Matematico nele você "
  tut2 = " coletará pelo universo objetos que foram perdidos. usando a nave  "
  tut3 = " espacial use  as teclas ⬅️ ➡️ ⬆️ ⬇️  para mover a nave pelo \n"
  tut4 = "universo. A qualquer momento precione ESC para volta ↩️."
  tut5 ="Você terá 15 segundos para resgatar o maximo possivel de "
  tut6 = "objetos. Após Resgatar conte quando Objetos você conseguiu!!"
  tut7 = "(EF01MA03) Estimar e comparar quantidades de objetos "
  tut8 = "(EF01MA02) Contar de maneira exata ou aproximada"
  tut9="Gameplay Youtube: https://youtu.be/7RK10rddjKA"
  
  fill(0);
  textSize(16);
  text(tut1, 100, 120);
  text(tut2, 60, 140);
  text(tut3, 60, 160);
  text(tut4, 60, 180);
  text(tut5, 100, 200);
  text(tut6, 60, 220);
  text(tut9, 100, 250);
  textSize(12);
  textFont("Arial")
  text(tut7, 100, 270);
  text(tut8, 100, 290);
  
  image(img7, 60, 300, 90, 90);
  image(img8, 200, 300, 90, 90);
  image(img9, 60, 400, 90, 90);
  image(img10, 200, 400, 90, 90);
  image(img11, 320, 300, 200, 190);
  
}
function verificarResposta(resposta) {
    if(resposta==c.score){
      if(music5===1){
            snd4.play();
            snd.volume(0.5)  
            }
      alert("acertou");
      texto= "você Acertou"
      alert("Recorde: "+c.highscore);
      this.total = 0;
      c.score =0;
      menuop = 0;

    }else{
         if(music6===1){
            snd5.play();
            snd.volume(0.5)  
            }
      alert("Errou, O valor correto era ➡️ "+c.score);
      this.total = 0;
      c.score =0;
      menuop = 0;
      
    }
}

function recorde() {
  fill(255, 255, 230)
  rect(140, 8, 400, 60, 80);
  fill(0)
  textSize(50)
  text("Melhor Pontuação", 160, 50);
  fill(255, 255, 230)
  rect(90, 100, 400, 380,20);
  fill(0)
  textSize(25)
  text("Recorde Atual", 180, 140);
  textFont("Serif")
  textSize(34)
  text("[ 1:  "+nome+" ]"+"    ➡️     "+c.highscore, 140, 240);
}

function creditos() {
  fill(255, 255, 230)
  rect(190, 18, 210, 60, 60);
  fill(0);
  textSize(50)
  text("creditos", 210, 60);
  fill(255, 255, 230);
  rect(70, 100, 400, 380);

  let t1, t2, t3;
  t1 = "Jogo desenvolvido por @Jose felix\n"
  t2 = "para auxiliar em aula da professora @Lilia Ferreira"
  t3 = "Orientador professor @Aquiles Burlamaque"

  fill(0);
  textSize(14);
  text(t1, 100, 140);
  text(t2, 100, 260);
  text(t3, 100, 380)
  image(img1, 160, 400, 70, 70);
  image(img2, 160, 280, 70, 70);
  image(img3, 160, 160, 70, 70);

}

  
/*Evento do teclado para Menu*/
function keyPressed() {
  if (menuop == 0 || menuop == 2 || menuop == 3 || menuop == 4) {
    if (key == "ArrowUp" && menuy > 180) {
      menuy = menuy - 50
      opcao = opcao - 1;
      console.log(opcao)
    }
    if (key == "ArrowDown" && menuy < 300) {
      menuy = menuy + 50
      opcao = opcao + 1
      console.log(opcao)
    }
    if (key == "Enter") {
      menuop = opcao
    }
    if (key == "Escape") {
      menuop = 0
    }
  } else {
    if (menuop == 1) {
      if (keyCode === UP_ARROW) {
        c.dir(0, -1);
      } else if (keyCode === DOWN_ARROW) {
        c.dir(0, 1);
      } else if (keyCode === RIGHT_ARROW) {
        c.dir(1, 0);
      } else if (keyCode === LEFT_ARROW) {
        c.dir(-1, 0);
      }
      if (key == "Escape") {
        menuop = 0;
      }
    }else{
    if(menuop === 5 ){
        if(key=="Backspace"){
              texto=" ";
        } else {
          if(key=="Enter") {
              verificarResposta(texto)
                texto=" ";
          }else {
             if(key!="Shift") {
                 texto = texto + parseInt(key);
              }else{ 
                if (key == "Escape") {
                    menuop = 0;
                }
                }
          }
        }
    }
  }

  }
}

function mousePressed() {
  userStartAudio();
}