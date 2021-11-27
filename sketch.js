var boy;

function preload() {
 // boyImg = loadImage("")

 wallImg = loadImage("brick.png");
 wallImg1 = loadImage("brick1.png");
 treasureImg = loadImage("treasure.png")

}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  boy  = createSprite(100, 50, 30, 50);
  

  wall1 = createSprite(200, 10, 250, 5);
  wall1.addImage("brick1", wallImg1)
  wall1.scale = 0.7;
  
  wall2 = createSprite(325, 135, 5, 250);
  wall2.addImage("brick", wallImg)
  wall2.scale = 0.7
  
  wall3 = createSprite(460, 250, 250, 5);
  wall3.addImage("brick1", wallImg1)

  wall5 = createSprite(891, 480, 5, 250)

  wall4 = createSprite(511, 420, 5, 250)

  treasure = createSprite(windowWidth - 50, windowHeight - 50, 50, 50)
  treasure.addImage("treasure", treasureImg)
  treasure.scale = 0.3

   if(keyDown("space")){
     wall1.y = wall1.y+2;
    // boy.velocityY =2 
   }

} 



function draw() {
  background(51);

  // if (boy.isTouching(wall1 || boy.isTouching(wall2) || boy.isTouching(wall3) || boy.isTouching(wall4) || boy.isTouching(wall5))) {
  //   boy.x = 100
  //   boy.y = 50
    
  // }

  // if(keyIsDown(DOWN_ARROW)){
  //   boy.y += 2;
  // }

  // if(keyDown(RIGHT_ARROW)){
  //   boy.x += 2;
  // }

  // if(keyDown(LEFT_ARROW)){
  //   boy.x -= 2;
  // }

  drawSprites();


  }