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

	static moveSpeed()
	{
		return 5;
	}
}
