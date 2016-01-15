var app = app || {};

$(document).ready(function(){

  app.game = new Phaser.Game(800, 700   , Phaser.AUTO, 'phaser-example', { preload: app.preload, create: app.create, update: app.update, render: app.render });

});

app.preload = function() {

    app.game.load.image('bullet', 'assets/bullet.png');
    app.game.load.image('enemyBullet', 'assets/enemy-bullet.png');
    app.game.load.spritesheet('invader', 'assets/invader32x32x4.png', 32, 32);
    app.game.load.image('ship', 'assets/player.png');
    app.game.load.spritesheet('kaboom', 'assets/explode.png', 128, 128);
    app.game.load.image('starfield', 'assets/starfield.png');
   
    // LEAVE THIS AT THE END - IT ASSIGNS THE CLASS FOR CSS AFTER EVERYTHING IS CREATED ON PAGE. - KANE
    $('body canvas').addClass("gameWindow");
    $('<div class="gameStatus">'+'<p class="scoreText gameScore">'+app.score+'</p>'+'<p class="scoreText gameLives"> 3 </p>'+'</div>').appendTo('body');

}

app.render = function() {

    // for (var i = 0; i < aliens.length; i++)
    // {
    //     game.debug.body(aliens.children[i]);
    // }

}