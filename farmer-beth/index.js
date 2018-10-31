var fields = []
// This setup function is called once
// when P5 is ready to go
var farmer
var activeField = null
function setup() {
    
    createCanvas(window.innerWidth, window.innerHeight);
    background(100,227,30) //only valid in set up
    alert("Welcome to the farm")
    var username = prompt("What\'s your name?")
    farmer = new Farmer(username); //declared in this function
    farmer.speak('Hi' + username)

    fields.push( //push adds an item in the array of fields
        new Field('Carrot Field', 10, 25, 25, 400, 300)
        )
    fields.push(
        new Field('Cow field', 10, 450, 25, 200, 300)
    )
    fields.push(
        new Field('Pig field', 10, 25, 350, 200, 300)
    )
    fields.push(
        new Field('Wheat field', 10, 250, 350, 400, 300)
    )

    fields.push(
        new Field('Sheep field', 10, 670, 25, 200, 300)
    )
}

// This draw function is called repeatedly by
// P5 and is where we can do most of our work
function draw() {
    background(100,227,30)

    for( var field of fields) { //for every field in the field, draw the field
        field.draw()
    }

    farmer.update() //call the function
    farmer.draw() //draw the farmer from farmer.js

 setActiveFieldFromFarmerPosition()

 if(activeField) {
 noStroke()
 fill(0)
 textSize(20,20)
 textFont('Georgia')
 text(activeField.name, 5, 20)
 }
 
}

function setActiveFieldFromFarmerPosition() {
    activeField = null

    /* multi line comments */

    for (var field of fields) {
        if (field.containsPoint(farmer.x, farmer.y)){
            activeField = field
        } //for every field in our field array, check the point
        
    }
}
