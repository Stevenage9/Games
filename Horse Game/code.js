var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["af55c0cd-7781-47df-b00d-0fa9cd2e908c","a10827ae-bf7e-459b-be24-2063517ad9d5","89076ad2-17ed-4cc2-a6b0-a2f2c7647f8b","948032ca-676c-4ae7-b0c8-fb7ac37bec7c","d44d015c-0f5a-42d6-a705-13c534991470","62b639e0-262b-4def-aeae-9b21305fdd2e","27a6a3ea-51bb-455d-9790-dd4500e68cef","53186617-b397-4792-b0ee-a61374274332","82cd349d-0a71-49f3-9b66-f2ee881ae8d3","3c99ad97-d7bb-4f1e-b8a0-7c6154dd7bb7","a9fbe12f-d104-4696-86e6-48f6cc4a55dd","dc7efe7d-89e9-4c27-aa1e-07265e0d4b29","a7dac581-97e5-4de9-b678-6e530e67abba"],"propsByKey":{"af55c0cd-7781-47df-b00d-0fa9cd2e908c":{"name":"trex","sourceUrl":null,"frameSize":{"x":524,"y":94},"frameCount":3,"looping":true,"frameDelay":4,"version":"mVH0s10bWY9JQqhF3wYsgi2ZIz.8cDyl","loadedFromSource":true,"saved":true,"sourceSize":{"x":524,"y":282},"rootRelativePath":"assets/af55c0cd-7781-47df-b00d-0fa9cd2e908c.png"},"a10827ae-bf7e-459b-be24-2063517ad9d5":{"name":"ground1","sourceUrl":"assets/v3/animations/_zVr-Ht4cJETV573GIhR_widaY8yD24II_c3xbDv5s4/a10827ae-bf7e-459b-be24-2063517ad9d5.png","frameSize":{"x":1596,"y":26},"frameCount":1,"looping":true,"frameDelay":4,"version":"6bSr8p2cEns0RYPA8wxSb20DNmbcripU","loadedFromSource":true,"saved":true,"sourceSize":{"x":1596,"y":26},"rootRelativePath":"assets/v3/animations/_zVr-Ht4cJETV573GIhR_widaY8yD24II_c3xbDv5s4/a10827ae-bf7e-459b-be24-2063517ad9d5.png"},"89076ad2-17ed-4cc2-a6b0-a2f2c7647f8b":{"name":"ground2","sourceUrl":"assets/v3/animations/_zVr-Ht4cJETV573GIhR_widaY8yD24II_c3xbDv5s4/89076ad2-17ed-4cc2-a6b0-a2f2c7647f8b.png","frameSize":{"x":2377,"y":12},"frameCount":1,"looping":true,"frameDelay":4,"version":"vrA8KTDgNxcBJ.86qLvL9JXCpbhj0EEu","loadedFromSource":true,"saved":true,"sourceSize":{"x":2377,"y":12},"rootRelativePath":"assets/v3/animations/_zVr-Ht4cJETV573GIhR_widaY8yD24II_c3xbDv5s4/89076ad2-17ed-4cc2-a6b0-a2f2c7647f8b.png"},"948032ca-676c-4ae7-b0c8-fb7ac37bec7c":{"name":"cloud","sourceUrl":"assets/v3/animations/RMvIP5z9gbC5QVTMhtnVaJrbAK7UBB5ceCkXG470Jjc/948032ca-676c-4ae7-b0c8-fb7ac37bec7c.png","frameSize":{"x":92,"y":27},"frameCount":1,"looping":true,"frameDelay":4,"version":"y.k5wCeSXrCpgoZakJ61zjy_s3MLt0iM","loadedFromSource":true,"saved":true,"sourceSize":{"x":92,"y":27},"rootRelativePath":"assets/v3/animations/RMvIP5z9gbC5QVTMhtnVaJrbAK7UBB5ceCkXG470Jjc/948032ca-676c-4ae7-b0c8-fb7ac37bec7c.png"},"d44d015c-0f5a-42d6-a705-13c534991470":{"name":"obstacle1","sourceUrl":"assets/v3/animations/ooO3PxLhwDwe0OJ01lb5hBseMZl0poJl8G-9Bf_FKUU/d44d015c-0f5a-42d6-a705-13c534991470.png","frameSize":{"x":34,"y":70},"frameCount":1,"looping":true,"frameDelay":4,"version":"KMdaGIUFbu94FNt9kv3BpvHLZ_ZxFqY4","loadedFromSource":true,"saved":true,"sourceSize":{"x":34,"y":70},"rootRelativePath":"assets/v3/animations/ooO3PxLhwDwe0OJ01lb5hBseMZl0poJl8G-9Bf_FKUU/d44d015c-0f5a-42d6-a705-13c534991470.png"},"62b639e0-262b-4def-aeae-9b21305fdd2e":{"name":"obstacle2","sourceUrl":"assets/v3/animations/ooO3PxLhwDwe0OJ01lb5hBseMZl0poJl8G-9Bf_FKUU/62b639e0-262b-4def-aeae-9b21305fdd2e.png","frameSize":{"x":69,"y":70},"frameCount":1,"looping":true,"frameDelay":4,"version":"w6VJysZga2E.GptzcwdTgrB3sT8r5o9P","loadedFromSource":true,"saved":true,"sourceSize":{"x":69,"y":70},"rootRelativePath":"assets/v3/animations/ooO3PxLhwDwe0OJ01lb5hBseMZl0poJl8G-9Bf_FKUU/62b639e0-262b-4def-aeae-9b21305fdd2e.png"},"27a6a3ea-51bb-455d-9790-dd4500e68cef":{"name":"obstacle3","sourceUrl":"assets/v3/animations/ooO3PxLhwDwe0OJ01lb5hBseMZl0poJl8G-9Bf_FKUU/27a6a3ea-51bb-455d-9790-dd4500e68cef.png","frameSize":{"x":102,"y":70},"frameCount":1,"looping":true,"frameDelay":4,"version":"O8RgPZfUb2jlQmW7kovzCC6DdDI4xIWZ","loadedFromSource":true,"saved":true,"sourceSize":{"x":102,"y":70},"rootRelativePath":"assets/v3/animations/ooO3PxLhwDwe0OJ01lb5hBseMZl0poJl8G-9Bf_FKUU/27a6a3ea-51bb-455d-9790-dd4500e68cef.png"},"53186617-b397-4792-b0ee-a61374274332":{"name":"obstacle4","sourceUrl":"assets/v3/animations/ooO3PxLhwDwe0OJ01lb5hBseMZl0poJl8G-9Bf_FKUU/53186617-b397-4792-b0ee-a61374274332.png","frameSize":{"x":50,"y":100},"frameCount":1,"looping":true,"frameDelay":4,"version":"u3.r2RD_KJ2_f6d3myhY4WUb2qG9SPIj","loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":100},"rootRelativePath":"assets/v3/animations/ooO3PxLhwDwe0OJ01lb5hBseMZl0poJl8G-9Bf_FKUU/53186617-b397-4792-b0ee-a61374274332.png"},"82cd349d-0a71-49f3-9b66-f2ee881ae8d3":{"name":"obstacle5","sourceUrl":"assets/v3/animations/ooO3PxLhwDwe0OJ01lb5hBseMZl0poJl8G-9Bf_FKUU/82cd349d-0a71-49f3-9b66-f2ee881ae8d3.png","frameSize":{"x":103,"y":100},"frameCount":1,"looping":true,"frameDelay":4,"version":"4Axez_5ZMwW4oYzV3FGItR1jsTNZGxpk","loadedFromSource":true,"saved":true,"sourceSize":{"x":103,"y":100},"rootRelativePath":"assets/v3/animations/ooO3PxLhwDwe0OJ01lb5hBseMZl0poJl8G-9Bf_FKUU/82cd349d-0a71-49f3-9b66-f2ee881ae8d3.png"},"3c99ad97-d7bb-4f1e-b8a0-7c6154dd7bb7":{"name":"obstacle6","sourceUrl":"assets/v3/animations/ooO3PxLhwDwe0OJ01lb5hBseMZl0poJl8G-9Bf_FKUU/3c99ad97-d7bb-4f1e-b8a0-7c6154dd7bb7.png","frameSize":{"x":150,"y":100},"frameCount":1,"looping":true,"frameDelay":4,"version":"uVHJe3C_35xvxAYmllxykGBZG5ztqxZR","loadedFromSource":true,"saved":true,"sourceSize":{"x":150,"y":100},"rootRelativePath":"assets/v3/animations/ooO3PxLhwDwe0OJ01lb5hBseMZl0poJl8G-9Bf_FKUU/3c99ad97-d7bb-4f1e-b8a0-7c6154dd7bb7.png"},"a9fbe12f-d104-4696-86e6-48f6cc4a55dd":{"name":"trex_collided","sourceUrl":"assets/v3/animations/JI0MyHYDGYHup_lac_GM8hY6BwPSKo7AE9BueVVsV48/a9fbe12f-d104-4696-86e6-48f6cc4a55dd.png","frameSize":{"x":88,"y":94},"frameCount":1,"looping":true,"frameDelay":4,"version":"6q5s4CcvK5TsUgWgUMNTITlXVURiY0yr","loadedFromSource":true,"saved":true,"sourceSize":{"x":88,"y":94},"rootRelativePath":"assets/v3/animations/JI0MyHYDGYHup_lac_GM8hY6BwPSKo7AE9BueVVsV48/a9fbe12f-d104-4696-86e6-48f6cc4a55dd.png"},"dc7efe7d-89e9-4c27-aa1e-07265e0d4b29":{"name":"gameOver","sourceUrl":"assets/v3/animations/JI0MyHYDGYHup_lac_GM8hY6BwPSKo7AE9BueVVsV48/dc7efe7d-89e9-4c27-aa1e-07265e0d4b29.png","frameSize":{"x":381,"y":21},"frameCount":1,"looping":true,"frameDelay":4,"version":"rfACNxuiwwoLETimO_2pe5C1RlGLylHQ","loadedFromSource":true,"saved":true,"sourceSize":{"x":381,"y":21},"rootRelativePath":"assets/v3/animations/JI0MyHYDGYHup_lac_GM8hY6BwPSKo7AE9BueVVsV48/dc7efe7d-89e9-4c27-aa1e-07265e0d4b29.png"},"a7dac581-97e5-4de9-b678-6e530e67abba":{"name":"restart","sourceUrl":"assets/v3/animations/JI0MyHYDGYHup_lac_GM8hY6BwPSKo7AE9BueVVsV48/a7dac581-97e5-4de9-b678-6e530e67abba.png","frameSize":{"x":75,"y":64},"frameCount":1,"looping":true,"frameDelay":4,"version":"7w0NL5xY39b8e2yd3QuMVxnAhdh7JIQs","loadedFromSource":true,"saved":true,"sourceSize":{"x":75,"y":64},"rootRelativePath":"assets/v3/animations/JI0MyHYDGYHup_lac_GM8hY6BwPSKo7AE9BueVVsV48/a7dac581-97e5-4de9-b678-6e530e67abba.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//initiate Game STATEs
var PLAY = 1;
var END = 0;
var gameState = PLAY;

//create a trex sprite
var trex = createSprite(200,380,20,50);
trex.setAnimation("trex");

//set collision radius for the trex
trex.setCollider("circle",0,0,30);

//scale and position the trex
trex.scale = 0.5;
trex.x = 50;

//create a ground sprite
var ground = createSprite(200,380,400,20);
ground.setAnimation("ground2");
ground.x = ground.width /2;

//invisible Ground to support Trex
var invisibleGround = createSprite(200,385,400,5);
invisibleGround.visible = false;

//create Obstacle and Cloud Groups
var ObstaclesGroup = createGroup();
var CloudsGroup = createGroup();

//place gameOver and restart icon on the screen
var gameOver = createSprite(200,300);
var restart = createSprite(200,340);
gameOver.setAnimation("gameOver");
gameOver.scale = 0.5;
restart.setAnimation("restart");
restart.scale = 0.5;

gameOver.visible = false;
restart.visible = false;

//set text
textSize(18);
textFont("Georgia");
textStyle(BOLD);

//score
var count = 0;

function draw() {
  //set background to white
  background("white");
  //display score
  text("Score: "+ count, 250, 100);
  console.log(gameState);
  
  if(gameState === PLAY){
    //move the ground
    ground.velocityX = -(6 + 3*count/100);
    //scoring
    count=count+Math.round(World.frameRate/60);

    
    if (count>0 && count%100 === 0){
      playSound("assets/checkPoint.mp3");
    }
    
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
    
     //jump when the space key is pressed
    if(keyDown("space") && trex.y >= 359){
      trex.velocityY = -12 ;
      playSound("assets/jump.mp3");
    }
  
    //add gravity
    trex.velocityY = trex.velocityY + 0.8;
    
    //spawn the clouds
    spawnClouds();
  
    //spawn obstacles
    spawnObstacles();
    
    //End the game when trex is touching the obstacle
    if(ObstaclesGroup.isTouching(trex)){
      playSound("assets/jump.mp3");
      gameState = END;
      playSound("assets/die.mp3");
    }
  }
  
  else if(gameState === END) {
    gameOver.visible = true;
    restart.visible = true;
    
    //set velcity of each game object to 0
    ground.velocityX = 0;
    trex.velocityY = 0;
    ObstaclesGroup.setVelocityXEach(0);
    CloudsGroup.setVelocityXEach(0);
    
    //change the trex animation
    trex.setAnimation("trex_collided");
    
    //set lifetime of the game objects so that they are never destroyed
    ObstaclesGroup.setLifetimeEach(-1);
    CloudsGroup.setLifetimeEach(-1);
    
    
  }
  
  if(mousePressedOver(restart)) {
    reset();
  }
  
  //console.log(trex.y);
  
  //stop trex from falling down
  trex.collide(invisibleGround);
  
  drawSprites();
}

function reset(){
  gameState=1
ObstaclesGroup.destroyEach()
CloudsGroup.destroyEach()
count=0
trex.setAnimation("trex")
gameOver.visible=false
restart.visible=false
}

function spawnObstacles() {
  if(World.frameCount % 60 === 0) {
    var obstacle = createSprite(400,365,10,40);
    obstacle.velocityX = - (6 + 3*count/100);
    
    //generate random obstacles
    var rand = randomNumber(1,6);
    obstacle.setAnimation("obstacle" + rand);
    
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.5;
    obstacle.lifetime = 70;
    //add each obstacle to the group
    ObstaclesGroup.add(obstacle);
  }
}

function spawnClouds() {
  //write code here to spawn the clouds
  if (World.frameCount % 60 === 0) {
    var cloud = createSprite(400,320,40,10);
    cloud.y = randomNumber(280,320);
    cloud.setAnimation("cloud");
    cloud.scale = 0.5;
    cloud.velocityX = -3;
    
     //assign lifetime to the variable
    cloud.lifetime = 134;
    
    //adjust the depth
    cloud.depth = trex.depth;
    trex.depth = trex.depth + 1;
    
    //add each cloud to the group
    CloudsGroup.add(cloud);
  }
  
}



// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
