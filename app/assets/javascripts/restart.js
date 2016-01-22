var app = app || {};

app.restart = function() {
    //  A new level starts
    location.reload();
    app.levelCounter = 1;

    //resets the life count
    app.lives.callAll('revive');
    //  And brings the aliens back from the dead :)
    app.aliens.removeAll();

    app.alienMissileShip.destroy();
    app.alienShooter.destroy();
    app.seekerAlien.destroy();
    app.alienShotgunner.destroy();



    app.killSmallAliens(app.smallAliensUp);
    app.killSmallAliens(app.smallAliensDown);
    app.killSmallAliens(app.smallAliensLeft);
    app.killSmallAliens(app.smallAliensRight);

    //This is to prevent the enemies moving double time on restart.
    app.game.time.events.removeAll();

    app.createAliensLevelOne();

    //revives the player
    app.player.revive();

    // reposition the player
    app.player.position.x = 400;
    app.player.position.y = 600;

    // reset player facing angle
    app.player.angle = 0;

    // reset background texture
    app.starfield.loadTexture("starfield", 0, false);

    // reset ship texture
    app.player.loadTexture("ship", 0, false);

    // reset asteroid texture
    _.each(app.aliens.children, function(alien) {
        alien.loadTexture("invader");
    });

    // reset bullet texture
    _.each(app.bullets.children, function(bullet) {
        bullet.loadTexture("bullet");
    });

    // reset 'sploisions'
    _.each(app.explosions.children, function(explosion) {
        explosion.loadTexture("kaboom");
    });

    //hides the text
    app.stateText.visible = false;
    app.stateText.fill = '#000';

    app.score = 0;
    app.scoreText.destroy();
    app.scoreText = app.game.add.text(10, 705, app.scoreString + app.score, { font: '25px Georgia', fill: "#000" });
}