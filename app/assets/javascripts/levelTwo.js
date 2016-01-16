var app = app || {};

app.createLevelTwo = function() {
    app.createAliensLevelTwo();
    app.stateText.visible = false;
    
}

app.createAliensLevelTwo = function() {

  for (var y = 0; y < 2; y++)
    {
        for (var x = 0; x < 3; x++) {
        
            var alien = app.aliens.create(x * 150, y * 100, 'invader');
            alien.anchor.setTo(0.5, 0.5);
            // alien.animations.add('fly', [ 0, 1, 2, 3 ], 20, true);
            // alien.play('fly');
            alien.body.moves = false;
        };
    }

    app.aliens.x = 250;
    app.aliens.y = -500;


   





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

