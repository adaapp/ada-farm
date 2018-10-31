

class Farmer {
    constructor(username) {
        this.username = username
        this.farmerimage = loadImage('tractor_1f69c.png')
        this.X = 100
        this.Y = 100
        this.width = 80
        this. height = 80
        

    

    }
    update() {
        
            if (keyIsDown(UP_ARROW)) {
              this.Y = this.Y - 5;
            } else if (keyIsDown(DOWN_ARROW)) {
             this.Y = this.Y + 5;
            }
            if (keyIsDown(LEFT_ARROW)) {
              this.X = this.X - 5;
            } else if (keyIsDown(RIGHT_ARROW)) {
              this.X = this.X + 5;
            }
          
    }

    speak(words) {
        alert(words)
    }

    draw() {
        var bobAmount = Math.sin(millis() / 50) * 1.5
        image(this.farmerimage, this.X, this.Y + bobAmount, this.width, this.height)
    }

    




}