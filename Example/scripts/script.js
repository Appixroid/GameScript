var player;

function init()
{
    player = new Player(150, 150, 50, 100, "assets/test.png");
    
    player.addEventListener("keydown", function(e){
    	switch(e.code)
    	{
    		case "ArrowLeft":
    			player.speed = -5;
    			break;
    											   	   			
    		case "ArrowRight":
    			player.speed = 5;
    			break;
		}
	});
	
	player.addEventListener("keyup", function(e){
		if(e.code == "ArrowLeft" || e.code == "ArrowRight")
		{
			player.speed = 0;
		}
	});

	player.update = function(){
		player.move(player.speed, 0);
	};
}

function update()
{
    player.update();
}

newGame("Test", init, update, "assets/background.png");
