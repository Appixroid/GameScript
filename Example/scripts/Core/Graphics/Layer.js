/**
 * Array of Layer of the current game
 */
var layers = new Array();

/**
 * Layers class to simply manage layers of the current game
 */
class Layers
{
    /**
     * Create a new Layer in the current game
     * name : name of the new layer
     * layerImage : image of the layer (empty by default)
     * fullSize : true if the layer is adapted at the game size (false by default)
     * visible : true if the layer must be visible (true by default)
     * depth : the depth of the layer, the greater value is on the top (0 by default)
     */
    static createLayer(name, layerImage = "", fullSize = false, visible = true, depth = 0)
    {
        let layer = new Layer(name, layerImage, fullSize, visible, depth);
        layers.push(layer);
        layer.addToGame();
    }

    /**
     * Return the layer with the given name, null if it not exist
     */
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

/**
 * Layer class representing a layer image of the game
 */
class Layer
{
    /**
     * Build a new Layer
     * name : name of the new layer
     * layerImage : image of the layer (empty by default)
     * fullSize : true if the layer is adapted at the game size (false by default)
     * visible : true if the layer must be visible (true by default)
     * depth : the depth of the layer, the greater value is on the top (0 by default)
     */
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

    /**
     * Show the layer in the game
     */
    addToGame()
    {
        document.body.appendChild(this.layer);
    }

    /**
     * Return true if the layer is visible, false else
     */
    isVisible() { return this.visible; }

    /**
     * Change the visibility of the layer
     */
    setVisible(visible)
    {
        this.visible = visible;
        this.layer.style.zIndex = (visible ? this.depth : -9999);
    }

    /**
     * Return the depth of the layer
     */
    getDepth() { return this.depth; }

    /**
     * Change the depth of the layer
     */
    setDepth(depth)
    {
        this.depth = depth;
        if(this.visible)
        {
            this.layer.style.zIndex = depth;
        }
    }

    /**
     * Change the image of the layer
     */
    setImage(layerImage)
    {
        this.layer.src = layerImage;
    }

    /**
     * Return true if the layer take the fullsize of the game, false else
     */
	isFullSize()
	{
		return this.fullSize;
	}

    /**
     * Change if the layer take the full size
     */
	setFullSize(fullSize)
	{
		this.fullSize = fullSize;
		this.layer.style.width = (fullSize ? "100%" : "auto");
		this.layer.style.height = (fullSize ? "100%" : "auto");
	}

    /**
     * Return the name of the layer
     */
    getName() { return this.name; }

    /**
     * Change the name of the layer
     */
    setName(name)
    {
        this.name = name;
        this.layer.id = name;
    }

    /**
     * Return an array with [r, g, b, a] data of the pixel at the given coordinate
     */
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
