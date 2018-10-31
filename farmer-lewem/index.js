
//Require is used instead of scripts anad is used when you are working on a server instead of a browser
//Check node intro screencast
var fieldA, fieldB, fieldC, fieldD;
var farmer
function setup(){

    createCanvas(window.innerWidth, window.innerHeight)
    background(100,227,30)
    alert("Welcome to the farm!")
    var username = prompt("What is your name?")
    console.log(username)
    farmer = new Farmer(username);
    farmer.speak("ey ih ey ih oh")
    fieldA = new Field(1, 10)
    fieldB = new Field(2, 10)
    fieldC = new Field(3, 10)
    fieldD = new Field(4, 10)
    
}
function draw() {
    farmer.draw()

}

