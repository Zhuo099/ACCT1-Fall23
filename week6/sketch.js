let particles = []
let wind 
let gravity
let keCode


function setup(){
    createCanvas(700,600)
    colorMode(HSB, TWO_PI, 1, 1)
    //velocity = createvector(random(-4,4)), random(-4,4)

    particles[0] = new Particle()
    wind = createVector(-0.005,0)
    gravity = createVector(0,0.01)
}

function draw(){
    background(0, 0, 1)

    particles.forEach((part)=>{
        part.display()
        part.addForce(wind)  
        part.addForce(gravity)  
        part.attractToMouse(4)
        part.move()
        part.reachOut(particles)
    })
}

function mouseReleased(){
    //John.position.set(mouseX,mouseY)
    particles.push(new Particle(mouseX,mouseY))
}

function keyReleased(){
    if(keCode ==  RIGHT_ARROW){
        wind.x +=0.01

    }
    else if(keCode == LEFT_ARROW){
        wind.x -=0.01
    }

}