var app = app || {};

app.player;
app.aliens;
app.bullets;
app.bulletTime = 0;
app.cursors;
app.fireButton;
app.explosions;
app.starfield;
app.score = 0;
app.scoreString = '';
app.scoreText;
app.lives;
app.enemyBullet;
app.firingTimer = 0;
app.stateText;
app.livingEnemies = [];

//----- Use this to count every level transition, this will be what any Jquery dynamic styles will base themselves on. -Kane
app.levelCounter = 0;