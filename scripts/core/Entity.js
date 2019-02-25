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

    isOutOfScreen()
    {
        return this.x + this.width < 0 || this.x > window.innerWidth || this.y + this.height < 0 || this.y > window.innerHeight;
    }

    update() { }
}
