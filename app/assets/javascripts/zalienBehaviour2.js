// KANE'S FILE OF WITCHCRAFT AND WIZARDRY. DON'T TOUCH OR I WILL BREAK YOURFINGERS.

var app = app || {};


// GRAPHIC NAME DENOTES THE MODEL PASSED TO THE ALIEN, FOR INSTANCE 'levelEightSeeker'.
//  X & Y DENOTES WHERE EXACTLY WE WANT THIS INSTANCE TO SPAWN.


app.createSeeker2 = function(X, Y, graphicName){


  // DEFINED IN INITIALCREATE.JS

    // //  The baddies! - Seeker.
    // app.seekerAlien = app.game.add.group();
    // app.seekerAlien.enableBody = true;
    // app.seekerAlien.physicsBodyType = Phaser.Physics.ARCADE;



    var alien = app.seekerAlien.create(X, Y, graphicName);
    alien.anchor.setTo(0.5, 0.5);
    // alien.animations.add('fly', [ 0, 1, 2 ], 20, true);
    // alien.play('fly');

  // app.seekerAlien.x = X;
  // app.seekerAlien.y = Y;

    app.alienSeekerArray.push(alien);
   
    _.each(app.alienSeekerArray, function(alien){

      // APPROPRIATE ALIEN BEHAVIOUR

      // INCLUDE THIS GAME PHYSICS OR ALIENS WILL NOT FUNCTION.
        app.game.physics.enable(alien, Phaser.Physics.ARCADE);
        app.game.time.events.loop(Phaser.Timer.SECOND * .01, function() {
        app.game.physics.arcade.moveToObject(alien, app.player, 120);
        alien.rotation = app.game.physics.arcade.angleToXY(alien, app.player.position.x, app.player.position.y);
        var d = alien.rotation * (180/ Math.PI);
        alien.angle = d + 90;
    }, this, alien);

        

    });



}

app.createAlienShooter2 = function(X,Y, graphicName){
  app.alienShooterArray = [];

  app.alienShooter = app.game.add.group();
  // app.alienShooter.enableBody = true;
  app.alienShooter.physicsBodyType = Phaser.Physics.ARCADE;

  var alien = app.alienShooter.create(X, Y, graphicName);
  alien.anchor.setTo(0.5, 0.5);
  // alien.animations.add('fly', [ 0, 1, 2 ], 20, true);
  // alien.play('fly');
  app.alienShooterArray.push(alien);
   
  _.each(app.alienShooterArray, function(alien){

//-----------------------------------------------------
    // INSERT APPROPRIATE ALIEN BEHAVIOUR HERE.

        // INCLUDE THIS GAME PHYSICS OR ALIENS WILL NOT FUNCTION.
        app.game.physics.enable(alien, Phaser.Physics.ARCADE);
        app.game.physics.arcade.moveToObject(alien,app.player,120);
        alien.rotation = app.game.physics.arcade.angleToXY(alien, app.player.position.x, app.player.position.y);

        var d = alien.rotation * (180/ Math.PI);
        alien.angle = d + 90;

        app.enemySeekerTimer = app.game.time.now + 2000;

   

      // Bullet creation here:
      shooterBullet = app.alienShooterBullets.getFirstExists(false);

      var counter = 0;
      app.shotInterval = setInterval(function(){
      
        if (counter < 20){
          
          shooterBullet.reset(alien.body.x + 12, alien.body.y +10);

          shooterBullet.angle = alien.angle;
          
          shooterBullet.body.velocity.x = alien.body.velocity.x * 6;
          shooterBullet.body.velocity.y = alien.body.velocity.y * 6;
               
          counter++;
        }   else {
          clearInterval(app.shotInterval)
        }
      }, 500)

   
//-----------------------------------------------------

  });


}
 
app.createAlienMissileShip2 = function(X, Y, graphicName){

  app.alienMissileShip = app.game.add.group();
  // app.alienMissileShip.enableBody = true;
  app.alienMissileShip.physicsBodyType = Phaser.Physics.ARCADE;

  var alien = app.alienMissileShip.create(X, Y, graphicName);
  alien.anchor.setTo(0.5, 0.5);
  // alien.animations.add('fly', [ 0, 1, 2 ], 20, true);
  // alien.play('fly');
  app.alienMissileShipArray.push(alien);
   
  _.each(app.alienMissileShipArray, function(alien){

//-----------------------------------------------------
        //ALIEN BEHAVIOUR
        app.game.physics.enable(alien, Phaser.Physics.ARCADE);
        app.game.time.events.loop(Phaser.Timer.SECOND * .01, function() {
        app.game.physics.arcade.moveToObject(alien, app.player, 10);
        alien.rotation = app.game.physics.arcade.angleToXY(alien, app.player.position.x, app.player.position.y);
        var d = alien.rotation * (180/ Math.PI);
        alien.angle = d + 90;
    }, this, alien);

   

    var d = alien.rotation * (180/ Math.PI);
    alien.angle = d + 90;

    app.enemySeekerTimer = app.game.time.now + 2000;

    var counter = 0;
    app.shotInterval = setInterval(function(){
      
      if (counter < 2){

       
          
        shooterBullet = app.alienMissileBullets.getFirstExists(false);
        shooterBullet.reset(alien.body.x + 15, alien.body.y +10);
        shooterBullet.angle = alien.angle;
        app.alienMissileArray.push(shooterBullet);

        _.each(app.alienMissileArray, function(shooterBullet){

          app.game.physics.enable(shooterBullet, Phaser.Physics.ARCADE);
          app.game.time.events.loop(Phaser.Timer.SECOND * .01, function() {
            app.game.physics.arcade.moveToObject(shooterBullet, app.player, 40);
            shooterBullet.rotation = app.game.physics.arcade.angleToXY(shooterBullet, app.player.position.x, app.player.position.y);
            var d = shooterBullet.rotation * (180/ Math.PI);
            shooterBullet.angle = d + 90;
          }, this, shooterBullet);

        })       
                
          counter++;
        
      }   else {
          clearInterval(app.shotInterval)
          }
    }, 4000)
//-----------------------------------------------------


  });

}


app.createAlienShotgunner2 = function(X,Y, graphicName){
  app.alienShotgunnerArray = [];

  app.alienShotgunner = app.game.add.group();
  // app.alienShotgunner.enableBody = true;
  app.alienShotgunner.physicsBodyType = Phaser.Physics.ARCADE;

  var alien = app.alienShotgunner.create(X, Y, graphicName);
  alien.anchor.setTo(0.5, 0.5);
  // alien.animations.add('fly', [ 0, 1, 2 ], 20, true);
  // alien.play('fly');
  app.alienShotgunnerArray.push(alien);
   
  _.each(app.alienShotgunnerArray, function(alien){

//-----------------------------------------------------
    // INSERT APPROPRIATE ALIEN BEHAVIOUR HERE.

         app.game.physics.enable(alien, Phaser.Physics.ARCADE);
        app.game.physics.arcade.moveToObject(alien,app.player,120);
        alien.rotation = app.game.physics.arcade.angleToXY(alien, app.player.position.x, app.player.position.y);

        var d = alien.rotation * (180/ Math.PI);
        alien.angle = d + 90;

        app.enemySeekerTimer = app.game.time.now + 2000;

      var counter = 0;
      app.shotInterval = setInterval(function(){
      
        if (counter < 100){
          
          shooterBullet = app.alienShooterBullets.getFirstExists(false);
          shooterBullet.reset(alien.body.x + 12, alien.body.y +10);
          shooterBullet.angle = alien.angle;

          shooterBullet.angle = alien.angle;
          shooterBullet.body.velocity.x = (alien.body.velocity.x * 6) + 110;
          shooterBullet.body.velocity.y = (alien.body.velocity.y * 6) - 110;

          shooterBullet2 = app.alienShooterBullets.getFirstExists(false);
          shooterBullet2.reset(alien.body.x + 12, alien.body.y +10);

          shooterBullet2.angle = alien.angle;
          shooterBullet2.body.velocity.x = (alien.body.velocity.x * 6) - 110;
          shooterBullet2.body.velocity.y = (alien.body.velocity.y * 6) + 110;

          shooterBullet3 = app.alienShooterBullets.getFirstExists(false);
          shooterBullet3.reset(alien.body.x + 12, alien.body.y +10);
          shooterBullet3.angle = alien.angle;
          
          shooterBullet3.body.velocity.x = alien.body.velocity.x * 6;
          shooterBullet3.body.velocity.y = alien.body.velocity.y * 6;
                
          counter++;
        }   else {
          clearInterval(app.shotInterval)
        }
      }, 1000)

//-----------------------------------------------------


  });

}





