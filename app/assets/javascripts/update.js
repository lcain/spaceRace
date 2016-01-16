var app = app || {};

app.update = function() {

    //  Scroll the background
    // app.starfield.tilePosition.y += 2;

    if (app.player.alive)
    {
        // app.descendLevelOne();
        //  Reset the app.player, then check for movement keys
        app.player.body.velocity.setTo(0, 0);

        //  Firing?
        if (app.fireButton.isDown)
        {
            app.fireBulletLevelOne();
        }

        //THIS ALLOWS THE PLAYER TO MOVE FROM LEFT TO RIGHT

        if ( app.levelCounter >= 2) {

            if (app.cursors.left.isDown)
            {
                app.player.body.velocity.x = -200;
            }
            else if (app.cursors.right.isDown)
            {
                app.player.body.velocity.x = 200;
            }

        }
    


        // THIS STARTS THE ENEMY FIRING

        // if (app.game.time.now > app.firingTimer)
        // {
        //     app.enemyFiresLevelOne();
        // }


        //  Run collision

    if ( app.levelCounter === 1 ) {

        app.game.physics.arcade.overlap(app.bullets, app.aliens, app.collisionHandlerLevelOne, null, this);

     }
        app.game.physics.arcade.overlap(app.enemyBullets, app.player, app.enemyHitsPlayerLevelOne, null, this);
        app.game.physics.arcade.overlap(app.aliens, app.player, app.enemyHitsPlayerLevelOne, null, this);
        
        // Run collision for level two
    if ( app.levelCounter === 2 ) {

        app.game.physics.arcade.overlap(app.bullets, app.aliens, app.collisionHandlerLevelTwo, null, this);
        // app.game.physics.arcade.overlap(app.game.world.bounds, app.aliens, app.collisionHandlerLevelTwo, null, this);
        console.log("Loggingcollision Handler Two")

    }

        // Run collision for level three
        // app.game.physics.arcade.overlap(app.bullets, app.aliens, app.collisionHandlerLevelThree, null, this);


        // SCORES AND LIVES: -KANE

        $('.gameLives').text( "Lives: "+lifeCalculator() );
        $('.gameScore').text("Score: "+app.score)

    }

}