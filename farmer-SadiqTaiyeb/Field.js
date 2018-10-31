class Field {
    constructor(name, health, x, y, width, height ) {
        this.name = name
        this.health = health;
        this.x = x 
        this.y = y
        this.width = width
        this.height = height
    }

    draw(){
        
        stroke(139,69,19)
        strokeWeight(10)
        fill(179, 119, 0)
        rect(this.x, this.y, this.width, this.height, 20)   
    
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

