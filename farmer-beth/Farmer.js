class Farmer {
    constructor(userName) {
        this.userName = userName;
        this.image = loadImage ("farmer.png") //load image and store result
        this.x = 100
        this.y = 100
        this.width = 60
        this.height = 60
    }

    speak(words) { 
        alert(words)//pop up message
    }

    update() {
        if (keyIsDown(RIGHT_ARROW)) {
            this.x = this.x + 3
        }

        if(keyIsDown(LEFT_ARROW)) {
            this.x = this.x - 3
        }

        if(keyIsDown(UP_ARROW)) {
            this.y = this.y - 3
        }

        if(keyIsDown(DOWN_ARROW)) {
            this.y = this.y + 3
        }

        if(this.x > window.innerWidth - 60) { //coz the width of image is 60, where you can still see image
            this.x = window.innerWidth - 60 //make it equal that position
        }

        if(this.y > window.innerHeight - 60) {
            this.y = window.innerHeight - 60
        }

        if(this.y < 0) { //make it stay at 0
            this.y = 0
        }

        if(this.x < 0) {
            this.x = 0
        }
        
    }

    draw() {
        var bobAmount = Math.sin(millis() / 200) * 10 //using a sin graph to move the farmer up and down
        // times by how high it goes
        //divide by how fast
        image(this.image, 
            this.x,
            this.y + bobAmount, 
            this.width, 
            this.height ) //draw image, this.image creates an attribute
       //using the attributres from the constructor, where to draw image and how big it should be
    }


} // End of the Farmer class oooarrr