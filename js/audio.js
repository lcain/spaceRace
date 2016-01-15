


var playSound = function(play){
  switch (play){
    case "playerShot":
    return 'assets/audio/playerShot.wav'

    case "playerHit":
    return 'assets/audio/playerHit.wav'

    case "enemyHit":
    return 'assets/audio/enemyHit.wav'

    case "gameOver":
    return 'assets/audio/gameOver.wav'
  }

}

var soundCall = new Howl({})

