class Farmer {
    constructor(userName) {
        this.userName = userName;
        this.image = loadImage('farmerel.png')
    }

    speak(words) {
        alert(words)
    }

    draw() {
        image(this.image, 0, 0, 60, 60)
    }
} // End of the Farmer class oooarrr