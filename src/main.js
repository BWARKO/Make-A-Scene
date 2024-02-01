// Code Practice: Making a Scene
// Name: Blake Warkenton
// Date: January 23, 2024

"use strict"

let config = {
    type: Phaser.AUTO,
    pixelArt: true,
    scene: [ Menu, Play ]
}

let game = new Phaser.Game(config)