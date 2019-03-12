class Player extends TexturedEntity
{
	constructor(x = 0, y = 0, width = 0, height = 0, image = "", visible = true, depth = 0)
	{
		super(x, y, width, height, image, visible, depth);

		this.speedX = 0;
		this.speedY = 0;
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

	static moveSpeed()
	{
		return 5;
	}
}
