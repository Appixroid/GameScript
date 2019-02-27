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

/**
 * Game class for general game function
 */
class Game
{
    /**
     * Start a new game with the given name.
     * the init function is called once at the game launching, an update function called every 17ms (~60 call per seconds) and an optional default background
     */
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

    /**
     * Set the image at the given path as the background of the current game
     */
    static setBackground(background)
    {
        document.getElementById("background").src = background;
    }

    /**
     * Return the width of the current game
     */
    static getGameWidth()
    {
    	return window.innerWidth;
    }

    /**
     * Return the height of the current game
     */
    static getGameHeight()
    {
    	return window.innerHeight;
    }
}