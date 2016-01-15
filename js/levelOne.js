var app = app || {};

app.createAliens = function() {

    for (var y = 0; y < 4; y++)
    {
        for (var x = 0; x < 10; x++)
        {
            var alien = app.aliens.create(x * 48, y * 50, 'invader');
            alien.anchor.setTo(0.5, 0.5);
            alien.animations.add('fly', [ 0, 1, 2, 3 ], 20, true);
            alien.play('fly');
            alien.body.moves = false;
        }
    }

    app.aliens.x = 100;
    app.aliens.y = 50;

    //  All this does is basically start the invaders moving. Notice we're moving the Group they belong to, rather than the invaders directly.
    var tween = app.game.add.tween(app.aliens).to( { x: 200 }, 2000, Phaser.Easing.Linear.None, true, 0, 1000, true);

    // // //  When the tween loops it calls descend
    tween.onLoop.add(app.descend, this);



}

app.setupInvader = function(invader) {

    invader.anchor.x = 0.5;
    invader.anchor.y = 0.5;
    invader.animations.add('kaboom');

}

app.descend = function() {

    app.aliens.y += 10;

}

app.collisionHandler = function(bullet, alien) {

    //  When a bullet hits an alien we kill them both
    bullet.kill();
    alien.kill();

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
        app.stateText.text = " You Won, \n Click to restart";
        app.stateText.visible = true;

        //the "click to restart" handler
        app.game.input.onTap.addOnce(app.restart,this);
    }

}

app.enemyHitsPlayer = function(player,bullet) {
    
    bullet.kill();

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
    }

}

app.enemyFires = function() {

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

app.fireBullet = function() {

    //  To avoid them being allowed to fire too fast we set a time limit
    if (app.game.time.now > app.bulletTime)
    {
        //  Grab the first bullet we can from the pool
        var bullet = app.bullets.getFirstExists(false);

        if (bullet)
        {
            //  And fire it
            bullet.reset(app.player.x, app.player.y + 8);
            bullet.body.velocity.y = -400;
            app.bulletTime = app.game.time.now + 200;
        }
    }
   
}

app.resetBullet = function(bullet) {

    //  Called if the bullet goes out of the screen
    bullet.kill();

}
