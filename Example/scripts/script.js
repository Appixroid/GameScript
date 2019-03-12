var camera;
var player;
var title;

function playerMove(e)
{
	if(!player.isMoving())
	{
		if(e.code == "ArrowLeft")
	    {
	    	player.speedX = -Player.moveSpeed();
	    	player.speedY = 0;
	    	player.animate(new Array("assets/player_left_1.png", "assets/player_left_2.png", "assets/player_left_3.png", "assets/player_left_4.png"), 250);
	    }
	    else if(e.code == "ArrowRight")
	    {
	    	player.speedX = Player.moveSpeed();
	    	player.speedY = 0;
	    	player.animate(new Array("assets/player_right_1.png", "assets/player_right_2.png", "assets/player_right_3.png", "assets/player_right_4.png"), 250);
	    }

	    if(e.code == "ArrowUp")
	    {
	    	player.speedY = -Player.moveSpeed();
	    	player.speedX = 0;
	    	player.animate(new Array("assets/player_up_1.png", "assets/player_up_2.png", "assets/player_up_3.png", "assets/player_up_4.png"), 250);
	    }
	    else if(e.code == "ArrowDown")
	    {
	    	player.speedY = Player.moveSpeed();
	    	player.speedX = 0;
	    	player.animate(new Array("assets/player_down_1.png", "assets/player_down_2.png", "assets/player_down_3.png", "assets/player_down_4.png"), 250);
	    }
	}
}

function playerStop()
{
	if(player.isMoving())
	{
		if(player.speedX < 0)
		{
			player.speedX = 0;
			player.stopAnimation();
			player.setSprite("assets/player_left_idle.png");
		}
		else if(player.speedX > 0)
		{
			player.speedX = 0;
			player.stopAnimation();
			player.setSprite("assets/player_right_idle.png");
		}
		else if(player.speedY < 0)
		{
			player.speedY = 0;
			player.stopAnimation();
			player.setSprite("assets/player_up_idle.png");
		}
		else if(player.speedY > 0)
		{
			player.speedY = 0;
			player.stopAnimation();
			player.setSprite("assets/player_down_idle.png");
		}
	}
}


function init()
{
    player = new Player(Math.floor(Game.getGameWidth()/2), Math.floor(Game.getGameHeight()/2), 64, 64, "assets/player_down_idle.png", true, 0);

    player.addEventListener("keydown", playerMove);
	player.addEventListener("keyup", playerStop);
	
	title = new Label("<i>George</i>", player.getX(), player.getY()-33, 125, 33, true, 1);
	
	camera = new FixedCamera(player);

	Layers.createLayer("collision", "assets/collision_mask.png", false, false);
	Layers.createLayer("map", "assets/map.png", false, true, -1);
}

function update()
{
    player.update();
    camera.update();
    title.setX(player.getX());
    title.setY(player.getY()-title.getHeight());
}

Game.newGame("Test", init, update);
