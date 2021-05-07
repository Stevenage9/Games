var personImage, person, persondead
var ground, groundImage
var covid, covidimg
var distance
var bg

function preload(){
  personImage=loadImage("assets/person.png")
  persondead=loadImage("assets/persondead.png")

  bg=loadImage("assets/bg.png")

  groundImage=loadImage("assets/ground.png")

  
  virus=loadImage("assets/virus.png")
  virus2=loadImage("assets/virus2.png")
}
function setup(){
  createCanvas(1000, 1000)

  person=createSprite(50,750,100,100)
  person.addImage("running", personImage)


  ground=createSprite(500, 990, 1000, 42)
  ground.addImage("ground", groundImage)

  ground.x=ground.width/2
  ground.velocityX=-5

covidGroup= new Group()

  distance=0

}

function draw () {
  background(bg)
  distance=distance+Math.round(getFrameRate()/60)
  fill("green")
  textSize(30)
  text("Distance travelled: "+ distance, 130, 100)

if(keyDown("space")){
  person.velocityY= -10
}

if(ground.x<0){
  ground.x=ground.width/3

}

spawnCovid()
person.velocityY=person.velocityY+1
person.collide(ground)
  drawSprites()
}
function spawnCovid() {
  if(frameCount % 120 === 0) {
    var covid = createSprite(570,840,10,40);
    covid.velocityX = -4;
    
    //generate random obstacles
    var rand = Math.round(random(1,2));
    switch(rand) {
      case 1: covid.addImage(virus);
              break;
      case 2: covid.addImage(virus2);
              break;
      default: break;
    }
    
    //assign scale and lifetime to the obstacle           
    covid.scale = 0.3;
    covid.lifetime = 300;
    //add each obstacle to the group
    covidGroup.add(covid);
  }
}