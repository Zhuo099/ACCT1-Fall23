function setup(){
    let myCanvas = createCanvas(600, 600)
    myCanvas.parent("sketchHolder")
    background(250,230,250)
    drawGrid(60)

    rotate(QUARTER_PI)
    fill(0, 0, 0)
    rect(100, 100, 100, 150)
}
function drawGrid(numSegments = 10){
    let interval = width/numSegments
    for(let x =0;x<numSegments;x++){
        line(x*interval,0,x*interval,height)
    }
    
    interval = height/numSegments
    for(let y=0; y<numSegments;y++){
        line(0,y*interval,width,y*interval)
    }


}

