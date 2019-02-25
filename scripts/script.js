var testEntity;

function init()
{
    testEntity = new Entity(150, 150, 50, 100, "assets/test.png");
    testEntity.update = function() {
                                        if(this.getX()+this.getWidth()+5 < window.innerWidth)
                                        {
                                            this.move(5, 0);
                                        }
                                   }
}

function update()
{
    testEntity.update();
}

newGame("Test", init, update, "assets/background.png");
