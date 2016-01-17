var app = app || {};

app.update = function() {

    //  Scroll the background
    // app.starfield.tilePosition.y += 2;

    if (app.player.alive) {
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

        if ( app.levelCounter >= 4 && !app.cursors.left.isDown && !app.cursors.right.isDown ) {
            if (app.cursors.up.isDown)
            {
                app.player.body.velocity.y = -200;
            }
            else if (app.cursors.down.isDown)
            {
                app.player.body.velocity.y = 200;
            }
        }



        // THIS STARTS THE ENEMY FIRING

        // if (app.game.time.now > app.firingTimer)
        // {
        //     app.enemyFiresLevelOne();
        // }


        //  Run collision for level one

        if ( app.levelCounter === 1 ) {

            app.game.physics.arcade.overlap(app.bullets, app.aliens, app.collisionHandlerLevelOne, null, this);

        }

            // Run collision for level two
        if ( app.levelCounter === 2 ) {

            app.game.physics.arcade.overlap(app.bullets, app.aliens, app.collisionHandlerLevelTwo, null, this);

            if ( app.aliens.countLiving() === 0 ) {
                app.toNextLevel(app.createLevelThree);
            }
        }

            // Run collision for level three
        if ( app.levelCounter === 3 ) {

            app.game.physics.arcade.overlap(app.bullets, app.aliens, app.collisionHandlerLevelThree, null, this);

            if ( app.aliens.countLiving() === 0 ) {
                app.toNextLevel(app.createLevelFour);
            }
        }

              // Run collision for level four
        if ( app.levelCounter === 4 ) {

            app.game.physics.arcade.overlap(app.bullets, app.aliens.children, app.collisionHandlerLevelFour, null, this);

            if ( app.aliens.countLiving() === 0 ) {
                app.toNextLevel(app.createLevelFive);
            }
        }

                // Run collision for level five
        if ( app.levelCounter === 5 ) {

            app.game.physics.arcade.overlap(app.bullets, app.aliens, app.collisionHandlerLevelFive, null, this);

            if ( app.aliens.countLiving() === 0 ) {
                app.toNextLevel(app.createLevelSix);
            }
        }
                //Run collision level six
        if ( app.levelCounter === 6 ) {

            app.game.physics.arcade.overlap(app.bullets, app.aliens, app.collisionHandlerLevelSix, null, this);

            if ( app.aliens.countLiving() === 0 ) {
                app.toNextLevel(app.createLevelSix);
            }
        }


        if (app.levelCounter < 4) {
            app.game.physics.arcade.overlap(app.enemyBullets, app.player, app.enemyHitsPlayerLevelOne, null, this);
            app.game.physics.arcade.overlap(app.aliens, app.player, app.enemyHitsPlayerLevelOne, null, this);
        }
        else {
            app.game.physics.arcade.overlap(app.enemyBullets, app.player, app.enemyHitsPlayerLevelOne, null, this);
            app.game.physics.arcade.overlap(app.aliens.children, app.player, app.enemyHitsPlayerLevelOne, null, this);
        }




        // SCORES AND LIVES: -KANE

        $('.gameLives').text( "Lives: "+lifeCalculator() );
        $('.gameScore').text("Score: "+app.score)

    }

}