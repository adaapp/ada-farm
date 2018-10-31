
//Require is used instead of scripts anad is used when you are working on a server instead of a browser
//Check node intro screencast
var fields = []
var farmer
var activeField
function setup() {

    createCanvas(window.innerWidth, window.innerHeight)
    background(50, 100, 70)
    alert("Welcome to the farm!")
    var username = prompt("What is your name?")
    console.log(username)
    farmer = new Farmer(username);
    farmer.speak("ey ih ey ih oh")

    fields.push(
        new Field('pig field', 10, 25, 25, 300, 300)
    )
    fields.push(
        new Field('tiger field', 10, 350, 25, 300, 300)
    )
    fields.push(
        new Field('giraffe field', 10, 25, 350, 300, 300)
    )

    fields.push(
        new Field('emma field', 10, 350, 350, 300, 300)
    )


}
function draw() {
    background(50, 100, 70)
    for (var field of fields) {
        field.draw()
    }
    farmer.update()
    farmer.draw()

    setActiveFieldFromFarmerPosition()
    if (activeField) {
        noStroke()
        fill('black')
        textSize(15)
        text(activeField.name, 0, 10)
    }

}

function setActiveFieldFromFarmerPosition() {
    activeField = null
    for (var field of fields) {
        if (field.containsPoint(farmer.x, farmer.y)) {
            activeField = field
        }


    }
}
