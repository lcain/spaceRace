var lifeCalculator = function(){
  var livesRemaining = 0;
  for (var i = 0; i < app.lives.children.length; i++){
    if (app.lives.children[i].alive){
      livesRemaining+=1;
    }
  }
  return livesRemaining;
}

// Temporary mute

var isMuted = true;
$(document).ready(function(){

  $('body').on('click','.toggleSound',function(){

    if (isMuted === true){
      $('.toggleSound').removeClass("userButtonDisable")
      Howler.unmute();
      isMuted = false;
    } else {
      $('.toggleSound').addClass("userButtonDisable")
      Howler.mute();
      isMuted = true;
    }
  })
});

var showStats = true;
$(document).ready(function(){

  $('body').on('click','.toggleStats',function(){

    if (showStats === true){
      $('.toggleStats').removeClass("userButtonDisable")
      $('.statsWindow').removeClass("hidden")
      showStats = false;

    } else {
      $('.toggleStats').addClass("userButtonDisable")
      $('.statsWindow').addClass("hidden")
      showStats = true;
    }
  })
});

$(document).ready(function(){
      // --------
        // DIAGNOSTIC WINDOW TEXT.
    setInterval(function(){
     $('.statsWindow').html(
      "Aliens alive: "+app.aliens.countLiving()+
      " Aliens dead: "+app.aliens.countDead()+"</br>"+
      "Level counter: "+app.levelCounter+
      " Total kills: "+app.totalKillCount
      )
   }, 500)
})

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

//----------------------------------------------------------
// DYNAMIC GENERATION TESTING
//----------------------------------------------------------


app.time = 10000



// callTimer( seekerAlien, levelEightSeeker, 150, _.random(-150, 150) );

app.callTimer = function(type, graphic, num, X, Y){

  var count = 0;
  var waveInterval = setInterval(function(type){

    if(type === 'seekerAlien'){

     app.createSeeker( X, Y, type)
 
    } else if (type === 'shooterAlien') {

     app.createAlienShooter(X,Y)

    } else if (type === 'missileAlien') {

     app.createAlienMissileShip(X,Y)

    } else if (type === 'shotgunAlien') {

     app.createAlienShotgunner(X,Y)

    }



  }, app.time)

if ( count === num ){
  clearInterval(waveInterval);
}

}

// //----------------------------------------------------------
// // DYNAMIC ALIEN GENERATION
// //----------------------------------------------------------

// var generate = 
