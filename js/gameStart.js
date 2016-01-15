var app = app || {};

$(document).ready(function(){

  app.game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: app.preload, create: app.create, update: app.update, render: app.render });

});

app.preload = function() {

    app.game.load.image('bullet', 'assets/bullet.png');
    app.game.load.image('enemyBullet', 'assets/enemy-bullet.png');
    app.game.load.spritesheet('invader', 'assets/invader32x32x4.png', 32, 32);
    app.game.load.image('ship', 'assets/player.png');
    app.game.load.spritesheet('kaboom', 'assets/explode.png', 128, 128);
    app.game.load.image('starfield', 'assets/starfield.png');
   

}

app.render = function() {

    // for (var i = 0; i < aliens.length; i++)
    // {
    //     game.debug.body(aliens.children[i]);
    // }

}