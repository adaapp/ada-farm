var feildA, feildB, feildC, feildD;
var farmer
//setup function is called once
//when p5 is readt to go
function setup() {
    createCanvas(window.innerWidth, window.innerHeight)
    background(100,277,30)
    alert("welcome to the farm")
    var username = prompt ("What is your name?")
    farmer = new Farmer(username);
    farmer.speak("hey")
    feildA = new Feild(1, 10);
    feildB = new Feild(2, 10);
    feildC = new Feild(3, 10);
    feildD = new Feild(4, 10);

}

//this draw function is called repeatedly by
// p5 is where we can do most of our work
function draw() {
    farmer.draw()
}

