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

        Game.setBackground(background);

        init();
        loopForEver(update);
    }

    static setBackground(background)
    {
        document.body.style.background = "url(" + background + ") no-repeat center center fixed";
        document.body.style.backgroundSize = "cover";
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
