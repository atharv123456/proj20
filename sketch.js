var cat , cata,catab,catabc,;
var catImage,catImage1,catImage2,catImage3;
var rat,rata,ratab,ratabc;
var ratImage,ratImage1,ratImage2,ratImage2;
var garden,gardenImage;

function preload() {
    //load the images here
    catImage=loadImage("cat1.png");
    catImage1=loadImage("cat2.png");
    catImage2=loadImage("cat3.png");
    catImage3=loadImage("cat4.png");

    ratImage=loadImage("rat1.png");
    ratImage1=loadImage("rat2.png");
    ratImage2=loadImage("rat3.png");
    ratImage3=loadImage("rat4.png");

    gardenImage=loadImage("garden.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    cat=createSprite(200,200,20,20);
    cat.addImage(catImage);

    rat=createSprite(300,300,20,20);
    rat.addImage(ratImage);

    background=createSprite(20,20,200,200);
    background.addImage(backgroundImage);
    


}

function draw() {

    
    //Write condition here to evalute if tom and jerry collide
text(mouseX+','+mouseY,10,45);
if(cat.x-mouse.x<(cat.width-mouse.width)/2);

if(cat.isTouching(rat)){
    cat.velocityX=0;
}

cat.addAnimation("catlastImage",catImage3);
cat.changeAnimation("catlastImage");

    drawSprites();
}


function keyPressed(){

 if(keyCode===LEFT_ARROW){
     cat.velocityX=-5;
     cat.addAnimation("catrunning",catImage1);
     cat.changeAnimation("catrunning");
 }

 if(keyCode===RIGHT_ARROW){
    cat.velocityX=5;
    cat.addAnimation("catrunning",catImage1);
    cat.changeAnimation("catrunning");


}
