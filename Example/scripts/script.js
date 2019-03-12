function init()
{
    new GameState().init();
    
    States.startsWith("game");
}

function update()
{
   	States.getCurrentState().update();
}

Game.newGame("Test", init, update);
