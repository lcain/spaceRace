var app = app || {};

app.restart = function() {

    //  A new level starts
    
    //resets the life count
    app.lives.callAll('revive');
    //  And brings the aliens back from the dead :)
    app.aliens.removeAll();
    app.createAliens();

    //revives the player
    app.player.revive();
    //hides the text
    app.stateText.visible = false;

    app.score = 0;
    app.scoreText.destroy();
    app.scoreText = app.game.add.text(10, 705, app.scoreString + app.score, { font: '25px Georgia', fill: '#fff' });
}





