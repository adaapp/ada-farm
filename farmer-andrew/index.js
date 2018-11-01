var fieldA, fieldB, fieldC, fieldD;
var fields = [] 
var farmer
var activeField = null

// This setup function is called once
// when P5 is ready to go
function setup() {
    
    createCanvas(window.innerWidth, window.innerHeight)
    background(100,227,30)
    // alert("Welcome to the farm")
    // var username = prompt("What\'s your name?")
    farmer = new Farmer();
    //afarmer.speak("Ey oh ey oh ey oh")

    fields.push(
        new Field('Pig field', 10, 25, 25, 350, 300)
    )

    fields.push(
        new Field('Tiger field', 10, 400, 25, 200, 300)
    )

    fields.push(
        new Field('Carrot field', 10, 25, 350, 200, 300)
    )

    fields.push(
        new Field('Pumpkin field', 10, 250, 350, 350, 300)
    )

    //fieldA = new Field('Pig field', 10, 25, 25, 350, 300);
    //fieldB = new Field('Tiger field', 10, 400, 25, 200, 300);
    //fieldC = new Field('Carrot field', 10, 25, 350, 200, 300);
    //fieldD = new Field('Pumpkin field', 10, 250, 350, 350, 300);
}

// This draw function is called repeatedly by
// P5 and is where we can do most of our work
function draw() {
    background(100, 227, 30)

    for (var field of fields) {
        field.draw()
    }

    //fieldA.draw()
    //fieldB.draw()
    //fieldC.draw()
    //fieldD.draw()
    
    farmer.update()
    farmer.draw()

    setActiveFieldFromFarmerPosition() 

    if (activeField) {
        noStroke()
        fill('black')
        textSize(20)
        text(activeField.name, 630, 50)
    
}

    }


function setActiveFieldFromFarmerPosition() {
    activeField =null
    for (var field of fields) {
        if (field.containsPoint(farmer.x, farmer.y))
            activeField = field


    }


}

