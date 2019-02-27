var layers = new Array();

class Layers
{
    static createLayer(name, layerImage = "", fullSize = false, visible = true, depth = 0)
    {
        let layer = new Layer(name, layerImage, fullSize, visible, depth);
        layers.push(layer);
        layer.addToGame();
    }

    static getLayer(layerName)
    {
        let i = 0;
        let layer = null;

        while(i < layers.length && layer == null)
        {
            layer = (layers[i].getName() == layerName ? layers[i] : null);
            i++;
        }

        return layer;
    }
}

class Layer
{
    constructor(name, layerImage = "", fullSize = false, visible = true, depth = 0)
    {
        this.name = name;
        this.fullSize = fullSize;
        this.visible = visible;
        this.depth = depth;

        this.layer = document.createElement("img");

        this.layer.classList.add("layer");
        this.layer.id = name;
        this.layer.src = layerImage;

        this.layer.style.position = "absolute";
        this.layer.style.top = "0";
        this.layer.style.left = "0";
        this.layer.style.bottom = "0";
        this.layer.style.right = "0";
        
        this.layer.style.width = (fullSize ? "100%" : "auto");
		this.layer.style.height = (fullSize ? "100%" : "auto");
        
        this.layer.style.zIndex = (visible ? this.depth : -9999);
    }

    addToGame()
    {
        document.body.appendChild(this.layer);
    }

    isVisible() { return this.visible; }

    setVisible(visible)
    {
        this.visible = visible;
        this.layer.style.zIndex = (visible ? this.depth : -9999);
    }

    getDepth() { return this.depth; }

    setDepth(depth)
    {
        this.depth = depth;
        if(this.visible)
        {
            this.layer.style.zIndex = depth;
        }
    }

    setImage(layerImage)
    {
        this.layer.src = layerImage;
    }

	isFullSize()
	{
		return this.fullSize;
	}

	setFullSize(fullSize)
	{
		this.fullSize = fullSize;
		this.layer.style.width = (fullSize ? "100%" : "auto");
		this.layer.style.height = (fullSize ? "100%" : "auto");
	}

    getName() { return this.name; }

    setName(name)
    {
        this.name = name;
        this.layer.id = name;
    }

    getPixel(x, y)
    {  	
		let canvas = document.createElement('canvas');
		canvas.width = this.layer.width;
		canvas.height = this.layer.height;
		this.context = canvas.getContext("2d");
       	canvas.getContext("2d").drawImage(this.layer, 0, 0, this.layer.width, this.layer.height);
       	
        return canvas.getContext("2d").getImageData(x, y, 1, 1).data;
    }
}
