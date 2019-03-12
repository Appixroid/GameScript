class Player extends TexturedEntity
{
	constructor()
	{
		super(Math.floor(Game.getGameWidth()/2), Math.floor(Game.getGameHeight()/2), 64, 64, "assets/player_down_idle.png", true, 0);

		this.speedX = 0;
		this.speedY = 0;
		
		this.addEventListener("keydown", this.playerMove);
		this.addEventListener("keyup", this.playerStop);
	}
	
	static moveSpeed()
	{
		return 5;
	}

	isMoving()
	{
		return this.speedX != 0 || this.speedY != 0;
	}
	
	update()
	{
		if(this.isMoving())
		{
			if(!this.collideWithLayer("collision", Math.floor(this.x + (this.width / 2) + this.speedX), Math.floor(this.y + (this.height / 2) + this.speedY)))
			{
				this.move(this.speedX, this.speedY);
			}
		}
	}
	
	playerMove(e)
	{
		if(!this.isMoving())
		{
			if(e.code == "ArrowLeft")
			{
				this.speedX = -Player.moveSpeed();
				this.speedY = 0;
				this.animate(new Array("assets/player_left_1.png", "assets/player_left_2.png", "assets/player_left_3.png", "assets/player_left_4.png"), 250);
			}
			else if(e.code == "ArrowRight")
			{
				this.speedX = Player.moveSpeed();
				this.speedY = 0;
				this.animate(new Array("assets/player_right_1.png", "assets/player_right_2.png", "assets/player_right_3.png", "assets/player_right_4.png"), 250);
			}

			if(e.code == "ArrowUp")
			{
				this.speedY = -Player.moveSpeed();
				this.speedX = 0;
				this.animate(new Array("assets/player_up_1.png", "assets/player_up_2.png", "assets/player_up_3.png", "assets/player_up_4.png"), 250);
			}
			else if(e.code == "ArrowDown")
			{
				this.speedY = Player.moveSpeed();
				this.speedX = 0;
				this.animate(new Array("assets/player_down_1.png", "assets/player_down_2.png", "assets/player_down_3.png", "assets/player_down_4.png"), 250);
			}
		}
	}
	
	playerStop()
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
}
