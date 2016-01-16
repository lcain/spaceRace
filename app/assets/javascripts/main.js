var randomizer = function(x,y){
  for (var i = 0; i < app.aliens.children.length; i++){
    app.aliens.children[i].position.x = _.random(x,y);
  }
}