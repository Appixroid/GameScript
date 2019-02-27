class Label extends DisplayedEntity
{
	constructor(text, x = 0, y = 0, width = 0, height = 0, visible = true, depth = 0)
	{
		super(x, y, width, height, visible, depth);
		
		this.text = text;
		
		this.dom = document.createElement("p");
		this.dom.style.position = "absolute";
		
		this.dom.innerHTML = text;
		this.dom.style.padding = "0";
		this.dom.style.margin = "0";
        this.dom.style.width = this.getWidth() + "px";
        this.dom.style.height = this.getHeight() + "px";
        this.dom.style.position = "absolute";
        this.dom.style.left = this.getX() + "px";
        this.dom.style.top = this.getY() + "px";
        this.dom.style.zIndex = depth;
        this.dom.style.display = this.visible ? "block" : "none";

        document.body.appendChild(this.dom);
	}
	
	getText() { return this.text; }
	
	setText(newText)
	{
		this.text = newText;
		this.dom.innerHTML = newText;
	}
	
	appendText(append)
	{
		this.setText(this.getText() + append);
	}
}
