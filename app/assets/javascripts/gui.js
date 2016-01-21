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

$(document).ready(function(){$('button').removeClass("btn btn-primary")})

app.$stylise = function(){
  if (app.levelCounter === 1){
    // $('button').removeClass("btn btn-primary")
    $('button, input').css({
      "border" : "1px solid black",
      "background-color" : "rgb(200,200,200)"
    })
  }

  if (app.levelCounter === 4){
    $('.gameWindow').css("border", "3px solid black")
  }

  if (app.levelCounter === 6){
    $('.gameWindow').css("border", "3px solid white")
    $('body').css('background-color', 'black')
    $('button, input').css({
      "border" : "1px solid white",
      "background-color" : "rgb(0,0,0)",
      "color" : "white"
    })
    $('#user_nav, a').css("color", "white")
    $('.scoreText').css('color', 'white')

  }

  if (app.levelCounter === 7){
    $('.gameWindow').css("border", "5px solid blue")
    $('button, input').css({
      "border" : "3px solid blue",
      "background-color" : "rgb(0,0,0)",
      "color" : "yellow",
      "font-weight" : "bold"
    })
    $('#user_nav, a').css("color", "yellow")
    $('.scoreText').css({
      'color' : 'yellow',
      'font-weight' : "bold"
      })
    $('.optionsBar').css('border-top', '3px solid yellow')
  }

  if (app.levelCounter === 8){
    $('.gameWindow').css("border", "3px solid white")
    $('button, input').css({
      "border" : "3px solid blue",
      "background-color" : "rgb(0,0,0)",
      "color" : "yellow",
      "font-weight" : "bold"
    })
    $('#user_nav, a').css("color", "yellow")
    $('.scoreText').css({
      'color' : 'yellow',
      'font-weight' : "bold"
      })
    $('.optionsBar').css('border-top', '3px solid yellow')
    $('body').css({
      "background": " rgba(25,3,53,1)",
      "background": "-moz-linear-gradient(top, rgba(25,3,53,1) 0%, rgba(25,3,53,1) 8%, rgba(27,17,40,1) 23%, rgba(14,3,27,1) 39%, rgba(17,11,25,1) 53%, rgba(16,4,32,1) 65%, rgba(22,14,32,1) 80%, rgba(31,17,50,1) 97%, rgba(31,17,50,1) 100%)",
      "background": "-webkit-linear-gradient(top, rgba(25,3,53,1) 0%, rgba(25,3,53,1) 8%, rgba(27,17,40,1) 23%, rgba(14,3,27,1) 39%, rgba(17,11,25,1) 53%, rgba(16,4,32,1) 65%, rgba(22,14,32,1) 80%, rgba(31,17,50,1) 97%, rgba(31,17,50,1) 100%)",
      "background": "-o-linear-gradient(top, rgba(25,3,53,1) 0%, rgba(25,3,53,1) 8%, rgba(27,17,40,1) 23%, rgba(14,3,27,1) 39%, rgba(17,11,25,1) 53%, rgba(16,4,32,1) 65%, rgba(22,14,32,1) 80%, rgba(31,17,50,1) 97%, rgba(31,17,50,1) 100%)",      "background": "-ms-linear-gradient(top, rgba(51,3,51,1) 0%, rgba(51,3,51,1) 8%, rgba(41,17,41,1) 23%, rgba(26,3,26,1) 39%, rgba(26,11,26,1) 53%, rgba(33,4,33,1) 65%, rgba(33,14,33,1) 80%, rgba(48,16,48,1) 97%, rgba(48,16,48,1) 100%)",
      "background": "-ms-linear-gradient(top, rgba(25,3,53,1) 0%, rgba(25,3,53,1) 8%, rgba(27,17,40,1) 23%, rgba(14,3,27,1) 39%, rgba(17,11,25,1) 53%, rgba(16,4,32,1) 65%, rgba(22,14,32,1) 80%, rgba(31,17,50,1) 97%, rgba(31,17,50,1) 100%)",
      "background": "linear-gradient(to bottom, rgba(25,3,53,1) 0%, rgba(25,3,53,1) 8%, rgba(27,17,40,1) 23%, rgba(14,3,27,1) 39%, rgba(17,11,25,1) 53%, rgba(16,4,32,1) 65%, rgba(22,14,32,1) 80%, rgba(31,17,50,1) 97%, rgba(31,17,50,1) 100%)",
      "filter": "progid:DXImageTransform.Microsoft.gradient( startColorstr='#190335', endColorstr='#1f1132', GradientType=0 )"    })

  }

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
  } else { return 'Impact'}
}


