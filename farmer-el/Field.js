class Field {
    constructor(name, health, x, y, width, height) {
        this.name = name
        this.health = health
        this.x = x
        this.y = y
        this.width = width
        this.height = height
    }

    draw() {
        stroke(86, 54, 13)
        strokeWeight(10)
        fill(145, 95, 53)
        rect(this.x, this.y, this.width, this.height, 10)
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