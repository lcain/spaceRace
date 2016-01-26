// // KANE'S FILE OF WITCHCRAFT AND WIZARDRY. DON'T TOUCH OR I WILL BREAK YOURFINGERS.

// var nameArray = ["shooterAlien", "missileAlien", "shotgunAlien", "seekerAlien"];

// var waveSpeed = 5000

// app.alienGenerator = function(X, Y, name){

//     if(name === 'seekerAlien'){

//      app.createSeeker2( X, Y, "levelTenSeeker")
 
//     } else if (name === 'shooterAlien') {

//      app.createAlienShooter2(X,Y, "levelTenBasicAlien" )

//     } else if (name === 'missileAlien') {

//      app.createAlienMissileShip2(X,Y, "AlienMissileShip")

//     } else if (name === 'shotgunAlien') {

//      app.createAlienShotgunner2(X,Y, "levelTenShotgunShip")

//     }

// }

app.timerKill = function( X, Y ){
  var playerKiller = setInterval(function(){
     app.alienGenerator( X, Y, _.sample(nameArray) );

     if (waveSpeed > 300){ waveSpeed -= 100 }

  }, waveSpeed)
   
if (app.player.alive === false) {
  clearInterval(playerKiller)
};

}

// var app = app || {};


// // GRAPHIC NAME DENOTES THE MODEL PASSED TO THE ALIEN, FOR INSTANCE 'levelEightSeeker'.
// //  X & Y DENOTES WHERE EXACTLY WE WANT THIS INSTANCE TO SPAWN.


// app.createSeeker = function(X, Y, graphicName){


//   // DEFINED IN INITIALCREATE.JS

//     // //  The baddies! - Seeker.
//     // app.seekerAlien = app.game.add.group();
//     // app.seekerAlien.enableBody = true;
//     // app.seekerAlien.physicsBodyType = Phaser.Physics.ARCADE;



//     var alien = app.seekerAlien.create(X, Y, graphicName);
//     alien.anchor.setTo(0.5, 0.5);
//     // alien.animations.add('fly', [ 0, 1, 2 ], 20, true);
//     // alien.play('fly');

//   // app.seekerAlien.x = X;
//   // app.seekerAlien.y = Y;

//     app.alienSeekerArray.push(alien);
   
//     _.each(app.alienSeekerArray, function(alien){

//       // APPROPRIATE ALIEN BEHAVIOUR

//       // INCLUDE THIS GAME PHYSICS OR ALIENS WILL NOT FUNCTION.
//         app.game.physics.enable(alien, Phaser.Physics.ARCADE);
//         app.game.time.events.loop(Phaser.Timer.SECOND * .01, function() {
//         app.game.physics.arcade.moveToObject(alien, app.player, 120);
//         alien.rotation = app.game.physics.arcade.angleToXY(alien, app.player.position.x, app.player.position.y);
//     }, this, alien);

//     });



// }

// app.createAlienShooter = function(X,Y){
//   app.alienShooterArray = [];

//   app.alienShooter = app.game.add.group();
//   // app.alienShooter.enableBody = true;
//   app.alienShooter.physicsBodyType = Phaser.Physics.ARCADE;

//   var alien = app.alienShooter.create(X, Y, graphicName);
//   alien.anchor.setTo(0.5, 0.5);
//   // alien.animations.add('fly', [ 0, 1, 2 ], 20, true);
//   // alien.play('fly');
//   app.alienShooterArray.push(alien);
   
//   _.each(app.alienShooterArray, function(alien){

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


//   });

// }


// // //----------------------------------------------------------
// // // DYNAMIC GENERATION TESTING
// // //----------------------------------------------------------


// // app.time = 10000
// // app.generating = false



// // // app.callTimer( "seekerAlien", "levelEightSeeker", 3, 150, _.random(-150, 150) );

// // app.callTimer = function(type, graphic, num, X, Y, time){
// //   time = time || app.time
// //   app.count = app.count || 0
// //   var waveInterval = function(){
// //     app.generating = true
// //     var waveGen = setInterval(function(){
// //     // debugger
// //     if(type === 'seekerAlien'){

// //      app.createSeeker2( X, Y, graphic)
 
// //     } else if (type === 'shooterAlien') {

// //      app.createAlienShooter2(X,Y, graphic)

// //     } else if (type === 'missileAlien') {

// //      app.createAlienMissileShip(X,Y, graphic)

// //     } else if (type === 'shotgunAlien') {

// //      app.createAlienShotgunner2(X,Y, graphic)

// //     }

// //     app.count += 1
// //     if ( app.count === num ){
// //     app.generating = false
// //     clearInterval(waveGen);
// //     app.count = 0;
// //     }



// //   }, time)
// //   }

// //   waveInterval();

// // }




// // // //----------------------------------------------------------
// // // // DYNAMIC ALIEN GENERATION
// // // //----------------------------------------------------------

// // // var generate = 