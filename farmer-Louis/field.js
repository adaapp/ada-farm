class Field {
    constructor(name,health, x, y, width, height) {
        this.name  = name;
        this.health = health
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.carrot = loadImage("carrot.png")
        this.pig = loadImage("pig.png")
        this.house = loadImage("house2.png")
        
    }
draw() {
    
    fill('#99cc00')
    stroke('#663300')
    strokeWeight(10)
    rect(this.x , this.y, this.width, this.height, 8)
    image(this.carrot, 80, 400, 30, 30)
    image(this.pig, 40, 80, 100,100)
    image(this.house, 640, 340, 220,310)
     
}
containsPoint(x, y) {
    var top = this.y
    var bottom = this.y + this.height
    var left = this.x 
    var right = this.x + this.width

    var isInVerticalRange = y > top && y < bottom
    var isInHorizontalRange = x > left && x < right
    
    return isInHorizontalRange && isInVerticalRange
}
}
