var fieldA, fieldB, fieldC, fieldD;
var farmer
function setup() {
    createCanvas(window.innerWidth, window.innerHeight)
    background(100,227,30)
    alert("Welcome to the Farm")
    var userName = prompt("What is your name?")
    farmer = new Farmer(userName);
    farmer.speak("Ehhhh where is my sheep that I do not have?")
    var fieldA = new Field(1, 10);
    var fieldB = new Field(2, 10)
    var fieldC = new Field(3, 10)
    var fieldD = new Field(4, 10)
   

}

function draw() {
    farmer.draw()


}
