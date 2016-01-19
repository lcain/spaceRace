var app = app || {};

app.restart = function() {

    //  A new level starts
    app.levelCounter = 0;

    //resets the life count
    app.lives.callAll('revive');
    //  And brings the aliens back from the dead :)
    app.aliens.removeAll();
    app.createAliensLevelOne();

    //revives the player
    app.player.revive();

    // reposition the player
    app.player.position.x = 400;
    app.player.position.y = 600;

    // reset background texture
    app.starfield.loadTexture("starfield", 0, false);

    // reset ship texture
    app.player.loadTexture("ship", 0, false);

    // reset bullet texture
    _.each(app.aliens.children, function(alien) {
        alien.loadTexture("invader");
    });

    // reset asteroid texture
    _.each(app.bullets.children, function(bullet) {
        bullet.loadTexture("bullet");
    });

    //hides the text
    app.stateText.visible = false;

    app.score = 0;
    app.scoreText.destroy();
    app.scoreText = app.game.add.text(10, 705, app.scoreString + app.score, { font: '25px Georgia', fill: "#000" });

    //This is to prevent the enemies moving double time on restart.
    app.game.time.events.events.pop();
}





