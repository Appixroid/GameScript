class Player extends TexturedEntity
{
	constructor(x = 0, y = 0, width = 0, height = 0, image = "")
	{
		super(x, y, width, height, image);

		this.speedX = 0;
		this.speedY = 0;
	}

	isMoving()
	{
		return this.speedX != 0 || this.speedY != 0;
	}

	static moveSpeed()
	{
		return 5;
	}
}
