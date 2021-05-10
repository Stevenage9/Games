var personImage, person, persondead
var ground, groundImage
var covid, covidimg
var distance
var bg
var vaccine, vaccineImg
var gameState

function preload(){
  personImage=loadImage("assets/person.png")
  persondead=loadImage("assets/persondead.png")

  bg=loadImage("assets/bg.png")

  groundImage=loadImage("assets/ground.png")

  vaccineImg=loadImage("assets/vaccine.png")

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

  distance=1800

gameState=1

  vaccine=createSprite(456, 860, 50,50)
  vaccine.addImage("vaccine", vaccineImg)
  vaccine.visible=false

}

function draw () {
  background(bg)

  fill("green")
  textSize(30)
  text("Distance travelled: "+ distance, 130, 100)
if (gameState===1){

distance=distance+Math.round(getFrameRate()/60)

if(keyDown("space")&&(person.y>856)){
  person.velocityY= -17}

if(ground.x<0){
  ground.x=ground.width/3}

if(distance>2000){
  vaccine.visible=true
  vaccine.velocityX=-2}


if(person.collide(covidGroup)){
    distance=distance-50
    covidGroup.destroyEach
    person.velocityX=0
  }
    
if (person.collide(vaccine)){
  gameState=2
}



spawnCovid()
person.velocityY=person.velocityY+1

}

else if(gameState===2){
vaccine.visible=false
ground.velocityX=0
person.velocityX=0
person.velocityY=0

fill("#fcca03")
textSize(50)
stroke("black")
strokeWeight(5)
text("You have been vaccinated and beat the virus", 0, 500)
}




person.collide(ground)
  drawSprites()
}
function spawnCovid() {
  if(frameCount % 120 === 0) {
    var covid = createSprite(1050,900,10,40);
    covid.velocityX = -10-(distance/100);
    

    //generate random obstacles
    var rand = Math.round(random(1,2));
    switch(rand) {
      case 1: covid.addImage(virus);
              break;
      case 2: covid.addImage(virus2);
              break;
      default: break;
    }
    
    //assign scale nad lifetime to the obstacle           
    covid.scale = 0.2;
    covid.lifetime = 300;
    //add each obstacle to the group
    covidGroup.add(covid);
  }
}