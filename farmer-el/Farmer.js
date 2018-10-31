class Farmer {
    constructor(userName) {
        this.userName = userName;
        this.image = loadImage('farmerel.png')
        this.x = 100
        this.y = 100
        this.width = 80
        this.height = 80
    }

    speak(words) {
        alert(words)
    }

    update() {
        if (keyIsDown(RIGHT_ARROW)) {
            this.x = this.x + 3
        }

        if (keyIsDown(LEFT_ARROW)) {
            this.x = this.x - 3
        }

        if (keyIsDown(UP_ARROW)) {
            this.y = this.y - 3
        }

        if (keyIsDown(DOWN_ARROW)) {
            this.y = this.y + 3
        }
    }

    draw() {
        var bobAmount = Math.sin(millis()/200)*5
        image(
            this.image, 
            this.x, 
            this.y + bobAmount,
            this.width, 
            this.height
        )
    }
} // End of the Farmer class oooarrr