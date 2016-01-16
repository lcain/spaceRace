var lifeCalculator = function(){
  var livesRemaining = 0;
  for (var i = 0; i < app.lives.children.length; i++){
    if (app.lives.children[i].alive){
      livesRemaining+=1;
    }
  }
  return livesRemaining;
}


var isMuted = false;
$(document).ready(function(){
  $('body').on('click','.toggleSound',function(){

    if (isMuted === true){
      $('.toggleSound').removeClass("muted")
      Howler.unmute();
      isMuted = false;
    } else {
      $('.toggleSound').addClass("muted")
      Howler.mute();
      isMuted = true;
    }
  })
});


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

