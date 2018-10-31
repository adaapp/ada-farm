

class Farmer {
    constructor(userName) {
        this.userName = userName;
        this.image = loadImage('farmer.png')
    }

    speak(words) {
        alert(words)
    }

    draw() {
        rect(10, 10, 10, 10)
        image(this.image, 0, 0)
    }


} // End of the Farmer class oooarrr