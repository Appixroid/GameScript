class DisplayedEntity extends Entity
{
    constructor(x = 0, y = 0, width = 0, height = 0, visible = true, depth = 9999)
    {
    	super(x, y, width, height, visible, depth);
    	
        this.dom = null;
    }
    
    setX(newX)
    { 
    	super.setX(newX); 
    	this.dom.style.left = this.x + "px";
    }
    setY(newY)
    {
    	super.setY(newY); 
    	this.dom.style.top = this.y + "px";
    }
    
    setWidth(newWidth)
    {
    	super.setWidth(newWidth);
    	this.dom.width = this.width;
    }
    
    setHeight(newHeight)
    {
    	super.setHeight(newHeight); 
    	this.dom.height = this.height;
    }

    setVisible(visible)
    {
        super.setVisible(visible);
        this.dom.style.display = this.visible ? "block" : "none";
    }

    setDepth(depth)
    {
        super.setDepth(depth);
        this.dom.style.zIndex = depth;
    }
}
