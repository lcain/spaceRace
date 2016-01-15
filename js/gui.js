var lifeCalculator = function(){
  var livesRemaining = 0;
  for (var i = 0; i < app.lives.children.length; i++){
    if (app.lives.children[i].alive){
      livesRemaining+=1;
    }
  }
  return livesRemaining;
}
//----------------------------------------------------------
// LEVEL STYLE MODIFIERS
//----------------------------------------------------------

var gameLevelFontColor = function(){
  if (app.levelCounter < 5){
      return '#000'
  } else { return '#fff'}
}

var gameLevelFontSelect = function(){
  if (app.levelCounter < 5){
      return '"Courier new"'
  } else { return 'Georgia'}
}