/***
 ********************************************************
 ** Base Script of GameScript with the general Game class
 **
 ********************************************************
 **/

/**
 * Loop for ever over action() with a call every 17ms (~60 call per seconds)
 */
function loopForEver(action)
{
    action();
    setTimeout(loopForEver, 17, action);
}

class Game
{
    static newGame(name, init, update, background = "")
    {
        document.title = name;
        document.body.style.overflow = "hidden";
        document.body.style.width = "100%";
        document.body.style.height = "100%";

        new Layer("background", background, true, true, -1).addToGame();


        init();
        loopForEver(update);
    }

    static setBackground(background)
    {
        document.getElementById("background").src = background;
    }

    static getGameWidth()
    {
    	return window.innerWidth;
    }

    static getGameHeight()
    {
    	return window.innerHeight;
    }
}
