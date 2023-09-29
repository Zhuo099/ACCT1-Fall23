let firstSection = document.getElementById("sectionOne")
let buttonChangeColor = document.getElementById
("colorChangeBTN")
let firstImage = document.getElementById("imageOne")
let buttonGenColor = document.getElementById("colorGenBTN")
let buttonChangeImage = document.getElementById("imageChangeBTN")
let buttonAddText = document.getElementById("addTextBTN")
//名字需要不同


let changeColor = function(){
    firstSection.style.backgroundColor = "rgb(170,250,170)"
}
let generateColor = function(){
    let redComp = Math.random()*255
    let greenComp = Math.random()*255
    let blueComp = Math.random()*255
    firstSection.style.background = " rgb("+redComp+","+greenComp+","+blueComp+")"
}

let changeImage = function(){
    firstImage.classList.toggle("image-2")
    console.log(firstImage.classList[0])
    firstImage.src = "11.png"
    if(firstImage.classList[0] == "image-2"){
        firstImage.src = "Wallpaper_acnh_1920_1080.jpg"
    }
    else{
        firstImage.src = "11.png"
    }
}

let addText = function(){
    let myParag = document.createElement("p")
    myParag.innerText = "Hello, this is JavaScript"
    myParag.style.fontWeight = "bloder"
    firstSection.appendChild(myParag)
}

//fat arrow function 
//let changeColor = ()=>{}


console.log(buttonChangeColor)
console.log(firstSection)


firstSection.style.backgroundColor = "rgb(255,170,170)"
//背景颜色

buttonChangeColor.addEventListener("click", changeColor)
buttonGenColor.addEventListener("click", generateColor)
buttonChangeImage.addEventListener("click", changeImage)
buttonAddText.addEventListener("click", addText)
