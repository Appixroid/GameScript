function loopForEver(action)
{
    action();
    setTimeout(function() { loopForEver(action);}, 17);
}

function newGame(name, init, update, background = "")
{
    document.title = name;
    document.body.style.overflow = "hidden";
    document.body.style.width = "100%";
    document.body.style.height = "100%";

    setBackground(background);

    init();
    loopForEver(update);
}

function setBackground(background)
{
    document.body.style.background = "url(" + background + ") no-repeat center center fixed";
    document.body.style.backgroundSize = "cover";
}

function getGameWidth()
{
	return window.innerWidth;
}

function getGameHeight()
{
	return window.innerHeight;
}
