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
        this.load.image('arrow', 'arrow.png')
        this.load.image('cursor', 'cursor.png')
        this.load.image('target', 'target.png')
    }
    create(){
        //this.add.sprite( 1000, 1000, 'box').setScale(.5)
        //this.physics.add.collider()
        
        const boxes = this.physics.add.group({
            defaultKey: 'box',
            
            collideWorldBounds: true
        });
        const boxes2 = this.physics.add.group({
            defaultKey: 'box2',
            collideWorldBounds: true
        })
        
        let box2 = this.physics.add.image(1000,200, 'box2').setScale(.5)
        box2.body.setMass(.1).setCollideWorldBounds(true).setGravityY(1000)
        //this.physics.add.image(1000, 1000, 'box').setScale(.5)
        //this.physics.add.image(1000, 500, 'box').setScale(.5)
        boxes.create(1000,1100).setScale(.5).setMass(.1).setGravityY(1000);
        boxes.create(900,600).setScale(.5).setMass(.1).setGravityY(1000);
        //boxes.create(1000,600).setScale(.5);
        //boxes2.create(1000,200).setScale(.5).setMass(.1).setGravityY(1000);
        this.physics.add.collider(boxes)
        this.physics.add.collider(boxes, box2)
        let target = this.physics.add.image(1500,1000, 'target')
        
        let arrow = this.physics.add.image(150, 800, 'arrow')
        this.physics.add.collider(boxes,arrow)
        this.physics.add.collider(arrow,box2)   
        
        this.physics.add.collider(box2, target, ()=>{
            this.add.text(50,100,"LEVEL COMPLETE, press A to continue")
            this.input.keyboard.on('keydown-A', () => {
                this.scene.start('level1victory')
            })
        })
        
        //this.physics.add.collider(arrow, target)
        //this.physics.add.collider(box, target)
        arrow.body
        .setCollideWorldBounds(true)
        .setMaxSpeed(300);
        let cursor = this.add.image(0, 0, 'cursor').setVisible(false);
        this.input.on('pointerdown', (pointer) => 
        {
            cursor.copyPosition(pointer).setVisible(true);
            arrow.body.stop();
            this.physics.accelerateToObject(arrow, cursor, 100)
        
        });
       
        
       
    }
}
class Level1Victory extends Phaser.Scene{
    constructor(){
        super('level1victory')
    }
    create(){
        this.add.text(50,50,"You beat level 1, click to continue to level 2").setFontSize(50)
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
        this.load.image('arrow', 'arrow.png')
        this.load.image('cursor', 'cursor.png')
        this.load.image('target', 'target.png')
    }
    create(){
        //this.add.sprite( 1000, 1000, 'box').setScale(.5)
        //this.physics.add.collider()
        
        const boxes = this.physics.add.group({
            defaultKey: 'box',
            
            collideWorldBounds: true
        });
        const boxes2 = this.physics.add.group({
            defaultKey: 'box2',
            collideWorldBounds: true
        })
        
        let box2 = this.physics.add.image(1000,200, 'box2').setScale(.5)
        box2.body.setMass(.1).setCollideWorldBounds(true).setGravityY(1000)
        //this.physics.add.image(1000, 1000, 'box').setScale(.5)
        //this.physics.add.image(1000, 500, 'box').setScale(.5)
        boxes.create(1000,1100).setScale(.5).setMass(.1).setGravityY(1000);
        boxes.create(900,600).setScale(.5).setMass(.1).setGravityY(1000);
        //boxes.create(1000,600).setScale(.5);
        //boxes2.create(1000,200).setScale(.5).setMass(.1).setGravityY(1000);
        this.physics.add.collider(boxes)
        this.physics.add.collider(boxes, box2)
        let target = this.physics.add.image(1500,1000, 'target')
        
        let arrow = this.physics.add.image(150, 800, 'arrow')
        this.physics.add.collider(boxes,arrow)
        this.physics.add.collider(arrow,box2)   
        
        this.physics.add.collider(box2, target, ()=>{
            this.add.text(50,100,"LEVEL COMPLETE, press A to continue")
            this.input.keyboard.on('keydown-A', () => {
                this.scene.start('level1victory')
            })
        })
        
        //this.physics.add.collider(arrow, target)
        //this.physics.add.collider(box, target)
        arrow.body
        .setCollideWorldBounds(true)
        .setMaxSpeed(300);
        let cursor = this.add.image(0, 0, 'cursor').setVisible(false);
        this.input.on('pointerdown', (pointer) => 
        {
            cursor.copyPosition(pointer).setVisible(true);
            arrow.body.stop();
            this.physics.accelerateToObject(arrow, cursor, 100)
        
        });
       
        
       
    }
}
const game = new Phaser.Game({
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080
    },
    scene: [Intro, Level1, Level1Victory],
    title: "Adventure Game",
    physics: {
        default: 'arcade',
        arcade: { debug: false }
    },
    audio: {disableWebAudio: true},
   
});
