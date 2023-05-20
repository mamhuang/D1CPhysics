class Intro extends Phaser.Scene {
    constructor() {
        super('intro')
    }
    create(){
        this.add.text(50,50,"The Box").setFontSize(50)
        this.input.on('pointerdown', () => this.scene.start('level1'))
    }
}
class Level1 extends Phaser.Scene {
    constructor() {
        super('level1')
    }
    preload(){
        this.load.image('box', 'box.png')
        this.load.image('box2', 'box2.png')
    }
    create(){
        //this.add.sprite( 1000, 1000, 'box').setScale(.5)
        //this.physics.add.collider()
        /*
        const boxes = this.physics.add.group({
            defaultKey: 'box',
            
            collideWorldBounds: true
        });
        const boxes2 = this.physics.add.group({
            defaultKey: 'box2',
            collideWorldBounds: true
        })
        this.physics.world.gravity.y = 1000;
        //this.physics.add.image(1000, 1000, 'box').setScale(.5)
        //this.physics.add.image(1000, 500, 'box').setScale(.5)
        boxes.create(1000,1100).setScale(.5);
        boxes.create(900,600).setScale(.5);
        //boxes.create(1000,600).setScale(.5);
        boxes2.create(1000,200).setScale(.5);
        this.physics.add.collider(boxes)
        this.physics.add.collider(boxes, boxes2)
        */
        this.matter.add.image(1000,1000,'box').setScale(.5)
        this.matter.add.image(1000,500,'box').setScale(.5)
        this.matter.world.setBounds();
    }
}

const game = new Phaser.Game({
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080
    },
    scene: [Intro, Level1],
    title: "Adventure Game",
    audio: {disableWebAudio: true},
    physics: {
        default: 'matter',
        arcade: { debug: false }
    },
});
