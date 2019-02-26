class Player extends Entity
{
	constructor(x = 0, y = 0, width = 0, height = 0, image = "")
	{
		super(x, y, width, height, image);
		
		this.speed = 0;
	}
}
