class Scene1 extends Phaser.Scene
{
    constructor ()
    {
        super('sceneone');   
    }

    preload ()
    {
        this.load.image('snail', 'assets/snail.jpg');
        this.load.image('roly', 'assets/roly.png');
    }

    create () 
    {
        this.cameras.main.setBackgroundColor('#737373');
        this.add.text(90, 200, "Roly Poly: To the End", {color: '#FFFFFF'}).setFontSize(25);
        this.input.on('pointerdown', () => this.scene.start('sceneB'));
        
    }

    update () 
    {
       
    }
}

class Scene2 extends Phaser.Scene
{
    constructor ()
    {
        super({ key: 'scene2' });
    }  

    create ()
    {
        this.input.on('pointerdown', () => this.scene.start('scene3'));
    }
}

class Scene3 extends Phaser.Scene
{
    constructor ()
    {
        super({ key: 'scene3' });
    }  

    create ()
    {
        this.input.on('pointerdown', () => this.scene.start('scene4'));
    }
}

class Scene4 extends Phaser.Scene
{
    constructor ()
    {
        super({ key: 'scene4' });
    }  

    create ()
    {
        this.input.on('pointerdown', () => this.scene.start('scene5'));
    }
}

class Scene5 extends Phaser.Scene
{
    constructor ()
    {
        super({ key: 'scene5' });
    }  

    create ()
    {
        this.input.on('pointerdown', () => this.scene.start('scene6'));
    }
}

class Scene6 extends Phaser.Scene
{
    constructor ()
    {
        super({ key: 'scene6' });
    }  

    create ()
    {
        this.input.on('pointerdown', () => this.scene.start('scene7'));
    }
}


class Scene7 extends Phaser.Scene
{
    constructor ()
    {
        super({ key: 'scene7' });
    }  

    create ()
    {
        this.input.on('pointerdown', () => this.scene.start('scene8'));
    }
}

class Scene8 extends Phaser.Scene
{
    constructor ()
    {
        super({ key: 'scene8' });
    }  

    create ()
    {
        this.input.on('pointerdown', () => this.scene.start('scene9'));
    }
}

class Scene9 extends Phaser.Scene
{
    constructor ()
    {
        super({ key: 'scene9' });
    }  

    create ()
    {
        this.input.on('pointerdown', () => this.scene.start('scene10'));
    }
}

class Scene10 extends Phaser.Scene
{
    constructor ()
    {
        super({ key: 'scene10' });
    }  

    create ()
    {
        this.input.on('pointerdown', () => this.scene.start('scene11'));
    }
}

// victory screen
class Scene11 extends Phaser.Scene
{
    constructor ()
    {
        super({ key: 'scene11' });
    }  

    create ()
    {
    }
}


let config = {
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080,
    },

    scene: [Scene1, Scene2, Scene3, Scene4, Scene5, Scene6, Scene7, Scene8, Scene9, Scene10, Scene11],
    title: "Prototype",
    physics: {
        default: 'arcade',
        arcade: {
           // gravity: {y: 300}
        }
    }
}

const game = new Phaser.Game(config);
