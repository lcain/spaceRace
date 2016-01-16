var app = app || {};

$(document).ready(function(){

  app.game = new Phaser.Game(800, 700   , Phaser.AUTO, 'phaser-example', { preload: app.preload, create: app.create, update: app.update, render: app.render });

});

app.preload = function() {

    app.game.load.image('bullet', 'assets/LevelOne/bullet.png');
    app.game.load.image('enemyBullet', 'assets/enemy-bullet.png');
    app.game.load.spritesheet('invader', 'assets/LevelOne/asteroid.png');
    app.game.load.image('ship', 'assets/LevelOne/ship.png');
    app.game.load.spritesheet('kaboom', 'assets/LevelOne/explode.png', 128, 128);
    app.game.load.image('starfield', 'assets/LevelOne/background.png');
   
    // LEAVE THIS AT THE END - IT ASSIGNS THE CLASS FOR CSS AFTER EVERYTHING IS CREATED ON PAGE. - KANE
    $('body canvas').addClass("gameWindow");
    $('<div class="gameStatus">'+'<p class="scoreText gameScore">'+app.score+'</p>'+'<p class="scoreText gameLives"> 3 </p>'+'</div>').appendTo('body');
    $('<div class="settings"><div class="toggleSound"><p>Mute</p></div></div>').appendTo('.gameStatus');

}

app.render = function() {

    // for (var i = 0; i < aliens.length; i++)
    // {
    //     game.debug.body(aliens.children[i]);
    // }

}