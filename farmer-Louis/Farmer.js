class Farmer {
constructor(userName) {
    this.userName = userName;
    this.image = loadImage('Tractor.png')
    this.x = 100
    this.y = 100
    this.width = 100
    this.height = 100
}

speak(words) {
    alert(words)
}

update() {
    if (keyIsDown(RIGHT_ARROW)) {
        this.x = this.x + 10
    }

    if (keyIsDown(LEFT_ARROW)) {
        this.x = this.x - 10
    }

    if (keyIsDown(DOWN_ARROW)) {
        this.y = this.y + 10
    }

    if (keyIsDown(UP_ARROW)) {
        this.y = this.y - 10
    }
    
    if(this.x > window.innerWidth - 60) {
        this.x = window.innerWidth - 60
    }

    if(this.x < 0) {
        this.x = 0
    }

    if(this.y < 0) {
        this.y = 0
    }

    if(this.y > window.innerHeight - 60) {
        this.y = window.innerHeight - 60
    }
}

draw() {
var bobAmount = Math.sin(millis() / 80) * 3
    image(
        this.image,
        this.x,
        this.y + bobAmount,
        this.width,
        this.height)
    
}
} //end of farmer class