class field {
    constructor(name, health, x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.name = name;
        this.health = health;
    }
    draw() {
        stroke (3, 37, 3)
        strokeWeight(10)
        fill (130, 90, 10)
        rect(this.x, this.y, this.width, this.height, 15)
    }

    containsPoint(x,y){
        var top = this.y -30
        var bottom = this.y + this.height-30
        var left = this.x - 30
        var right = this.x + this.width -30

        var isInVerticalRange = y > top && y < bottom
        var isInHorizontalRange = x > left && x < right

        return isInHorizontalRange && isInVerticalRange
        
    }
}

