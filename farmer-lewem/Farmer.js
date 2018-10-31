

class Farmer {
constructor(userName) {
this.userName = userName;
this.image = loadImage('farmer.png') 

}

speak(words) {
alert(words)
}

draw() {
    image(this.image,0,0, 80, 80)
}

} // end of Farmer class  oooooaaarrrr