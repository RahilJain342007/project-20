var canvas;
var cat1,cat2,cat4;
var mouse1,mouse2,mouse4;
var garden,ground;

function preload() {
    cat1 = loadAnimation("images/cat1.png") ;
    cat2 = loadAnimation("images/cat2.png","images/cat3.png");
    cat4 = loadAnimation("images/cat4.png");
    mouse1 = loadAnimation("images/mouse1.png");
    mouse2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    mouse4 = loadAnimation("images/mouse4.png");
    garden = loadImage("images/garden.png");
}

function setup(){
    createCanvas(1000,800);
    cat = createSprite(870,600);
    cat.addAnimation("catSleeping",cat1);
    cat.scale = 0.2;


    mouse = createSprite(200,600);
    mouse.addAnimation("mouseStanding",mouse1);
    mouse.scale = 0.15;

    //ground = createSprite(180,200,100,100);
    //ground.addAnimation(garden);

}

function draw() {
  background(garden);
   if(cat.x - mouse.x < (cat.width - mouse.width)/2){
       cat.addAnimation("catLastImage",cat4);
       cat.changeAnimation("catLastImage");
       cat.velocityX = 0;
       cat.x = 300;
       
       mouse.addAnimation("mouseLastImage",mouse4);
       mouse.changeAnimation("mouseLastImage");
       mouse.scale = 0.15;
   }
   keyPressed();
 drawSprites();

 text(mouseX + ',' + mouseY,10,45);
 
}


function keyPressed(){

if(keyCode === LEFT_ARROW){
    cat.velocityX = -4;
    cat.addAnimation("runningCat",cat2);
    cat.changeAnimation("runningCat");
    mouse.addAnimation("dancingMouse",mouse2);
    mouse.changeAnimation("dancingMouse");
    mouse.frameDelay = 25;
  }
}
