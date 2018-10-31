var fields = []
var farmer
var activeField = null
//setup function is called once
//when p5 is readt to go
function setup() {
    createCanvas(window.innerWidth, window.innerHeight)
    background(100,277,30)
    alert("welcome to the farm")
    var username = prompt ("What is your name?")
    farmer = new Farmer(username);
    farmer.speak("hey")

    fields.push(
        new Field('Pig Field', 10, 25, 25, 300, 300)
    )
    fields.push(
        new Field('Tiger Field', 10, 350, 25, 300, 300)
    )
    fields.push(
        new Field('Carrot Field', 10, 25, 350, 300, 300)
    )
    fields.push(
        new Field('Corn Field', 10, 350, 350, 300, 300)
    )
}

//this draw function is called repeatedly by
// p5 is where we can do most of our work
function draw() {
    background(100,277,30)
    
    for (var field of fields) {
        field.draw()
    }
  
    farmer.update()
    farmer.draw()

    setActiveFieldFromFarmerPosition()

    if(activeField) {
    noStroke()
    fill('black')
    text(activeField.name, 10, 10)
    }

}

function setActiveFieldFromFarmerPosition() {
    activeField = null
    for(var field of fields) {
        if (field.containsPoint(farmer.x, farmer.y)) {
            activeField = field
        }
    }
}
