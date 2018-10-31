

class Farmer {
    constructor(username) {
        this.username = username
        this.farmerimage = loadImage('tractor_1f69c.png')

    }
    speak(words) {
        alert(words)
    }

    draw() {
    
        image(this.farmerimage, 10, 10, 80, 80)
    }




}