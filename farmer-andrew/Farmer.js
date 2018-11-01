

class Farmer {
    constructor(userName) {
        this.userName = userName;
        this.image = loadImage('tractor.png')
        this.x = 100
        this.y = 100
        this.width = 60
        this.height = 60 //these are attributes
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

        if (keyIsDown(DOWN_ARROW)) {
            this.y = this.y + 3
        }

        if (keyIsDown(UP_ARROW)) {
            this.y = this.y - 3
        }

    }

    draw() {
        var bobAmount = Math.sin(millis() / 40) * 2 
        //console.log(bobAmount)

        image(
            this.image, 
            this.x, 
            this.y + bobAmount, //note the bobAmount added to make it work
            this.width, 
            this.height)
    }


} // End of the Farmer class oooarrr