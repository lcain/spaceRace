var app = app || {};

app.update = function() {

    //  Scroll the background
    if (app.levelCounter > 7) {
        app.starfield.tilePosition.y += 2;
    }

    if (app.player.alive) {
        // app.descendLevelOne();
        //  Reset the app.player, then check for movement keys
        app.player.body.velocity.setTo(0, 0);

        //  Firing?
        if (app.fireButton.isDown && app.canFire)
        {
            app.fireBulletLevelOne();
        }

        //THIS ALLOWS THE PLAYER TO MOVE FROM LEFT TO RIGHT

        if (app.levelCounter > 1 && app.levelCounter < 4) {
            app.levelTwoControls();
        }

        else if (app.levelCounter === 4) {
            app.levelFourControls();
        }

        else if (app.levelCounter === 5) {
            app.levelFiveControls();
        }

        else if (app.levelCounter >= 6) {
            app.levelSixControls();
        }


        // THIS STARTS THE ENEMY FIRING

        // if (app.game.time.now > app.firingTimer)
        // {
        //     app.enemyFiresLevelOne();
        // }


        //  Run collision for level one

        if ( app.levelCounter === 1 ) {

            app.game.physics.arcade.overlap(app.bullets, app.aliens, app.collisionHandlerLevelOne, null, this);
            if ( app.aliens.countLiving() === 0 ) {
                app.toNextLevel(app.createLevelTwo);
            }

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
            // console.log(app.areSmallAliensDead())
            if ( app.areSmallAliensDead(app.smallAliens) === true ) {
                if (app.aliens.countLiving() === 0){
                app.toNextLevel(app.createLevelFour);
            } }

            app.game.physics.arcade.overlap(app.bullets, app.aliens, app.collisionHandlerLevelThree, null, this);

            for(i = 0; i < app.smallAliens.length; i++){

                app.game.physics.arcade.overlap(app.bullets, app.smallAliens[i], app.collisionHandlerLevelThreeSmall, null, this);
                app.game.physics.arcade.overlap(app.smallAliens[i], app.player, app.enemyHitsPlayerLevelOne, null, this);
            }

        }

              // Run collision for level four
        if ( app.levelCounter === 4 ) {

            if ( app.aliens.countLiving() === 0 ) {
                if ( (app.areSmallAliensDead(app.smallAliensLeft) === true) && (app.areSmallAliensDead(app.smallAliensRight) === true) && (app.areSmallAliensDead(app.smallAliensDown) === true) ){
                app.toNextLevel(app.createLevelFive);
            } }

            app.game.physics.arcade.overlap(app.bullets, app.aliens, app.collisionHandlerLevelFour, null, this);

            for(i = 0; i < app.smallAliensLeft.length; i++){

                app.game.physics.arcade.overlap(app.bullets, app.smallAliensLeft[i], app.collisionHandlerLevelFourSmall, null, this);
                app.game.physics.arcade.overlap(app.smallAliensLeft[i], app.player, app.enemyHitsPlayerLevelOne, null, this);
            }

            for(i = 0; i < app.smallAliensRight.length; i++){

                app.game.physics.arcade.overlap(app.bullets, app.smallAliensRight[i], app.collisionHandlerLevelFourSmall, null, this);
                app.game.physics.arcade.overlap(app.smallAliensRight[i], app.player, app.enemyHitsPlayerLevelOne, null, this);
            }

            for(i = 0; i < app.smallAliensDown.length; i++){

                app.game.physics.arcade.overlap(app.bullets, app.smallAliensDown[i], app.collisionHandlerLevelFourSmall, null, this);
                app.game.physics.arcade.overlap(app.smallAliensDown[i], app.player, app.enemyHitsPlayerLevelOne, null, this);
            }
        }

                // Run collision for level five
        if ( app.levelCounter === 5 ) {

            if ( app.aliens.countLiving() === 0 ) {
                if ( (app.areSmallAliensDead(app.smallAliensLeft) === true) && (app.areSmallAliensDead(app.smallAliensRight) === true) && (app.areSmallAliensDead(app.smallAliensDown) === true) && (app.areSmallAliensDead(app.smallAliensUp) === true)){
                app.toNextLevel(app.createLevelSix);
                }
            }


            app.game.physics.arcade.overlap(app.bullets, app.aliens, app.collisionHandlerLevelFive, null, this);

            for(i = 0; i < app.smallAliensLeft.length; i++){

                app.game.physics.arcade.overlap(app.bullets, app.smallAliensLeft[i], app.collisionHandlerLevelFourSmall, null, this);
                app.game.physics.arcade.overlap(app.smallAliensLeft[i], app.player, app.enemyHitsPlayerLevelOne, null, this);
            }

            for(i = 0; i < app.smallAliensRight.length; i++){

                app.game.physics.arcade.overlap(app.bullets, app.smallAliensRight[i], app.collisionHandlerLevelFourSmall, null, this);
                app.game.physics.arcade.overlap(app.smallAliensRight[i], app.player, app.enemyHitsPlayerLevelOne, null, this);
            }

            for(i = 0; i < app.smallAliensDown.length; i++){

                app.game.physics.arcade.overlap(app.bullets, app.smallAliensDown[i], app.collisionHandlerLevelFourSmall, null, this);
                app.game.physics.arcade.overlap(app.smallAliensDown[i], app.player, app.enemyHitsPlayerLevelOne, null, this);
            }
            for(i = 0; i < app.smallAliensUp.length; i++){

                app.game.physics.arcade.overlap(app.bullets, app.smallAliensUp[i], app.collisionHandlerLevelFourSmall, null, this);
                app.game.physics.arcade.overlap(app.smallAliensUp[i], app.player, app.enemyHitsPlayerLevelOne, null, this);
            }
        }
                //Run collision level six
        if ( app.levelCounter === 6 ) {
              if ( app.aliens.countLiving() === 0 ) {
                if ( (app.areSmallAliensDead(app.smallAliensLeft) === true) && (app.areSmallAliensDead(app.smallAliensRight) === true) && (app.areSmallAliensDead(app.smallAliensDown) === true) && (app.areSmallAliensDead(app.smallAliensUp) === true)){
                app.toNextLevel(app.createLevelSeven);
                }
            }


            app.game.physics.arcade.overlap(app.bullets, app.aliens, app.collisionHandlerLevelSix, null, this);

            for(i = 0; i < app.smallAliensLeft.length; i++){

                app.game.physics.arcade.overlap(app.bullets, app.smallAliensLeft[i], app.collisionHandlerLevelFourSmall, null, this);
                app.game.physics.arcade.overlap(app.smallAliensLeft[i], app.player, app.enemyHitsPlayerLevelOne, null, this);
            }

            for(i = 0; i < app.smallAliensRight.length; i++){

                app.game.physics.arcade.overlap(app.bullets, app.smallAliensRight[i], app.collisionHandlerLevelFourSmall, null, this);
                app.game.physics.arcade.overlap(app.smallAliensRight[i], app.player, app.enemyHitsPlayerLevelOne, null, this);
            }

            for(i = 0; i < app.smallAliensDown.length; i++){

                app.game.physics.arcade.overlap(app.bullets, app.smallAliensDown[i], app.collisionHandlerLevelFourSmall, null, this);
                app.game.physics.arcade.overlap(app.smallAliensDown[i], app.player, app.enemyHitsPlayerLevelOne, null, this);
            }
            for(i = 0; i < app.smallAliensUp.length; i++){

                app.game.physics.arcade.overlap(app.bullets, app.smallAliensUp[i], app.collisionHandlerLevelFourSmall, null, this);
                app.game.physics.arcade.overlap(app.smallAliensUp[i], app.player, app.enemyHitsPlayerLevelOne, null, this);
            }
        }

        if ( app.levelCounter === 7 ) {
            app.game.physics.arcade.overlap(app.bullets, app.aliens, app.collisionHandlerLevelSeven, null, this);

            if ( app.aliens.countLiving() === 0 ) {
                app.toNextLevel(app.createLevelEight);
            }
        }

        if ( app.levelCounter === 8 ) {

            app.game.physics.arcade.overlap(app.bullets, app.aliens, app.collisionHandlerLevelEight, null, this);

            if ( app.aliens.countLiving() === 0 ) {
                app.toNextLevel(app.createLevelEight);
            }
        }

            app.game.physics.arcade.overlap(app.enemyBullets, app.player, app.enemyHitsPlayerLevelOne, null, this);
            app.game.physics.arcade.overlap(app.aliens, app.player, app.enemyHitsPlayerLevelOne, null, this);


        // SCORES AND LIVES: -KANE

        $('.gameLives').text( "Lives: "+lifeCalculator() );
        $('.gameScore').text("Score: "+app.score)

        if (app.lives.countLiving() < 1) {
            $("#saveScore").show();
        }
        else {
            $("#saveScore").hide();
        }

    }

}