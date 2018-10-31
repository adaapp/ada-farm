var fieldA, fieldB, fieldC, fieldD
var farmer 

function setup() {
    createCanvas(window.innerWidth, window.innerHeight)
    background(10,250,100)
    alert("Welcome to the Farm")
    var userName = prompt ("What's your name?")
    farmer = new Farmer(userName);
    farmer.speak("Hi Beth")    
    fieldA = new Field(1,10)
    fieldB = new Field(2,10)
    fieldC = new Field(3,10)
    fieldD = new Field(4,10)

}

function draw() {
farmer.draw()
}

