function setup(){
    let myCanvas = createCanvas(600,600)
    myCanvas.parent = ("sketchHolder2")
    colorMode(HSB,TWO_PI,0,1,1)
}

function draw(){
    background(0,1,0)

    strokeWeight(20)
    
    noFill()
    for(let i = 0; i<10; i++){
        let diam = 200 + i*20
        let thisHue = (TWO_PI/10) * i
        stroke(thisHue,0.8,0.8)

        push()
        translate(width*0.5, height* 0.5)
        let angle = millis()*0.001 * (i*0.6+1)
        rotate(sin(angle)*0.5)

        arc(0,0,diam,diam,QUARTER_PI+HALF_PI,TWO_PI*1.125)
        pop()

    }
    



}