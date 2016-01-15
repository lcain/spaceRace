var app = app || {};

app.update = function() {

    //  Scroll the background
    app.starfield.tilePosition.y += 2;

    if (app.player.alive)
    {
        //  Reset the app.player, then check for movement keys
        app.player.body.velocity.setTo(0, 0);

        if (app.cursors.left.isDown)
        {
            app.player.body.velocity.x = -200;
        }
        else if (app.cursors.right.isDown)
        {
            app.player.body.velocity.x = 200;
        }

        //  Firing?
        if (app.fireButton.isDown)
        {
            app.fireBullet();
        }

        if (app.game.time.now > app.firingTimer)
        {
            app.enemyFires();
        }

        //  Run collision
        app.game.physics.arcade.overlap(app.bullets, app.aliens, app.collisionHandler, null, this);
        app.game.physics.arcade.overlap(app.enemyBullets, app.player, app.enemyHitsPlayer, null, this);
    }

}