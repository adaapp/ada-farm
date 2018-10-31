class Farmer {
    constructor(userName) {
        this.userName = userName;
        this.image = loadImage ("farmer.png") //load image and store result
    }

    speak(words) { 
        alert(words)//pop up message
    }

    draw() {
        image(this.image, 0, 0, 60, 60 ) //draw image, this.image creates an attribute
       
    }


} // End of the Farmer class oooarrr