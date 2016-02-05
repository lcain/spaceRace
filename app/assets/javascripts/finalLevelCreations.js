var app = app || {};

app.time = 10000
app.generating = false


app.callTimer = function(type, graphic, num, X, Y, time){

  time = time || app.time
  app.count = app.count || 0

  var waveInterval = function(){

    app.generating = true
    var count = 0;

    var waveGen = setInterval(function(){


      app.generating = true

      if(type === 'seekerAlien'){

       app.createSeeker2( X, Y, graphic)

      } else if (type === 'shooterAlien') {

       app.createAlienShooter2(X,Y, graphic)

      } else if (type === 'missileAlien') {

       app.createAlienMissileShip2(X,Y, graphic)

      } else if (type === 'shotgunAlien') {
        // console.log("Shotgunner called")
       app.createAlienShotgunner2(X,Y, graphic)

      }

      count += 1
      if ( count === num ){
        app.generating = false
        clearInterval(waveGen);
        count = 0;
      }
  }, time);

  }

  waveInterval();

}




app.createSeeker2 = function(X, Y, graphicName){


  // DEFINED IN INITIALCREATE.JS

    // //  The baddies! - Seeker.
    // app.seekerAlien = app.game.add.group();
    // app.seekerAlien.enableBody = true;
    // app.seekerAlien.physicsBodyType = Phaser.Physics.ARCADE;



    var alien = app.seekerAlien.create(X, Y, graphicName);
    alien.anchor.setTo(0.5, 0.5);
    app.seekerAlien.setAll('outOfBoundsKill', true);
    app.seekerAlien.setAll('checkWorldBounds', true);
    alien.animations.add('fly', [ 0, 1, 2 ], 20, true);
    alien.play('fly');

  // app.seekerAlien.x = X;
  // app.seekerAlien.y = Y;

    app.alienSeekerArray.push(alien);

    _.each(app.alienSeekerArray, function(alien){

      // APPROPRIATE ALIEN BEHAVIOUR

      // INCLUDE THIS GAME PHYSICS OR ALIENS WILL NOT FUNCTION.
        app.game.physics.enable(alien, Phaser.Physics.ARCADE);
        app.game.time.events.loop(Phaser.Timer.SECOND * .01, function() {
        app.game.physics.arcade.moveToObject(alien, app.player, _.random(120, 200) );
        alien.rotation = app.game.physics.arcade.angleToXY(alien, app.player.position.x, app.player.position.y);
        var d = alien.rotation * (180/ Math.PI);
        alien.angle = d + 90;
    }, this, alien);



    });



}

app.createAlienShooter2 = function(X,Y, graphicName){


  var alien = app.alienShooter.create(X, Y, graphicName);
  alien.anchor.setTo(0.5, 0.5);
  app.alienShooter.setAll('outOfBoundsKill', true);
  app.alienShooter.setAll('checkWorldBounds', true);
  alien.animations.add('fly', [ 0, 1, 2 ], 20, true);
  alien.play('fly');
  app.alienShooterArray.push(alien);

 

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



      var counter = 0;
      var shotInterval = setInterval(function(){
        if (alien.alive === true){
          shooterBullet = app.alienShooterBullets.getFirstExists(false);
          shooterBullet.reset(alien.body.x + 12, alien.body.y +10);

          shooterBullet.angle = alien.angle;

          shooterBullet.body.velocity.x = alien.body.velocity.x * 3;
          shooterBullet.body.velocity.y = alien.body.velocity.y * 3;



          counter++;
        }   else {
          clearInterval(shotInterval)
        }
      }, 500)


//-----------------------------------------------------




}

app.createAlienMissileShip2 = function(X, Y, graphicName){


  var alien = app.alienMissileShip.create(X, Y, graphicName);
  alien.anchor.setTo(0.5, 0.5);
  app.alienMissileShip.setAll('outOfBoundsKill', true);
  app.alienMissileShip.setAll('checkWorldBounds', true);
  alien.animations.add('fly', [ 0, 1, 2 ], 20, true);
  alien.play('fly');
  app.alienMissileShipArray.push(alien);

 

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
    var shotInterval = setInterval(function(){

      if (alien.alive === true){



        shooterBullet = app.alienMissileBullets.getFirstExists(false);
        shooterBullet.reset(alien.body.x + 15, alien.body.y +10);
        shooterBullet.angle = alien.angle;
        app.alienMissileArray.push(shooterBullet);

        _.each(app.alienMissileArray, function(shooterBullet){

          app.game.physics.enable(shooterBullet, Phaser.Physics.ARCADE);
          app.game.time.events.loop(Phaser.Timer.SECOND * .01, function() {
            app.game.physics.arcade.moveToObject(shooterBullet, app.player, 60);
            shooterBullet.rotation = app.game.physics.arcade.angleToXY(shooterBullet, app.player.position.x, app.player.position.y);
            var d = shooterBullet.rotation * (180/ Math.PI);
            shooterBullet.angle = d + 90;
          }, this, shooterBullet);

        })

          counter++;

      }   else {
          clearInterval(shotInterval)
          }
    }, 5000)
//-----------------------------------------------------




}

 

app.createAlienShotgunner2 = function(X,Y, graphicName){


  var alien = app.alienShotgunner.create(X, Y, graphicName);
  // console.log("Alien Created")
  alien.anchor.setTo(0.5, 0.5);
  app.alienShotgunner.setAll('outOfBoundsKill', true);
  app.alienShotgunner.setAll('checkWorldBounds', true);
  alien.animations.add('fly', [ 0, 1, 2 ], 20, true);
  alien.play('fly');
  app.alienShotgunnerArray.push(alien);


        app.game.physics.enable(alien, Phaser.Physics.ARCADE);
        app.game.physics.arcade.moveToObject(alien,app.player,120);
        alien.rotation = app.game.physics.arcade.angleToXY(alien, app.player.position.x, app.player.position.y);

        var d = alien.rotation * (180/ Math.PI);
        alien.angle = d + 90;
        app.enemySeekerTimer = app.game.time.now + 2000;



      var counter = 0;

      var shotInterval = setInterval(function(){

        if (alien.alive === true){

          shooterBullet = app.alienShotgunBullets.getFirstExists(false);
          shooterBullet.reset(alien.body.x + 10, alien.body.y + 10);

          
          shooterBullet.angle = alien.angle + 60;
          shooterBullet.body.velocity.x = (alien.body.velocity.x * 3);
          shooterBullet.body.velocity.y = (alien.body.velocity.y * 2);

          shooterBullet2 = app.alienShotgunBullets.getFirstExists(false);
          shooterBullet2.reset(alien.body.x + 10, alien.body.y + 10);

          shooterBullet2.angle = alien.angle;
          shooterBullet2.body.velocity.x = (alien.body.velocity.x * 2.5);
          shooterBullet2.body.velocity.y = (alien.body.velocity.y * 2.5);

          shooterBullet3 = app.alienShotgunBullets.getFirstExists(false);
          shooterBullet3.reset(alien.body.x + 10, alien.body.y + 10);
          
          shooterBullet3.angle = alien.angle - 60;
          shooterBullet3.body.velocity.x = alien.body.velocity.x * 2;
          shooterBullet3.body.velocity.y = alien.body.velocity.y * 3;

          counter++;
        }   else {
          clearInterval(shotInterval)
        }
      }, 800);

}





