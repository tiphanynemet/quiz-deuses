var total = 0;
var current = 0;

function restart() {
  $("#result").slideUp("fast");
  $("#process").text("Você é inteligente?");
  $("#choice1").text("1. Claro");
  $("#choice2").text("2. Um pouco");
  $("#choice3").text("3. Não");
  $("#choice4").text("4. Nenhuma das opções");
  $("li").show();
  $("#picture img:last-child").remove();
  $('#quote').empty();
  $("#questionDisplay").show();
  $("#sub").show();
  $("#questionNumber").text("1/3").show();
  current = 0;
  total = 0;
}

function restartButtons() {
  $("#choice2").hide();
  $("#choice1").hide();
  $("#choice3").hide()
  $("#choice4").hide();
}

function character(total) {
  switch (total) {
    case 111:
      $("#process").text("Você é  Rá-atum");
      $('#picture').prepend('<img id="ratum" src=pictures/ratum.png />')
      $('#quote').prepend('Principal deus egípcio, Rá é o responsável pela criação do mundo e representa o Sol.')
      break;
    case 444:
      $("#process").text("Você é  Rá-atum");
      $('#picture').prepend('<img id="ratum" src=pictures/ratum.png />')
      $('#quote').prepend('Principal deus egípcio, Rá é o responsável pela criação do mundo e representa o Sol.')
      break;
    case 211:
      $("#process").text("Você é  Anúbis");
      $('#picture').prepend('<img id="anubis" src=pictures/anubis.png />')
      $('#quote').prepend("Anúbis era a divindade egípcia considerada o deus dos mortos e o responsável por guiá-los no além.")
      break;
      case 214:
      $("#process").text("Você é  Anúbis");
      $('#picture').prepend('<img id="anubis" src=pictures/anubis.png />')
      $('#quote').prepend("Anúbis era a divindade egípcia considerada o deus dos mortos e o responsável por guiá-los no além.")
      break;
      case 142:
      $("#process").text("Você é  Anúbis");
      $('#picture').prepend('<img id="anubis" src=pictures/anubis.png />')
      $('#quote').prepend("Anúbis era a divindade egípcia considerada o deus dos mortos e o responsável por guiá-los no além.")
      break;
    case 411:
      $("#process").text("Você é  Anúbis");
      $('#picture').prepend('<img id="anubis" src=pictures/anubis.png />')
      $('#quote').prepend("Anúbis era a divindade egípcia considerada o deus dos mortos e o responsável por guiá-los no além.")
      break;
    case 311:
      $("#process").text("Você é  Bastet");
      $('#picture').prepend('<img id="bastet" src=pictures/bastet.png />')
      $('#quote').prepend('A deusa egípcia da fertilidade, da reprodução, da música, da dança e do amor.')
      break;
    case 121:
      $("#process").text("Você é Thoth");
      $('#picture').prepend('<img id="cromulons" src=pictures/thoth.png />')
      $('#quote').prepend('É o deus da Lua, da sabedoria e da cura. É o patrono dos escribas e trouxe os hieróglifos ao Egito.')
      break;
      case 144:
      $("#process").text("Você é Thoth");
      $('#picture').prepend('<img id="cromulons" src=pictures/thoth.png />')
      $('#quote').prepend('É o deus da Lua, da sabedoria e da cura. É o patrono dos escribas e trouxe os hieróglifos ao Egito.')
      break
      case 314:
      $("#process").text("Você é Thoth");
      $('#picture').prepend('<img id="cromulons" src=pictures/thoth.png />')
      $('#quote').prepend('É o deus da Lua, da sabedoria e da cura. É o patrono dos escribas e trouxe os hieróglifos ao Egito.')
      break;
    case 141:
      $("#process").text("Você é Thoth");
      $('#picture').prepend('<img id="cromulons" src=pictures/thoth.png />')
      $('#quote').prepend('É o deus da Lua, da sabedoria e da cura. É o patrono dos escribas e trouxe os hieróglifos ao Egito.')
      break;      
    case 221:
      $("#process").text("Você é Sekhmeth");
      $('#picture').prepend('<img id="summer" src=pictures/sekhmeth.jpg />')
      $('#quote').prepend('É a deusa da vingança, da guerra e medicina do Antigo Egito.')
      break;
    case 441:
      $("#process").text("Você é Sekhmeth");
      $('#picture').prepend('<img id="summer" src=pictures/sekhmeth.jpg />')
      $('#quote').prepend('É a deusa da vingança, da guerra e medicina do Antigo Egito.')
      break;
    case 321:
      $("#process").text("Você é Hórus");
      $('#picture').prepend('<img id="jerry" src=pictures/horus.png />')  
      $('#quote').prepend("Filho de Osíris e Ísis, tem cabeça de falcão e é o protetor dos faraós e das famílias.")
      break;
    case 421:
      $("#process").text("Você é Hórus");
      $('#picture').prepend('<img id="jerry" src=pictures/horus.png />')  
      $('#quote').prepend("Filho de Osíris e Ísis, tem cabeça de falcão e é o protetor dos faraós e das famílias.")
      break;      
    case 131:
      $("#process").text("Você é Hathot");
      $('#picture').prepend('<img id="maSha" src=pictures/hathor.png />')  
      $('#quote').prepend('A deusa guardiã das mulheres (especialmente as grávidas) e protetora dos amantes.')
      break;
    case 141:
      $("#process").text("Você é Hathot");
      $('#picture').prepend('<img id="maSha" src=pictures/hathor.png />')  
      $('#quote').prepend('A deusa guardiã das mulheres (especialmente as grávidas) e protetora dos amantes.')
      break;      
    case 231:
      $("#process").text("Você é Osíris");
      $('#picture').prepend('<img id="beth" src=pictures/osiris.png />')  
      $('#quote').prepend('Deus do julgamento, do além e da vegetação, sendo um dos mais importantes da mitologia egípcia.')
      break;
    case 241:
      $("#process").text("Você é Osíris");
      $('#picture').prepend('<img id="beth" src=pictures/osiris.png />')  
      $('#quote').prepend('Deus do julgamento, do além e da vegetação, sendo um dos mais importantes da mitologia egípcia.')
      break;
      case 234:
      $("#process").text("Você é Osíris");
      $('#picture').prepend('<img id="beth" src=pictures/osiris.png />')  
      $('#quote').prepend('Deus do julgamento, do além e da vegetação, sendo um dos mais importantes da mitologia egípcia.')
      break;
      case 243:
      $("#process").text("Você é Osíris");
      $('#picture').prepend('<img id="beth" src=pictures/osiris.png />')  
      $('#quote').prepend('Deus do julgamento, do além e da vegetação, sendo um dos mais importantes da mitologia egípcia.')
      break;
    case 331:
      $("#process").text("Você é Nephthys");
      $('#picture').prepend('<img id="jaguar" src=pictures/nephthys.png />') 
      $('#quote').prepend('Deusa associada ao culto dos mortos e mostrada às vezes como uma mulher ao lado de sarcófagos.')
      break;
    case 431:
      $("#process").text("Você é Nephthys");
      $('#picture').prepend('<img id="jaguar" src=pictures/nephthys.png />') 
      $('#quote').prepend('Deusa associada ao culto dos mortos e mostrada às vezes como uma mulher ao lado de sarcófagos.')
     break;
    case 112:
      $("#process").text("Você é Seth");
      $('#picture').prepend('<img id="bird" src=pictures/set.png />') 
      $('#quote').prepend('É o deus egípcio do caos, da seca, da guerra, o senhor da terra vermelha.')
      break;
    case 412:
      $("#process").text("Você é Seth");
      $('#picture').prepend('<img id="bird" src=pictures/set.png />') 
      $('#quote').prepend('É o deus egípcio do caos, da seca, da guerra, o senhor da terra vermelha.')
      break;
    case 442:
      $("#process").text("Você é Seth");
      $('#picture').prepend('<img id="bird" src=pictures/set.png />') 
      $('#quote').prepend('É o deus egípcio do caos, da seca, da guerra, o senhor da terra vermelha.')
      break;
    case 212:
      $("#process").text("Você é Ísis");
      $('#picture').prepend('<img id="parasites" src=pictures/isis.png />') 
      $('#quote').prepend("Dona de poderes mágicos, protetora e piedosa, a irmã-esposa de Osíris.")
      break;
    case 413:
      $("#process").text("Você é Ísis");
      $('#picture').prepend('<img id="parasites" src=pictures/isis.png />') 
      $('#quote').prepend("Dona de poderes mágicos, protetora e piedosa, a irmã-esposa de Osíris.")
     break;
    case 312:
      $("#process").text("Você é  Rá-atum");
      $('#picture').prepend('<img id="ratum" src=pictures/ratum.png />')
      $('#quote').prepend('Principal deus egípcio, Rá é o responsável pela criação do mundo e representa o Sol.')
      break;
      case 423:
      $("#process").text("Você é  Rá-atum");
      $('#picture').prepend('<img id="ratum" src=pictures/ratum.png />')
      $('#quote').prepend('Principal deus egípcio, Rá é o responsável pela criação do mundo e representa o Sol.')
      break;
    case 432:
      $("#process").text("Você é  Rá-atum");
      $('#picture').prepend('<img id="ratum" src=pictures/ratum.png />')
      $('#quote').prepend('Principal deus egípcio, Rá é o responsável pela criação do mundo e representa o Sol.')
      break;
    case 122:
      $("#process").text("Você é  Anúbis");
      $('#picture').prepend('<img id="anubis" src=pictures/anubis.png />')
      $('#quote').prepend("Anúbis era a divindade egípcia considerada o deus dos mortos e o responsável por guiá-los no além.")
      break;
    case 422:
      $("#process").text("Você é  Anúbis");
      $('#picture').prepend('<img id="anubis" src=pictures/anubis.png />')
      $('#quote').prepend("Anúbis era a divindade egípcia considerada o deus dos mortos e o responsável por guiá-los no além.")
    break;
    case 222:
      $("#process").text("Você é  Bastet");
      $('#picture').prepend('<img id="bastet" src=pictures/bastet.png />')
      $('#quote').prepend('A deusa egípcia da fertilidade, da reprodução, da música, da dança e do amor.')
      break;
    case 322:
      $("#process").text("Você é  Bastet");
      $('#picture').prepend('<img id="bastet" src=pictures/bastet.png />')
      $('#quote').prepend('A deusa egípcia da fertilidade, da reprodução, da música, da dança e do amor.')
      break;
      case 433:
      $("#process").text("Você é  Bastet");
      $('#picture').prepend('<img id="bastet" src=pictures/bastet.png />')
      $('#quote').prepend('A deusa egípcia da fertilidade, da reprodução, da música, da dança e do amor.')
      break;
    case 132:
      $("#process").text("Você é Thoth");
      $('#picture').prepend('<img id="cromulons" src=pictures/thoth.png />')
      $('#quote').prepend('É o deus da Lua, da sabedoria e da cura. É o patrono dos escribas e trouxe os hieróglifos ao Egito.')
      break;
    case 232:
      $("#process").text("Você é Sekhmeth");
      $('#picture').prepend('<img id="summer" src=pictures/sekhmeth.jpg />')
      $('#quote').prepend('É a deusa da vingança, da guerra e medicina do Antigo Egito.')
      break;
      case 143:
      $("#process").text("Você é Sekhmeth");
      $('#picture').prepend('<img id="summer" src=pictures/sekhmeth.jpg />')
      $('#quote').prepend('É a deusa da vingança, da guerra e medicina do Antigo Egito.')
      break;
    case 332:
      $("#process").text("Você é Sekhmeth");
      $('#picture').prepend('<img id="summer" src=pictures/sekhmeth.jpg />')
      $('#quote').prepend('É a deusa da vingança, da guerra e medicina do Antigo Egito.')
      break;
    case 443:
      $("#process").text("Você é Sekhmeth");
      $('#picture').prepend('<img id="summer" src=pictures/sekhmeth.jpg />')
      $('#quote').prepend('É a deusa da vingança, da guerra e medicina do Antigo Egito.')
    break;
    case 113:
      $("#process").text("Você é Hórus");
      $('#picture').prepend('<img id="jerry" src=pictures/horus.png />')  
      $('#quote').prepend("Filho de Osíris e Ísis, tem cabeça de falcão e é o protetor dos faraós e das famílias.")
      break;
    case 213:
      $("#process").text("Você é Osíris");
      $('#picture').prepend('<img id="beth" src=pictures/osiris.png />')  
      $('#quote').prepend('Deus do julgamento, do além e da vegetação, sendo um dos mais importantes da mitologia egípcia.')
      break;
    case 313:
      $("#process").text("Você é Nephthys");
      $('#picture').prepend('<img id="jaguar" src=pictures/nephthys.png />') 
      $('#quote').prepend('Deusa associada ao culto dos mortos e mostrada às vezes como uma mulher ao lado de sarcófagos.')
      break;
    case 123:
      $("#process").text("Você é Seth");
      $('#picture').prepend('<img id="bird" src=pictures/set.png />') 
      $('#quote').prepend('É o deus egípcio do caos, da seca, da guerra, o senhor da terra vermelha.')
      break;
      case 343:
      $("#process").text("Você é Seth");
      $('#picture').prepend('<img id="bird" src=pictures/set.png />') 
      $('#quote').prepend('É o deus egípcio do caos, da seca, da guerra, o senhor da terra vermelha.')
      break
    case 223:
      $("#process").text("Você é  Rá-atum");
      $('#picture').prepend('<img id="ratum" src=pictures/ratum.png />')
      $('#quote').prepend('Principal deus egípcio, Rá é o responsável pela criação do mundo e representa o Sol.')
      break;
    case 323:
      $("#process").text("Você é Ísis");
      $('#picture').prepend('<img id="parasites" src=pictures/isis.png />') 
      $('#quote').prepend("Dona de poderes mágicos, protetora e piedosa, a irmã-esposa de Osíris.")
      break;
    case 133:
      $("#process").text("Você é Nephthys");
      $('#picture').prepend('<img id="jaguar" src=pictures/nephthys.png />') 
      $('#quote').prepend('Deusa associada ao culto dos mortos e mostrada às vezes como uma mulher ao lado de sarcófagos.')
      break;
    case 233:
      $("#process").text("Você é  Anúbis");
      $('#picture').prepend('<img id="anubis" src=pictures/anubis.png />')
      $('#quote').prepend("Anúbis era a divindade egípcia considerada o deus dos mortos e o responsável por guiá-los no além.")
      break;
    case 333:
      $("#process").text("Você é Ísis");
      $('#picture').prepend('<img id="parasites" src=pictures/isis.png />') 
      $('#quote').prepend("Dona de poderes mágicos, protetora e piedosa, a irmã-esposa de Osíris.")
      break;
      case 242:
      $("#process").text("Você é Ísis");
      $('#picture').prepend('<img id="parasites" src=pictures/isis.png />') 
      $('#quote').prepend("Dona de poderes mágicos, protetora e piedosa, a irmã-esposa de Osíris.")
      break;
      case 324:
      $("#process").text("Você é Ísis");
      $('#picture').prepend('<img id="parasites" src=pictures/isis.png />') 
      $('#quote').prepend("Dona de poderes mágicos, protetora e piedosa, a irmã-esposa de Osíris.")
      break;
      case 342:
      $("#process").text("Você é  Anúbis");
      $('#picture').prepend('<img id="anubis" src=pictures/anubis.png />')
      $('#quote').prepend("Anúbis era a divindade egípcia considerada o deus dos mortos e o responsável por guiá-los no além.")
      break;
      case 134:
      $("#process").text("Você é Seth");
      $('#picture').prepend('<img id="bird" src=pictures/set.png />') 
      $('#quote').prepend('É o deus egípcio do caos, da seca, da guerra, o senhor da terra vermelha.')
      break
      case 124:
      $("#process").text("Você é Sekhmeth");
      $('#picture').prepend('<img id="summer" src=pictures/sekhmeth.jpg />')
      $('#quote').prepend('É a deusa da vingança, da guerra e medicina do Antigo Egito.')
      break;
  }
}

function changeQuestion(){
  if(current ===0){
    $("#process").text("Você é esperto?");
    $("#choice1").text("1. Claro");
    $("#choice2").text("2. Um pouco");
    $("#choice3").text("3. Não");
    $("#choice4").text("4. Nenhuma das opções");
    $("#questionNumber").text("1/3");
  }
    else if(current===1){
    $("#process").text("Qual palavra te descreve melhor?");
    $("#choice1").text("1. Estranho");
    $("#choice2").text("2.Engraçado");
    $("#choice3").text("3. Legal");
    $("#choice4").text("4. Nenhuma das opções");
    $("#questionNumber").text("2/3");
  }
  else if(current===2){
    $("#process").text("Na escola, você estava mais disposto a...");
    $("#choice1").text("1. Conversar com os amigos");
    $("#choice2").text("2. Dormir");
    $("#choice3").text("3. Estudar");
    $("#choice4").text("4. Nenhuma das opções");
    $("#questionNumber").text("3/3");
  }
  else if(current ===3){
    character(total);
    restartButtons();
    $("#result").slideDown();
    $("#questionDisplay").hide();
    $("#questionNumber").hide();
    $("#sub").hide();
  }

  else if(current === 4){  
    restart();
  }
  else {
    alert("You're done, refresh if you want to play again"); //create a button that restarts the quiz
  }
}

function endQuestion(){
  current += 1;
  changeQuestion();
  console.log(total);
  console.log(current);
}

function resizeBackground() {
  $("#background").height($(window).height());
}

function refreshBackground() {
  x = 0.25;  // 5 Seconds

  $(window).resize(resizeBackground);
  resizeBackground();

  setTimeout(refreshData, x * 1000);
}

$("#choice1").on("click", function(){
  if(current === 0){ //change values so each unique response has different outcomes
    total += 100;
  }
  else if (current === 1){
    total+=10;
  }
  else if(current===2){
    total +=1;
  }

  endQuestion();
})

$("#choice2").on("click", function () {
  if (current === 0) { //change values so each unique response has different outcomes
    total += 200; 
  }
  else if (current === 1) {
    total += 20;
  }
  else if (current === 2) {
    total += 2;
  }

  endQuestion();
})

$("#choice3").on("click", function () {
  if (current === 0) { //change values so each unique response has different outcomes
    total += 300;
  }
  else if (current === 1) {
    total += 30;
  }
  else if (current === 2) {
    total += 3;
  }

  endQuestion();
})

$("#choice4").on("click", function () {
  if (current === 0) { //change values so each unique response has different outcomes
    total += 400;
  }
  else if (current === 1) {
    total += 40;
  }
  else if (current === 2) {
    total += 4;
  }

  endQuestion();
})

$(".buttonChoice").hover(
  function(){$(this).toggleClass('scale-up'), 
  function(){$(this).toggleClass('scale-down')
   }
})

$("#restartButton").on("click", function(){
  restart();
})

refreshBackground();

