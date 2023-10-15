let angle = 0

function setup(){
    let myCanvas = createCanvas(600, 600)
    myCanvas.parent("sketchHolder")


}
function draw(){
    background(250,230,250)
    
    push()
    translate(100,100)
    rotate(angle)
    drawGrid(60)
    fill(0, 0, 0)
    rect(0,0, 200, 200)
    

    pop()
    //console.info(angle)
    circle(100,100,100)


    angle+=0.01;

}


function drawGrid(numSegments = 10){
    console.log("fire")
    let interval = width/numSegments
    for(let x =0;x<numSegments;x++){
        line(x*interval,0,x*interval,height)
    }
    
    interval = height/numSegments
    for(let y=0; y<numSegments;y++){
        line(0,y*interval,width,y*interval)
    }


}

