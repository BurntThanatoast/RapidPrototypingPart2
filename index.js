class SceneA extends Phaser.Scene
{
    constructor ()
    {
        super({ key: 'sceneA' });
    }  

    create ()
    {
        this.input.on('pointerdown', () => this.scene.start('sceneB'));
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

    /*create ()
    {
        this.input.on('pointerdown', () => this.scene.start('sceneG'));
    }*/
}

