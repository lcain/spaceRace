var app = app || {};

app.update = function() {

    //  Scroll the background
    // app.starfield.tilePosition.y += 2;

    if (app.player.alive)
    {
        //app.descendLevelOne();
        //  Reset the app.player, then check for movement keys
        app.player.body.velocity.setTo(0, 0);


        //THIS ALLOWS THE PLAYER TO MOVE FROM LEFT TO RIGHT

        // if (app.cursors.left.isDown)
        // {
        //     app.player.body.velocity.x = -200;
        // }
        // else if (app.cursors.right.isDown)
        // {
        //     app.player.body.velocity.x = 200;
        // }


        //  Firing?
        if (app.fireButton.isDown)
        {
            app.fireBulletLevelOne();
        }


        // THIS STARTS THE ENEMY FIRING

        // if (app.game.time.now > app.firingTimer)
        // {
        //     app.enemyFiresLevelOne();
        // }


        //  Run collision
        app.game.physics.arcade.overlap(app.bullets, app.aliens, app.collisionHandlerLevelOne, null, this);
        app.game.physics.arcade.overlap(app.enemyBullets, app.player, app.enemyHitsPlayerLevelOne, null, this);
        app.game.physics.arcade.overlap(app.aliens, app.player, app.enemyHitsPlayerLevelOne, null, this);


        // SCORES AND LIVES: -KANE

        $('.gameLives').text( "Lives: "+lifeCalculator() );
        $('.gameScore').text("Score: "+app.score)

    }

}