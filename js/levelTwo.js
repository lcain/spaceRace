var app = app || {};

app.createAliensLevelTwo = function() {

    for (var y = 0; y < 5; y++)
    {

            var alien = app.aliens.create(0, y * 100, 'invader');
            alien.anchor.setTo(0.5, 0.5);
            // alien.animations.add('fly', [ 0, 1, 2, 3 ], 20, true);
            // alien.play('fly');
            alien.body.moves = false;

    }

    app.aliens.x = 400;
    app.aliens.y = -500;

    //  All this does is basically start the invaders moving. Notice we're moving the Group they belong to, rather than the invaders directly.
    // var tween = app.game.add.tween(app.aliens).to( { y: 200 }, 2000, Phaser.Easing.Linear.None, true, 0, 1000, true);

    // // //  When the tween loops it calls descend
    // tween.onLoop.add(app.descendLevelOne, this);


    app.game.time.events.loop(Phaser.Timer.SECOND * .01, app.descendLevelOne, this);

}

app.setupInvaderLevelTwo = function(invader) {


    invader.anchor.x = 0.4;
    invader.anchor.y = 0.5;
    invader.animations.add('kaboom');

}

app.descendLevelTwo = function() {


    app.aliens.y += 1;



    _.each(app.aliens.children, function(alien) {
        if (alien.world.y > app.game.world.bounds.bottom) {
            alien.kill();
        }
    });

}



app.collisionHandlerLevelTwo = function(bullet, alien) {


    //  When a bullet hits an alien we kill them both
    bullet.kill();
    alien.kill();

    //AUDIO enemy is hit by bullet -K

    soundCall = new Howl({
    urls: [playSound("enemyHit")]
    }).play();

    //  Increase the score
    app.score += 20;
    app.scoreText.text = app.scoreString + app.score;

    //  And create an explosion :)
    var explosion = app.explosions.getFirstExists(false);
    explosion.reset(alien.body.x, alien.body.y);
    explosion.play('kaboom', 30, false, true);

    if (app.aliens.countLiving() == 0)
    {
        app.score += 1000;
        app.scoreText.text = app.scoreString + app.score;

        app.enemyBullets.callAll('kill',this);
        app.stateText.text = " It's dangerous \n  to go alone. \n   Try these: \n     ⍃   ⍄";
        app.stateText.visible = true;

        //the "click to restart" handler
        app.game.input.onTap.addOnce(app.restart,this);

    }

}


app.enemyHitsPlayerLevelTwo= function(player,bullet) {


    bullet.kill();

    //AUDIO Player is hit sound
    soundCall = new Howl({
    urls: [playSound("playerHit")]
    }).play();


    live = app.lives.getFirstAlive();

    if (live)
    {
        live.kill();
    }

    //  And create an explosion :)
    var explosion = app.explosions.getFirstExists(false);
    explosion.reset(app.player.body.x, app.player.body.y);
    explosion.play('kaboom', 30, false, true);

    // When the player dies
    if (app.lives.countLiving() < 1)
    {
        app.player.kill();
        app.enemyBullets.callAll('kill');

        app.stateText.text="  GAME OVER \n Click to restart";
        app.stateText.visible = true;

        //the "click to restart" handler
        app.game.input.onTap.addOnce(app.restart,this);

        //AUDIO - Game over -k

        soundCall = new Howl({
        urls: [playSound("gameOver")]
        }).play();
    }

}


app.enemyFiresLevelTwo = function() {

    //  Grab the first bullet we can from the pool
    app.enemyBullet = app.enemyBullets.getFirstExists(false);

    app.livingEnemies.length=0;

    app.aliens.forEachAlive(function(alien){

        // put every living enemy in an array
        app.livingEnemies.push(alien);
    });


    if (app.enemyBullet && app.livingEnemies.length > 0)
    {

        var random=app.game.rnd.integerInRange(0,app.livingEnemies.length-1);

        // randomly select one of them
        var shooter=app.livingEnemies[random];
        // And fire the bullet from this enemy
        app.enemyBullet.reset(shooter.body.x, shooter.body.y);

        app.game.physics.arcade.moveToObject(app.enemyBullet,app.player,120);
        app.firingTimer = app.game.time.now + 2000;
    }

}


app.fireBulletLevelTwo = function() {

    //  To avoid them being allowed to fire too fast we set a time limit
    if (app.game.time.now > app.bulletTime)
    {
        //  Grab the first bullet we can from the pool
        var bullet = app.bullets.getFirstExists(false);

        if (bullet)
        {
            //  And fire it
            bullet.reset(app.player.x, app.player.y);
            bullet.body.velocity.y = -200;
            app.bulletTime = app.game.time.now + 1000;

            //AUDIO Player PEWPEWPEW sounds etc. -K
            soundCall = new Howl({
            urls: [playSound("playerShot")]
            }).play();
        }
    }

}

// app.resetBulletLevelTwo = function(bullet) {

//     //  Called if the bullet goes out of the screen
//     _.each(app.bullets.children, function(bullet) {
//         if (bullet.world.y > app.game.world.bounds.top) {
//             bullet.kill();
//         }
//     });


// }
