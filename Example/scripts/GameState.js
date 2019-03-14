var camera;
var player;
var title;

class GameState extends BasicState
{
	constructor()
	{
		super("game");
	}
	
	init()
	{
		player = new Player(this);
	
		title = new Label(this, "<i>George</i>", player.getX(), player.getY()-33, 125, 33, true, 1);
	
		camera = new FixedCamera(player);

		Layers.createLayer("collision", "assets/collision_mask.png", false, false);
		Layers.createLayer("map", "assets/map.png", false, true, -1);
		
		this.finishInit();
	}
	
	update()
	{
		player.update();
		camera.update();
		title.setX(player.getX());
		title.setY(player.getY()-title.getHeight());
	}
}
