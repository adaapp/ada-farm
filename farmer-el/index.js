var fields = []
var farmer
var activeField = null
// This setup function is called once
// when P5 is ready to go
function setup() {
    
    createCanvas(window.innerWidth, window.innerHeight)
    background(63, 193, 96)
    alert("Welcome to the farm")
    var username = prompt("What\'s your name?")
    farmer = new Farmer(username);
    farmer.speak("Ey oh ey oh ey oh");

    fields.push(
        new Field('Pig field', 10, 25, 25, 400, 400)
    )
    
    fields.push(
        new Field('Tiger field', 10, 450, 25, 300, 300)
    )

    fields.push(
        new Field('Carrot field', 10, 25, 450, 400, 200)
    )
    
    fields.push(
        new Field('Pumpkin field', 10, 450, 350, 300, 135)
    )

    fields.push(
        new Field('Sunflower field', 10, 450, 515, 300, 135)
    )
}

// This draw function is called repeatedly by
// P5 and is where we can do most of our work
function draw() {
    background(100, 227, 30)

    for (var field of fields) {
        field.draw()
    }

    farmer.update()
    farmer.draw()

    setActiveFieldFromFarmerPosition()

    if (activeField) {
        noStroke()
        fill('black')
        text(activeField.name, 10, 10)
}

function setActiveFieldFromFarmerPosition() {
    activeField = null
    for (var field of fields) {
        if (field.containsPoint(farmer.x, farmer.y))
        activeField = field
    }
}
}
