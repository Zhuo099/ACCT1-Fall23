let particles = []


function setup(){
    createCanvas(700,600)
    colorMode(HSB, TWO_PI, 1, 1)
    //velocity = createvector(random(-4,4)), random(-4,4)

    particles[0] = new Particle()
}

function draw(){
    background(0, 0, 1)

    particles.forEach((part)=>{
        part.display()
        part.move()
        part.reachOut(particles)
    })
}

function mouseReleased(){
    //John.position.set(mouseX,mouseY)
    particles.push(new Particle(mouseX,mouseY))
}