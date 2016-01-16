var app = app || {};

app.createLevelTwo = function() {
    app.createAliensLevelTwo();
    app.stateText.visible = false;
    
}

app.createAliensLevelTwo = function() {

// setInterval(function(){  

//     for (var y = 0; y < 5; y++)
//     {
//             var alien = app.aliens.create(0, y * 100, 'invader');
//             alien.anchor.setTo(0.5, 0.5);
//             alien.body.moves = false;   
//     }
//     var randomise = _.random(100, 700);
//     // console.log(randomise)
//     app.aliens.x = randomise
//     app.aliens.y = -500;

// }, 3000);

    for (var y = 0; y < 1; y++)
    {
            var alien = app.aliens.create(0, y * 100, 'invader');
            alien.anchor.setTo(0.5, 0.5);
            alien.body.moves = false;   
            alien.x = 600;
            alien.y = -500;
    }

   




  // for (var y = 0; y < 5; y++)
  //   {
  //       for (var x = 0; x < 5; x++) {
        
  //           var alien = app.aliens.create(x * 150, y * 100, 'invader');
  //           alien.anchor.setTo(0.5, 0.5);
  //           // alien.animations.add('fly', [ 0, 1, 2, 3 ], 20, true);
  //           // alien.play('fly');
  //           alien.body.moves = false;
  //       };
  //   }

  //   app.aliens.x = 100;
  //   app.aliens.y = -500;













    app.game.time.events.loop(Phaser.Timer.SECOND * .01, app.descendLevelTwo, this);

}

app.descendLevelTwo = function() {


    app.aliens.y += 1;



    _.each(app.aliens.children, function(alien) {
        if (alien.world.y > app.game.world.bounds.bottom) {
            alien.kill();
        }
    });

}

