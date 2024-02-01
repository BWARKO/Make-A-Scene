class Menu extends Phaser.Scene {
    constructor() {
        super('menuScene')
        console.log('Menu: constructor')
    }

    init() {
        console.log('Menu: init')
        this.HP = 100
        this.EXP = 0
        console.log(`HP: ${this.HP} EXP: ${this.EXP}`)
    }

    preload() {
        console.log('Menu: preload')
        this.load.path = './assets/img/'
        this.load.image('tomato', 'tomato.png')
    }

    create() {
        console.log('Menu: create')

        let playerStats = {
            HP: this.HP,
            EXP: this.EXP
        }

        this.scene.start('playScene', playerStats)
    }
}