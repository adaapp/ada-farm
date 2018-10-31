var fields = []
var farmer 
var activeField = null 

// This setup function is called once
// when P5 is ready to go
function setup() {
    
    createCanvas(window.innerWidth, window.innerHeight)
    background(107, 188, 45)
    
    alert("Welcome to the farm")
    var username = prompt("What's your name?")
    farmer = new Farmer(username);
    farmer.speak("Ey oh ey oh ey oh")

    fields.push(new Field("Chicken Field", 10, 25, 25, 350, 325))

    fields.push(new Field("Carrot Field", 10, 400, 25, 200, 325))
    
    fields.push(new Field("Pumpkin Field", 10, 25, 375, 200, 325))
    
    fields.push(new Field("Tiger Field", 10, 250, 375, 350, 325))

    fields.push(new Field("Tools Area", 10, 625, 375, 200, 325))
}

// This draw function is called repeatedly by
// P5 and is where we can do most of our work
function draw() {
    background(107, 188, 45)
    
    for (var field of fields) {
        field.draw()
    }  

    farmer.update()
    farmer.draw() 


    setActiveFieldFromFarmerPosition()
        
        noStroke()
        fill(255, 255, 255)
        textFont('Comic Sans MS')
        textSize(20)
        
        text('Field:', 650, 70)

    if(activeField) {
        noStroke()
        fill(255, 255, 255)
        textFont('Comic Sans MS')
        textSize(20)
        text(activeField.name, 650, 100)
    }
}

function setActiveFieldFromFarmerPosition(){
    activeField = null
    for (var field of fields){
        if(field.containsPoint(farmer.x, farmer.y)){
            activeField = field
        }
    }
}

