var fieldA, fieldB, fieldC, fieldD
var farmer

//set up function is called once when p5 is started
function setup(){
createCanvas(window.innerWidth, window.innerHeight)
background(0,250,0)
alert("Welcome to the farm!")
var userName = prompt("What is your name?")
farmer = new Farmer(userName);
farmer.speak("farmer words");
var fieldA = new field(1, 10);
var fieldB = new field(2, 10);
var fieldC = new field(3, 10);
var fieldD = new field(4, 10);
}
//draw function is called repeatedly and allows eg things to move
function draw() {
farmer.draw()
}
