
var fields = []
var farmer
var activeField = null
function setup() {
    createCanvas(window.innerWidth, window.innerHeight)
    background(100,227,10)
    alert("Welcome to the farm!")
    var username = prompt("What is your name?")
    farmer = new Farmer(username)
    farmer.speak("yeet")
    

    fields.push(
        new Field('pig field', 10, 25, 25, 350, 325) 
        )
    fields.push(
        new Field('cannabis field', 10, 400, 25, 200, 325)
    )
    fields.push(
        new Field('cow field',  10, 25, 375, 200, 275)
    )
    fields.push(
        new Field('dixy field', 10, 250, 375, 350, 275)
    )

    
}
function draw() {
    background(100,227,10)


    for (var field of fields){
        field.draw()
    }
    farmer.update()
    farmer.draw()

    setActiveField()
    console.log(activeField)

    if (activeField) {
        noStroke()
        fill('black')
        text(activeField.name, 0, 10)
    console.log(activeField)
    }
    
}

function setActiveField() {
    activeField = null
    for (var field of fields) {
        if (field.containsPoint(farmer.X, farmer.Y)) {
            activeField = field
        }
    }

   
    }



