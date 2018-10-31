
var fields = []
var farmer 
var activeField = null

function setup() {
    createCanvas(window.innerWidth, window.innerHeight)
    background(153, 103, 0)
    alert("Welcome to the Farm")
    var userName = prompt ("What's your name?")
    farmer = new Farmer(userName);
    farmer.speak("Hi Beth")   
    
   
       

    fields.push(
         new Field('Pig field',10, 25,25, 350,300)
    )
    fields.push( 
        new Field('Tiger field',10, 400, 25, 200, 300)
    )
    fields.push(
         new Field('Carrot field',10, 25, 350, 200, 300)
    ) 
    fields.push(
         new Field('Pumpkin field',10, 250, 350, 350, 300)
    )

    fields.push(
        new Field('Sheep field',10, 625, 25, 200, 300)
   )
}

function draw() {
background(153, 103, 0)
for( var field of fields) {
field.draw()
}

farmer.update()
farmer.draw()

setActiveFieldFromFarmerPosition()




if (activeField) {
noStroke()
fill(0)
textSize(20,20)
text("Field: " + activeField.name,840,50)}

}

function setActiveFieldFromFarmerPosition() {
    activeField = null

    for( var field of fields) {
        if(field.containsPoint(farmer.x, farmer.y)) {
            activeField = field
    }
    }
}

