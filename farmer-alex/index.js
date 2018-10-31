var fieldA, fieldB, fieldC, fieldD

// This setup function is called once
// when P5 is ready to go
function setup() {
  createCanvas(window.innerWidth, window.innerHeight)
  background(100, 227, 30)
  alert('Welcome to the farm')
  var username = prompt("What's your name?")
  var farmer = new Farmer(username)
  farmer.speak('Ey oh ey oh ey oh')
  fieldA = new Field(1, 10)
  fieldB = new Field(2, 10)
  fieldC = new Field(3, 10)
  fieldD = new Field(4, 10)
}

// This draw function is called repeatedly by
// P5 and is where we can do most of our work
function draw() {}
