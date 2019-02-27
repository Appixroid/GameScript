class Entity
{
    constructor(x = 0, y = 0, width = 0, height = 0, visible = true, depth = 0)
    {
        this.x = x;
        this.y = y;
        
        this.width = width;
        this.height = height;
        
        this.visible = visible;
        this.depth = depth;
    }

    getX() { return this.x; }
    setX(newX) { this.x = newX;}

    getY() { return this.y; }
    setY(newY) { this.y = newY;}

    getWidth() { return this.width; }
    setWidth(newWidth) {this.width = newWidth;};

    getHeight() { return this.height; }
    setHeight(newHeight) {this.height = newHeight;};

	isVisible() { return this.visible; }
	setVisible(visible) { this.visible = visible; }
    
    getDepth() { return this.depth; }
    
    setDepth(depth) { this.depth = depth; }

    move(moveX, moveY)
    {
        this.setX(this.getX() + moveX);
        this.setY(this.getY() + moveY);
    }

    isIn(testX, testY)
    {
        return this.x < testX && this.x + this.width > testX && this.y < testY && this.y + this.height > testY;
    }

    collideWithEntity(entity)
    {
        return this.x < entity.x + entity.width && this.x + this.width > entity.x && this.y < entity.y + entity.height && this.y + this.height > entity.y;
    }

    isOutOfGameWindow()
    {
        return this.x + this.width < 0 || this.x > getGameWidth() || this.y + this.height < 0 || this.y > getGameHeight();
    }

	addEventListener(triggeredEvent, callback)
	{
		document.body.addEventListener(triggeredEvent, callback);
	}

	removeEventListener(triggeredEvent, callback)
	{
		document.body.removeEventListener(triggeredEvent, callback);
	}

    update() { }
}
