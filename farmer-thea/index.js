
var fields = []
var farmer
var activeField = null

//set up function is called once when p5 is started
function setup(){
createCanvas(window.innerWidth, window.innerHeight)
background(0,150,0)
alert("Welcome to the farm!")
var userName = prompt("What is your name?")
farmer = new Farmer(userName);
farmer.speak("farmer words");

fields.push(
    new field('Peacock field', 10, 25, 25, 350, 325)
)

fields.push(
    new field('Tiger field', 10, 400, 25, 200, 325)
)

fields.push(
    new field('Carrot field', 10, 25, 375, 200, 275)
    )

fields.push(
    new field('Sunflower field', 10, 250, 375, 350, 275)
             )

fields.push(
new field('Pumpkin field', 10, 620, 25, 100, 625, 600)
                         )
            
}
//draw function is called repeatedly and allows eg things to move
function draw() {
background(0,150,0)

    for (var field of fields){
        field.draw()
    }
    
    farmer.update()
    farmer.draw()
    
    setActiveFieldFromFarmerPosition()

    if (activeField){
    noStroke()
    fill('black')
    textSize(10)
    text(activeField.name, 10, 10)
    } 

    function setActiveFieldFromFarmerPosition() {
        activeField = null
    for (var field of fields){
        if (field.containsPoint(farmer.x, farmer.y))
        activeField = field
    }
}

}//end function draw

