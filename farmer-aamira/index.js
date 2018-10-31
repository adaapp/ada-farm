// var fieldA, fieldB, fieldC, fieldD
var fields = []
var farmer
var activeFeild = null 

function setup() {
    createCanvas(window.innerWidth, window.innerHeight)
    background(100,227,30)
    alert("Welcome to the Farm")
    var userName = prompt("What is your name?")
    farmer = new Farmer(userName)
    farmer.speak("Ehhhh where is my sheep that I do not have?")

    fields.push(
        new Field('Tiger field', 10, 20, 20, 300, 300)
    )

    fields.push(
        new Field('Cow field', 10, 350, 20, 300, 300)
    )

    fields.push(
        new Field('crops field', 10, 20, 350, 300, 300)
    )

    fields.push(
        new Field('sheep field', 10, 350, 350, 300, 300)
    )
    fields.push(
        new Field('goat field', 10, 400, 400, 75, 75)
    )

}

function draw() {
    background('#78d361') 
    
    for(var field of fields) {
        field.draw()
    }
    farmer.update()
    farmer.draw()

    setActiveFeildFromFarmerPosition()

if (activeField) {
    noStroke(0)
    fill(0)
    text (activeField.name, 0, 10)
}
}
function setActiveFeildFromFarmerPosition() {
    activeField = null
    for(var field of fields) { 
        if(field.containsPoint(farmer.x, farmer.y)) {
        activeField = field
    }
}
}

