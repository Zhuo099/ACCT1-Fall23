let balls = []; // 用于存储小球的数组
let redCircleDiameter = 10;   // 红球的直径
let greenCircleDiameter = 10; // 绿球的直径

function setup() {
  createCanvas(windowWidth, windowHeight); // 使用屏幕大小作为画布大小
  noStroke();

  // 创建一个初始的红球
  const initialBall = {
    x: width / 2,
    y: height / 2,
    speedX: random(-2, 2),
    speedY: random(-2, 2),
    color: color(255, 0, 0) // 设置初始颜色为红色
  };
  balls.push(initialBall);
}

function draw() {
  background(0);

  // 绘制并更新现有的小球
  for (let i = balls.length - 1; i >= 0; i--) {
    const ball = balls[i];
    fill(ball.color);

    // 根据小球的颜色选择相应的直径
    const diameter = (ball.color.levels[1] === 255) ? greenCircleDiameter : redCircleDiameter;
    ellipse(ball.x, ball.y, diameter, diameter);

    // 更新小球的位置
    ball.x += ball.speedX;
    ball.y += ball.speedY;

    // 检查是否碰到画布边缘，如果是，改变速度方向
    if (ball.x < diameter / 2 || ball.x > width - diameter / 2) {
      ball.speedX = -ball.speedX + random(-2, 2);
    }
    if (ball.y < diameter / 2 || ball.y > height - diameter / 2) {
      ball.speedY = -ball.speedY + random(-2, 2);
    }

    // 检查是否碰撞其他小球
    for (let j = balls.length - 1; j >= 0; j--) {
      if (i !== j) {
        const otherBall = balls[j];
        const distance = dist(ball.x, ball.y, otherBall.x, otherBall.y);
        if (distance < diameter) {
          if (otherBall.color.levels[1] === 255) {
            // 如果碰到绿球，让绿球消失并增大红球的直径
            balls.splice(j, 1);
            redCircleDiameter += 1;
          }
        }
      }
    }
  }
}

function mousePressed() {
  // 在鼠标点击位置创建一个新小球，颜色为绿色
  const newBall = {
    x: mouseX,
    y: mouseY,
    speedX: random(-5, 5),
    speedY: random(-5, 5),
    color: color(0, 255, 0) // 设置颜色为绿色
  };
  balls.push(newBall);
}
