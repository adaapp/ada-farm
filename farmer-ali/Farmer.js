class Farmer {
    constructor(userName) {
        this.userName = userName;
        this.image = loadImage('farmer.png')
        this.x = 100
        this.y = 100
        this.width = 60
        this.height = 60
    }

    speak(words) {
        alert(words)
    }

    draw() {
        image(this.image, this.x, this.y, this.width, this.height)
    }
} // End of the Farmer class oooarrr