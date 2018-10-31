
class Farmer {
    constructor(username) {
        this.username = username;
        this.image = loadImage('farmer.png')

    }

    speak(words) {
        alert(words)
    }

    draw() {
        image(this.image, 0, 0, 60, 60)
    }


} // end of farmer class