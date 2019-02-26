class Entity
{
    constructor(x = 0, y = 0, width = 0, height = 0, image = "")
    {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        this.visible = true;

        this.sprite = document.createElement("img");
        this.sprite.src = image;
        this.sprite.width = width;
        this.sprite.height = height;
        this.sprite.style.position = "absolute";
        this.sprite.style.left = this.x + "px";
        this.sprite.style.top = this.y + "px";

        document.body.appendChild(this.sprite);

        this.animating = false;
        this.currentFrame = 0;
        this.animation = new Array();
        this.frameDelay = 0;
    }

    getX() { return this.x; }
    setX(newX) { this.x = newX; this.sprite.style.left = this.x + "px";}

    getY() { return this.y; }
    setY(newY) { this.y = newY; this.sprite.style.top = this.y + "px";}

    getWidth() { return this.width; }
    setWidth(newWidth) {this.width = newWidth; this.sprite.width = this.width;};

    getHeight() { return this.height; }
    setHeight(newHeight) {this.height = newHeight; this.sprite.height = this.height;};

    move(moveX, moveY)
    {
        this.setX(this.getX() + moveX);
        this.setY(this.getY() + moveY);
    }

    setSprite(image)
    {
    	this.sprite.src = image;
    }

    setVisible(visible)
    {
        this.visible = visible;
        this.sprite.style.display = this.visible ? "block" : "none";
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

	animate(imageArray, frameDelay, force = false)
	{
		if(!this.animating || force)
		{
			this.animating = true;
			this.currentFrame = 0;
			this.animation = imageArray;
			this.frameDelay = frameDelay;

			this.doAnimation(this);
		}
	}

	doAnimation(target = this)
    {
      	if(target.animating)
      	{
            target.setSprite(target.animation[target.currentFrame]);

            target.currentFrame++;
            if(target.currentFrame >= target.animation.length){ target.currentFrame = 0; }

       		setTimeout(target.doAnimation, target.frameDelay, target);
      	}
    }

	stopAnimation()
	{
		this.animating = false;
	}

	continueAnimation()
	{
		this.animating = true;
		this.doAnimation(this);
	}

	restartAnimation()
	{
		this.animating = true;
		this.currentFrame = 0;
		this.doAnimation(this);
	}

    update() { }
}
