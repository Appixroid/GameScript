class TexturedEntity extends DisplayedEntity
{
    constructor(x = 0, y = 0, width = 0, height = 0, image = "", visible = true, depth = 0)
    {
    	super(x, y, width, height, visible, depth);
        
        this.dom = document.createElement("img");
        this.dom.classList.add("textured-entity");
        this.dom.src = image;
        this.dom.width = width;
        this.dom.height = height;
        this.dom.style.position = "absolute";
        this.dom.style.left = this.getX() + "px";
        this.dom.style.top = this.getY() + "px";
        this.dom.style.zIndex = depth;
        this.dom.style.display = this.visible ? "block" : "none";

        document.body.appendChild(this.dom);

        this.animating = false;
        this.currentFrame = 0;
        this.animation = new Array();
        this.frameDelay = 0;
    }

    setSprite(image) { this.dom.src = image; }

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
}
