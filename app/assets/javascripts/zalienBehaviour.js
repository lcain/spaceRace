// // KANE'S FILE OF WITCHCRAFT AND WIZARDRY. DON'T TOUCH OR I WILL BREAK YOUR FINGERS.


var generateRandomAlien = function(location, type){
 // console.log("Generated.") 
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
        setTimeout(function(){generateRandomAlien(spawnLocation, type)}, 1000*i*2)

    if (i === num){

      if(app.game.paused === false){
        app.waveTimer -= 50;
      }

    setTimeout(function(){waveSpawn( _.random(1,8), "Random Spawn", type )}, app.waveTimer+i*1000*2);

    }

    }
  }



// //-----------------------------------------------------
//     // INSERT APPROPRIATE ALIEN BEHAVIOUR HERE.
// //-----------------------------------------------------

//   });


// }


// app.createAlienMissileShip = function(X,Y){
//   app.alienMissileShipArray = [];

//   app.alienMissileShip = app.game.add.group();
//   // app.alienMissileShip.enableBody = true;
//   app.alienMissileShip.physicsBodyType = Phaser.Physics.ARCADE;

//   var alien = app.alienMissileShip.create(X, Y, graphicName);
//   alien.anchor.setTo(0.5, 0.5);
//   // alien.animations.add('fly', [ 0, 1, 2 ], 20, true);
//   // alien.play('fly');
//   app.alienMissileShipArray.push(alien);
   
//   _.each(app.alienMissileShipArray, function(alien){

// //-----------------------------------------------------
//     // INSERT APPROPRIATE ALIEN BEHAVIOUR HERE.
// //-----------------------------------------------------


//   });

// }


// app.createAlienShotgunner = function(X,Y){
//   app.alienShotgunnerArray = [];

//   app.alienShotgunner = app.game.add.group();
//   // app.alienShotgunner.enableBody = true;
//   app.alienShotgunner.physicsBodyType = Phaser.Physics.ARCADE;

//   var alien = app.alienShotgunner.create(X, Y, graphicName);
//   alien.anchor.setTo(0.5, 0.5);
//   // alien.animations.add('fly', [ 0, 1, 2 ], 20, true);
//   // alien.play('fly');
//   app.alienShotgunnerArray.push(alien);
   
//   _.each(app.alienShotgunnerArray, function(alien){

// //-----------------------------------------------------
//     // INSERT APPROPRIATE ALIEN BEHAVIOUR HERE.
// //-----------------------------------------------------


// // // //----------------------------------------------------------
// // // // DYNAMIC ALIEN GENERATION
// // // //----------------------------------------------------------

// // // var generate = 