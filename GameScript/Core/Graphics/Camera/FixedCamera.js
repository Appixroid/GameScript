/**
 * FixedCamera class, it's a camera centered on an entity
 */
class FixedCamera extends Camera
{
	/**
	 * Build a FixedCamera
	 * entity : the entity to be fixed on
	 */
	constructor(entity)
	{
		super(entity.getX(), entity.getY());
		this.entity = entity;
	}
	
	/**
	 * Update the view with the FixedCamera
	 */
	update()
	{
		this.setOriginX(this.entity.getX());
		this.setOriginY(this.entity.getY());
		
		super.update();	
	}
}
