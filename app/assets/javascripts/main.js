app.randomizer = function(x,y){
  for (var i = 0; i < app.aliens.children.length; i++){
    app.aliens.children[i].position.x = _.random(x,y);
  }
}


app.toNextLevel = function(createLevel){

  if (app.aliens.countLiving() === 0)
      {
          // app.score += 1000;
          app.scoreText.text = app.scoreString + app.score;

          app.enemyBullets.callAll('kill',this);

          if ( app.levelCounter === 1 ) {
            app.stateText.text = " It's dangerous \n  to go alone. \n   Try these: \n     ⍃   ⍄";
            app.stateText.visible = true;
          } else if ( app.levelCounter === 2 ) {
            app.stateText.text = " Lvl Two Done";
            app.stateText.visible = true;
          } else if ( app.levelCounter === 3 ) {
            app.stateText.text = " Lvl Three Done ";
            app.stateText.visible = true;
          } else if ( app.levelCounter === 4 ) {
            app.stateText.text = " Lvl Four Done";
            app.stateText.visible = true;
          } else if ( app.levelCounter === 5 ) {
            app.stateText.text = " Lvl Five Done";
            app.stateText.visible = true;
          } else if ( app.levelCounter === 6 ) {
            app.stateText.fill = '#fff';
            app.stateText.text = " Lvl Six Done";
            app.stateText.visible = true;
          } else if ( app.levelCounter === 7 ) {
            app.stateText.text = " Lvl Seven Done";
            app.stateText.visible = true;
          } else if ( app.levelCounter === 8 ) {
            app.stateText.text = " Lvl Eight Done";
            app.stateText.visible = true;
          } else if ( app.levelCounter === 9 ) {
            app.stateText.text = " Lvl Nine Done";
            app.stateText.visible = true;
          };

          //Destroys killed sprites from our count.
          app.aliens.children = [];
          // Destroys killed sprites from our count.
          app.smallAliens = [];
          // Resets counter for next level.
          app.smallAlienGroupCounter = 1;

          //the "click to restart" handler
          app.game.time.events.events.pop();

          // app.game.input.onDown.addOnce(createLevel, this)

          app.canFire = false;

          app.fireButton.onDown.addOnce(createLevel, this);

          var checkSpacePress = setInterval(function() {

            //console.log("waiting for space...");

            if (app.fireButton.isDown) {
              //console.log("space pressed!");
              clearInterval(checkSpacePress);
              checkSpacePress = 0;

              setTimeout(function() {
                app.canFire = true;
              }, 1000);

            }

          }, 100);

  }

};


app.levelTwoControls = function() {
  if (app.cursors.left.isDown) {
      app.player.body.velocity.x = -app.playerVelocity;
  }
  else if (app.cursors.right.isDown) {
      app.player.body.velocity.x = app.playerVelocity;
  }
}

app.levelFourControls = function() {
  if (app.cursors.left.isDown) {
      app.player.body.velocity.x = -app.playerVelocity;
  }
  else if (app.cursors.right.isDown) {
      app.player.body.velocity.x = app.playerVelocity;
  }
  else if (app.cursors.up.isDown) {
      app.player.body.velocity.y = -app.playerVelocity;
  }
  else if (app.cursors.down.isDown) {
      app.player.body.velocity.y = app.playerVelocity;
  }
}

app.levelFiveControls = function() {
  if (app.cursors.up.isDown) {
      // Up movement
      app.player.body.velocity.y = -app.playerVelocity;
      app.player.angle = 0;
  }
  else if (app.cursors.down.isDown) {
      // Down movement
      app.player.body.velocity.y = app.playerVelocity;
      app.player.angle = 180;
  }
  else if (app.cursors.left.isDown) {
      // Left movement
      app.player.body.velocity.x = -app.playerVelocity
      app.player.angle = 270;
  }
  else if (app.cursors.right.isDown) {
      // Right movement
      app.player.body.velocity.x = app.playerVelocity
      app.player.angle = 90;
  }
}

app.levelSixControls = function() {
  if (app.cursors.down.isDown && app.cursors.left.isDown) {
      // Diagonal down left movememnt
      app.player.body.velocity.x = -app.playerVelocity * 0.75;
      app.player.body.velocity.y = app.playerVelocity * 0.75;
      app.player.angle = 225;
      app.player.animations.play('fly', 20, true);
  }
  else if (app.cursors.down.isDown && app.cursors.right.isDown) {
      // Diagonal down right movement
      app.player.body.velocity.x = app.playerVelocity * 0.75;
      app.player.body.velocity.y = app.playerVelocity * 0.75;
      app.player.angle = 135;
      app.player.animations.play('fly', 20, true);
  }
  else if (app.cursors.up.isDown && app.cursors.left.isDown) {
      // Diagonal up left movement
      app.player.body.velocity.x = -app.playerVelocity * 0.75;
      app.player.body.velocity.y = -app.playerVelocity * 0.75;
      app.player.angle = 315;
      app.player.animations.play('fly', 20, true);
  }
  else if (app.cursors.up.isDown && app.cursors.right.isDown) {
      // Diagonal up right movement
      app.player.body.velocity.x = app.playerVelocity * 0.75;
      app.player.body.velocity.y = -app.playerVelocity * 0.75;
      app.player.angle = 45;
      app.player.animations.play('fly', 20, true);
  }
  else if (app.cursors.up.isDown) {
      // Up movement
      app.player.body.velocity.y = -app.playerVelocity;
      app.player.angle = 0;
      app.player.animations.play('fly', 20, true);
  }
  else if (app.cursors.down.isDown) {
      // Down movement
      app.player.body.velocity.y = app.playerVelocity;
      app.player.angle = 180;
      app.player.animations.play('fly', 20, true);
  }
  else if (app.cursors.left.isDown) {
      // Left movement
      app.player.body.velocity.x = -app.playerVelocity
      app.player.angle = 270;
      app.player.animations.play('fly', 20, true);
  }
  else if (app.cursors.right.isDown) {
      // Right movement
      app.player.body.velocity.x = app.playerVelocity
      app.player.angle = 90;
      app.player.animations.play('fly', 20, true);
  }
  else {
    app.player.animations.stop();
    app.player.frame = 0;
  }
}

app.levelFiveBulletDirection = function(bullet) {
  if (app.player.angle === 0) {
  //  Facing up
      bullet.angle = app.player.angle
      bullet.body.velocity.y = -app.bulletVelocity;
  }
  else if (app.player.angle === 90) {
  //  Facing right
      bullet.angle = app.player.angle
      bullet.body.velocity.x = app.bulletVelocity;
  }
  else if (app.player.angle === -180) {
  //  Facing down
      bullet.angle = app.player.angle
      bullet.body.velocity.y = app.bulletVelocity;
  }
  else if (app.player.angle === -90) {
  //  Facing left
      bullet.angle = app.player.angle
      bullet.body.velocity.x = -app.bulletVelocity;
  }
}

app.levelSixBulletDirection = function(bullet) {
  if (app.cursors.down.isDown && app.cursors.left.isDown) {
  //  Diagonal down/left movement
      bullet.body.velocity.x = -app.bulletVelocity;
      bullet.body.velocity.y = app.bulletVelocity;
      bullet.angle = 225;
  }
  else if (app.cursors.left.isDown && app.cursors.up.isDown) {
  //  Diagonal up/left movement
      bullet.body.velocity.x = -app.bulletVelocity;
      bullet.body.velocity.y = -app.bulletVelocity;
      bullet.angle = 315;
  }
  else if (app.cursors.up.isDown && app.cursors.right.isDown) {
  //  Diagonal up/right movement
      bullet.body.velocity.x = app.bulletVelocity;
      bullet.body.velocity.y = -app.bulletVelocity;
      bullet.angle = 45;
  }
  else if (app.cursors.right.isDown && app.cursors.down.isDown) {
  //  Diagonal down/right movement
      bullet.body.velocity.x = app.bulletVelocity;
      bullet.body.velocity.y = app.bulletVelocity;
      bullet.angle = 135;
  }
  else if (app.cursors.left.isDown) {
  //  Left
      bullet.body.velocity.x = -app.bulletVelocity;
      bullet.angle = 270;
  }
  else if (app.cursors.right.isDown) {
  //  Right
      bullet.body.velocity.x = app.bulletVelocity;
      bullet.angle = 90;
  }
  else if (app.cursors.up.isDown) {
  //  Move up.
      bullet.body.velocity.y = -app.bulletVelocity;
      bullet.angle = 360;
  }
  else if (app.cursors.down.isDown) {
  //  Move down
      bullet.body.velocity.y = app.bulletVelocity;
      bullet.angle = 180;
  }
  else if (app.player.angle === 0) {
  //  Stand still up
      bullet.angle = app.player.angle
      bullet.body.velocity.y = -app.bulletVelocity;
  }
  else if (app.player.angle === 45) {
  //  Stand still diag up right
      bullet.angle = app.player.angle
      bullet.body.velocity.y = -app.bulletVelocity;
      bullet.body.velocity.x = app.bulletVelocity;
  }
  else if (app.player.angle === 90) {
  //  Stand still right
      bullet.angle = app.player.angle
      bullet.body.velocity.x = app.bulletVelocity;
  }
  else if (app.player.angle === 135) {
  //  Stand still diag down right
      bullet.angle = app.player.angle
      bullet.body.velocity.x = app.bulletVelocity;
      bullet.body.velocity.y = app.bulletVelocity;
  }
  else if (app.player.angle === -180) {
  //  Stand still down
      bullet.angle = app.player.angle
      bullet.body.velocity.y = app.bulletVelocity;
  }
  else if (app.player.angle === -135) {
  //  Stand still down/left
      bullet.angle = app.player.angle
      bullet.body.velocity.y = app.bulletVelocity;
      bullet.body.velocity.x = -app.bulletVelocity;
  }
  else if (app.player.angle === -90) {
  //  Stand still left
      bullet.angle = app.player.angle
      bullet.body.velocity.x = -app.bulletVelocity;
  }
  else if (app.player.angle === -45) {
  //  Stand still up/left
      bullet.angle = app.player.angle
      bullet.body.velocity.x = -app.bulletVelocity;
      bullet.body.velocity.y = -app.bulletVelocity;
  }
}

app.areSmallAliensDead = function(alien){
  var deathTest = 0;
  for ( var i = 0; i < alien.length; i++ ){
    if (alien[i].countLiving() === 0){
      deathTest ++;
    }
  }


  if (deathTest === alien.length){
    // console.log("SECOND DEATH TEST " + deathTest)
    // console.log("SECOND SMALL ALIEN LOG " + app.smallAliens.length)

    return true;
  }

}

app.areAliensImage = function(alien){

    if( alien.key === "levelSevenAsteroidLarge"){
      console.log("In areAliensImage Function")
      return true;
    }
}