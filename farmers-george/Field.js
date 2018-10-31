class Field {
    constructor(name, health, x, y, width, height) {
        this.name = name;
        this.health = health;
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.houseimage = loadImage('house.jpg')
    }

    draw(){
        fill(150,255,0)
        stroke(165,42,42)
        strokeWeight(5)
        rect(this.x, this.y, this.width, this.height, 10)
        image(this.houseimage, 620, 30, 300, 300)
    }

    containsPoint(x, y){
        var top = this.y
        var bottom = this.y + this.height
        var left = this.x
        var right = this.x + this.width

        var isInVerticalRange = y > top && y < bottom
        var isInHorizontalRange = x > left && x < right

        return isInHorizontalRange && isInVerticalRange
    }
}