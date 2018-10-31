class Field {
    constructor(ID, health) {
        this.ID = ID;
        this.health = health;
    }

    draw() {
        stroke('#7c4011')
        strokeWeight(10)
        fill('#b58969')
        rect(10, 10, 300, 300)
    }
}
