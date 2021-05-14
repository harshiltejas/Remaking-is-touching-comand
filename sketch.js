var cat,catImg,catImg2,mouse1,mouseImg,mouseImg2,mouseImg3,background1,background1Img;
function preload() {
    //load the images here
    catImg = loadImage("images/cat2.png")
    mouseImg = loadImage("images/mouse1.png")
    background1Img = loadImage("images/garden.png")
    catImg2 = loadImage("images/cat4.png")
    mouseImg2 = loadImage("images/mouse2.png")
    mouseImg3 = loadImage("images/mouse3.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
     cat = createSprite(900,700,50,50);
     cat.addImage(catImg)
     cat.scale = 0.15;

     mouse1 = createSprite(300,700,50,50);
     mouse1.addImage(mouseImg)
     mouse1.scale = 0.1;

    
}

function draw() {

    cat.x = World.mouseX;
    cat.y = World.mouseY;
   


    background(background1Img);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse1.x > -(cat.width/2 + mouse1.width/2) &&
    cat.x - mouse1.x < (cat.width/2 + mouse1.width/2)&& 
    cat.y - mouse1.y > -(cat.height/2 + mouse1.height/2) &&
    cat.y - mouse1.y < (cat.height/2 + mouse1.height/2)){
    cat.addImage("cattt",catImg2)
    cat.changeImage("cattt");
    mouse1.addImage("mouseee",mouseImg2)
    mouse1.changeImage("mouseee");
    } 
    else{
        mouse1.addImage("mousee",mouseImg)
        mouse1.changeImage("mousee")

        cat.addImage("catt",catImg)
        cat.changeImage("catt") 
    }
    
    keyPressed();

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  
  if(keyCode === LEFT_ARROW){
    mouse1.addImage("mouseteasing",mouseImg3)
      mouse1.changeImage("mouseteasing")
  }


}
