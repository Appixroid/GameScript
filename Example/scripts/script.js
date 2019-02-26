var player;

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

function playerStop(e, force = false)
{
	if(player.isMoving())
	{
		if(force || e.code == "ArrowLeft")
		{
			player.speedX = 0;
			player.stopAnimation();
			player.setSprite("assets/player_left_idle.png");
		}
		if(force || e.code == "ArrowRight")
		{
			player.speedX = 0;
			player.stopAnimation();
			player.setSprite("assets/player_right_idle.png");
		}
		if(force || e.code == "ArrowUp")
		{
			player.speedY = 0;
			player.stopAnimation();
			player.setSprite("assets/player_up_idle.png");
		}
		if(force || e.code == "ArrowDown")
		{
			player.speedY = 0;
			player.stopAnimation();
			player.setSprite("assets/player_down_idle.png");
		}
	}
}

function playerUpdate()
{
	if(Layers.getLayer("collision").getPixel(Math.floor(player.x + player.speedX), Math.floor(player.y + player.speedY))[3] == 255)
	{
		playerStop(null, true);
	}
	else
	{
		player.move(player.speedX, player.speedY);
	}
}


function init()
{
    player = new Player(Math.floor(Game.getGameWidth()/2), Math.floor(Game.getGameHeight()/2), 64, 64, "assets/player_down_idle.png");

    player.addEventListener("keydown", playerMove);
	player.addEventListener("keyup", playerStop);
	player.update = playerUpdate;

	Layers.createLayer("collision", "assets/collision_mask.png", false);
}

function update()
{
    player.update();
}

Game.newGame("Test", init, update, "assets/map.png");
