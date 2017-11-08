$('#shifumi').click(function(){
  //On choisis unvaleur aléatoire lorsque l'on clique sur le bouton Shifumi !
  var random = Math.floor((Math.random() * 3) + 1);
  //Suivant la valeur aléatoire obtenue, on modifis le contenu du paragraphe, ayant l'id #text, avec le contenu de la valeur aléatoire
  if(random == 1){
    $('#random').text('Pierres');
  }
  else if(random == 2){
    $('#random').text('Feuille');
  }
  else {
    $('#random').text('Ciseau');
  }
});

//Lorsque l'on clique sur l'un des éléments de la liste, il s'ajoute adns le paragraphe ayant pour id #player
$('#pierres').click(function(){
  $('#player').text('Pierres');
});
$('#feuille').click(function(){
  $('#player').text('Feuille');
});
$('#ciseau').click(function(){
  $('#player').text('Ciseau');
});

//On déclare les variables correspondant aux victoires du PC et aux victoires du joueur
var victoryPlayer = 0;
var victoryPC = 0;
//Lorsque l'on clique, on détermine qui, du joueur ou de l'ordinateur gagne
$('#ok').click(function() {
  //On définit des variales ayant pour valeur le contenu du paragraphe de l'id #random et de l'id #player
  var random = $('#random').text();
  var player = $('#player').text();
  //On détermine ce qui se passe lorsque le joueur et l'ordinateur on la même réponse
  if(random == player){
    alert("Pas de victoire cette fois-ci !");
  }
  //On détermine dans quels conditions le joueur gagne
  else if ((random == "Pierres" && player == "Feuille") || (random == "Feuille" && player == "Ciseau") || (random == "Ciseau" && player == "Pierres")) {
  //Lorsque le joueur gagne, un mesage s'affiche et un compteur de victoire s'affiche
  alert('C\'est une victoire du joueur !');
  victoryPlayer++;
  $('#victoryPlayer').text('Voila le nombre de victoire du joueur -> ' + victoryPlayer);
  }

  else{
    //Idem que pour le joueur
    alert('C\'est une victoire du PC !')
    victoryPC++;
    $('#victoryPC').text('Voila le nombre de victoire du PC -> ' + victoryPC);
  }
});
