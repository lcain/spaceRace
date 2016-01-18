var app = app || {};

app.player;
app.playerVelocity = 200;
app.aliens;
app.bullets;
app.bulletTime = 0;
app.bulletVelocity = 0;
app.bulletFireRate = 1000;
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
app.canFire = true;


//----- Use this to count every level transition, this will be what any Jquery dynamic styles will base themselves on. -Kane
app.levelCounter = 1;

// --- This will keep track of the total amount of enemies killed.
app.totalKillCount = 0;

// --- These are for the split of asterids on collision -- Loretta

app.smallAliens = [];
app.smallAlienGroupCounter = 1;