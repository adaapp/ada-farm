class Field {
    constructor(name, health, x, y, width, height) {
        this.name = name;
        this.health = health;
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.carrot = loadImage ("carrot.png")
        this.pig = loadImage ("pig.png")
        this.house = loadImage ("house.png")
        this.bug = loadImage ("bug.png")
    }

    draw() {
        fill(24, 160, 53,)
        strokeWeight(5)
        stroke(1, 43, 12)
        rect(this.x, this.y, this.width, this.height, 70) //last number makes the rectangles more round
        image(this.carrot,80, 80, 30, 30)
        image(this.carrot,80, 120, 30, 30)
        image(this.pig,80, 400, 50, 50)
        image(this.house, 670, 340, 220, 320)
        image(this.bug, 80, 220, 20, 20)
    }

    containsPoint(x, y) {
    var top =this.y
    var bottom =this.y + this.height
    var left =this.x
    var right = this.x + this.width
    
    var isInVerticalRange = y > top && y< bottom
    var isInHorizontalRange = x > left && x < right

    return isInHorizontalRange && isInVerticalRange
}
}