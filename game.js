class SceneA extends Phaser.Scene
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

class SceneB extends Phaser.Scene
{
    constructor ()
    {
        super({ key: 'sceneB' });
    }  

    create ()
    {
        this.input.on('pointerdown', () => this.scene.start('sceneC'));
    }
}

class SceneC extends Phaser.Scene
{
    constructor ()
    {
        super({ key: 'sceneC' });
    }  

    create ()
    {
        this.input.on('pointerdown', () => this.scene.start('sceneD'));
    }
}

class SceneD extends Phaser.Scene
{
    constructor ()
    {
        super({ key: 'sceneD' });
    }  

    create ()
    {
        this.input.on('pointerdown', () => this.scene.start('sceneE'));
    }
}

class SceneE extends Phaser.Scene
{
    constructor ()
    {
        super({ key: 'sceneE' });
    }  

    create ()
    {
        this.input.on('pointerdown', () => this.scene.start('sceneF'));
    }
}

class SceneF extends Phaser.Scene
{
    constructor ()
    {
        super({ key: 'sceneF' });
    }  

    create ()
    {
        this.input.on('pointerdown', () => this.scene.start('sceneG'));
    }
}


class SceneG extends Phaser.Scene
{
    constructor ()
    {
        super({ key: 'sceneG' });
    }  

    create ()
    {
        this.input.on('pointerdown', () => this.scene.start('sceneH'));
    }
}

class SceneH extends Phaser.Scene
{
    constructor ()
    {
        super({ key: 'sceneH' });
    }  

    create ()
    {
        this.input.on('pointerdown', () => this.scene.start('sceneI'));
    }
}

class SceneI extends Phaser.Scene
{
    constructor ()
    {
        super({ key: 'sceneI' });
    }  

    create ()
    {
        this.input.on('pointerdown', () => this.scene.start('sceneJ'));
    }
}

class SceneJ extends Phaser.Scene
{
    constructor ()
    {
        super({ key: 'sceneJ' });
    }  

    create ()
    {
        this.input.on('pointerdown', () => this.scene.start('sceneK'));
    }
}

// victory screen
class SceneK extends Phaser.Scene
{
    constructor ()
    {
        super({ key: 'sceneK' });
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

    scene: [SceneA, SceneB, SceneC, SceneD, SceneE, SceneF, Scene G, Scene H, Scene I, Scene J, Scene K],
    title: "Prototype",
    physics: {
        default: 'arcade',
        arcade: {
           // gravity: {y: 300}
        }
    }
}

const game = new Phaser.Game(config);
