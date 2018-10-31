
class Farmer {
    constructor(userName) {
        this.userName = userName;
        this.image = loadImage('tractor.png')
        this.x = 100
        this.y = 100
        this.width = 60
        this.height = 60
    }

    speak(words) {
        alert(words)
    }

    update() {
        if(keyIsDown(RIGHT_ARROW)) {
            this.x = this.x + 3
        }
        if(keyIsDown(LEFT_ARROW)) {
            this.x = this.x -3
        }
        if(keyIsDown(DOWN_ARROW)) {
            this.y = this.y + 3
        }
        if(keyIsDown(UP_ARROW)) {
            this.y = this.y - 3
        }
    }

    draw() {
        var bobAmount = Math.sin(millis()/100) *2
        image(
            this.image,
            this.x,
            this.y + bobAmount,
            this.width,
            this.height)
    }

}
