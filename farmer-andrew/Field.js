class Field {
    constructor(name, health, x, y, width, height) {
        this.name = name;
        this.health = health;
        this.x = x
        this.y = y
        this.width = width
        this. height = height
    }

    draw() {
        stroke('#592803')
        strokeWeight(10)
        fill('#b58969')
        
        rect(this.x, this.y, this.width, this.height, 15) //number input creates round edges for shapes

    }

    containsPoint(x, y) {
        var top = this.y
        var bottom = this.y + this.height
        var left = this.x
        var right = this.x + this.width

        var isInVerticalRange= y > top && y < bottom
        var isInHorizontalRange= x > left && x < right

        return isInHorizontalRange && isInVerticalRange

    }
}