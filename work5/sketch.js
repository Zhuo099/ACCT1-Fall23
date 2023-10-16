let angle;
let radiusX = 250; // 椭圆的水平半轴长度
let radiusY = 90;  // 椭圆的垂直半轴长度
let centerX;
let centerY;
let img1;
let img2;
let img3;
let lastImg3DisplayTime = 0;
let displayImg3 = false;

function preload() {
  img1 = loadImage('img2.png'); // 替换成你的图片路径
  img2 = loadImage('img4.png'); // 替换成第二张图片的路径
  img3 = loadImage('img7.png'); // 替换成第三张图片的路径
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 100);
  centerX = width / 2;
  centerY = height / 2;
  angle = radians(-30); // 初始化 angle 变量
}

function draw() {
  background(0, 0, 100);
  
  translate(centerX, centerY);
  
  // 绘制第一张图片
  let x1 = 0; // 在中心位置
  let y1 = 0; // 在中心位置
  let imgWidth1 = 400; // 放大图片的宽度
  let imgHeight1 = 400; // 放大图片的高度
  let imgX1 = x1 - imgWidth1 / 2 - 10; // 向左移动60像素
  let imgY1 = y1 - imgHeight1 / 2 + 60; // 往下移动60像素
  image(img1, imgX1, imgY1, imgWidth1, imgHeight1);

  for (let i = 0; i < 7; i++) {
    let x = radiusX * cos(angle + TWO_PI / 7 * i);
    let y = radiusY * sin(angle + TWO_PI / 7 * i) -30 ; // 往下移动60像素
    let imgWidth = 50;
    let imgHeight = 50;
    let imgX = x - imgWidth / 2;
    let imgY = y - imgHeight / 2;
    image(img2, imgX, imgY, imgWidth, imgHeight); // 居中绘制第二张图片
  }

  // 显示第三张图片（img3）每隔十秒显示一秒
  let currentTime = millis();
  if (currentTime - lastImg3DisplayTime > 2000) {
    displayImg3 = true;
    lastImg3DisplayTime = currentTime;
  }
  if (displayImg3) {
    let imgWidth3 = 150; // 缩小到一半大小
    let imgHeight3 = 150; // 缩小到一半大小
    let imgX3 = imgX1 + 120; // 向左移动60像素
    let imgY3 = imgY1 - 120; // 向上移动60像素
    
    image(img3, imgX3, imgY3, imgWidth3, imgHeight3); // 向左移动并缩小
    if (currentTime - lastImg3DisplayTime > 1000) {
      displayImg3 = false;
    }
  }

  angle += radians(1); // 增加角度，控制移动速度
  if (angle >= TWO_PI) {
    angle = 0;
  }
}
