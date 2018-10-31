var fieldA, fieldB, fieldC, fieldD
var farmer

function setup() {
    createCanvas(window.innerWidth, window.innerHeight)
    background(100,227,10)
    alert("Welcome to the farm!")
    var username = prompt("What is your name?")
    farmer = new Farmer(username)
    farmer.speak("yeet")
    fieldA = new Field(1, 10)
    fieldB = new Field(2, 10)
    fieldC = new Field(3, 10)
    fieldD = new Field(4, 10)

}
function draw() {
    farmer.draw()
}




