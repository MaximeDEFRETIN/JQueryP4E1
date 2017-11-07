$('#shifumi').click(function(){
  var random = Math.floor((Math.random() * 3) + 1);
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

$('#pierres').click(function(){
  $('#player').text('Pierres');
});
$('#feuille').click(function(){
  $('#player').text('Feuille');
});
$('#ciseau').click(function(){
  $('#player').text('Ciseau');
});

var victoryPlayer = 0;
var victoryPC = 0;
$('#ok').click(function() {
  var random = $('#random').text();
  var player = $('#player').text();
  if(random == player){
    alert("Pas de victoire cette fois-ci !");
  }
  else if ((random == "Pierres" && player == "Feuille") || (random == "Feuille" && player == "Ciseau") || (random == "Ciseau" && player == "Pierres")) {
  alert('C\'est une victoire du joueur !');
  victoryPlayer++;
  $('#victoryPlayer').text('Voila le nombre de victoire du joueur -> ' + victoryPlayer);
  }
  else{
    alert('C\'est une victoire du PC !')
    victoryPC++;
    $('#victoryPC').text('Voila le nombre de victoire du PC -> ' + victoryPC);
  }
});
