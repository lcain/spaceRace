// // KANE'S FILE OF WITCHCRAFT AND WIZARDRY. DON'T TOUCH OR I WILL BREAK YOUR FINGERS.


var generateAlien = function(location, type){
      if ( type === "random"|| type === "" || type === undefined ){
        type = _.random(1,4)
      }

    var X;
    var Y;

      if (location === "top"){
        X = _.random(0, 800)
        Y = 0
      } else if (location === "right"){
        X = 800
        Y = _.random(0, 650)
      } else if (location === "bottom"){
        X = _.random(0, 800)
        Y = 650   
      } else if (location === "left"){
        X = 0
        Y = _.random(0, 650)
      } else { X = 400; Y = 0; }

      if(type === 1 && app.game.paused === false ){

       app.createSeeker2( X, Y, "levelNineSeeker")

      } else if (type === 2 && app.game.paused === false ) {

       app.createAlienShooter2(X , Y, "levelTenBasicAlien")

      } else if (type === 3 && app.game.paused === false ) {

       app.createAlienMissileShip2(X,Y, "AlienMissileShip")

      } else if (type === 4 && app.game.paused === false ) {
       app.createAlienShotgunner2(X,Y, "levelTenShotgunShip")

      }

}

var waveSpawn = function(num, spawnLocation, type){

  if (spawnLocation === "Random Spawn" || spawnLocation === "" || spawnLocation === undefined){
    var randomDirection = ["left", "right", "top", "bottom"]
    spawnLocation = _.sample(randomDirection)
  }

    for (var i = 0; i <= num; i++){
          setTimeout(function(){generateAlien(spawnLocation, type)}, 1000*i*2)

      if (i === num){

        if(app.game.paused === false){
          app.waveTimer -= 50;
        }

      setTimeout(function(){waveSpawn( _.random(1,8), "Random Spawn", type )}, app.waveTimer+i*1000*2);

      }

    }
  }


