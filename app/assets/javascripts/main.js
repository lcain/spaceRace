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
            app.stateText.text = " Lvl Six Done";
            app.stateText.visible = true;
          };

          //Adds enemies killed to global kill count.
          app.totalKillCount = app.totalKillCount + app.aliens.countDead();
          //Destroys killed sprites from our count.
          app.aliens.children = [];

          //the "click to restart" handler
          app.game.time.events.events.pop();

          app.game.input.onTap.addOnce(createLevel, this)

          // var nextLevel = setInterval(function() {
          //   if (app.cursors.up.isDown ||
          //     app.cursors.left.isDown ||
          //     app.cursors.down.isDown ||
          //     app.cursors.right.isDown) {
          //       createLevel();
          //       clearInterval(nextLevel);
          //       nextLevel = 0;
          //   }
          // }, 1000);

  }

};