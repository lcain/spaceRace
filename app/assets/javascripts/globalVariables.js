var app = app || {};

app.player;
app.playerVelocity = 200;
app.aliens;
app.aliensVelocity = 1;
app.aliensSpawnTime;
app.bullets;
app.bulletTime = 0;
app.bulletVelocity = 200;
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
app.enemySeekerTimer = 0;
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

// -- These are the small alien split for level four/five/six/seven.

app.smallAliensLeft = [];
app.smallAliensRight = [];
app.smallAliensDown = [];
app.smallAliensUp = [];


// -- Alien shooter bullets

app.alienShooterbullets;
app.alienShooterbulletTime = 0;
app.alienShooterbulletVelocity = 200;
app.alienShooterbulletFireRate = 1000;

// Missiles

app.alienMissilebullets;
app.alienMissilebulletTime = 0;
app.alienMissilebulletVelocity = 200;
app.alienMissilebulletFireRate = 1000;

app.alienMissileArray = [];
app.alienMissileShipArray = [];