var sword, sword_img;
var fruit1, fruit2, fruit3, fruit4;
var enmy, enmy_image;
var fruit_grp, enemy_grp;
var play = 1;
var end = 0;
var gamestate = play;
var score = 0;
var nice_sound, gameover_sound;

function preload(){
  sword_img = loadImage("sword.png")
  fruit1 = loadImage("fruit1.png")
  fruit2 = loadImage("fruit2.png")
  fruit3 = loadImage("fruit3.png")
  fruit4 = loadImage("fruit4.png")
  enmy_image = loadImage("alien1.png")
  nice_sound = loadSound("knifeSwooshSound.mp3")
  gameover_sound = loadSound("gameover.mp3")
}

function setup(){
  createCanvas (600, 600);
  sword = createSprite(300, 550)
  sword.addImage(sword_img)
  fruit_grp = new Group()
  enemy_grp = new Group()
}

function draw(){
  background("green");
  if(gamestate === play){
    drawSprites();
  sword.x = mouseX;
  sword.y = mouseY;
  fruits();
  enemy();
    if(fruit_grp.isTouching(sword)){
    fruit_grp.destroyEach();
    score = score+1;
    nice_sound.play()
    }
    if(enemy_grp.isTouching(sword)){
      gamestate = end;
      gameover_sound.play()
    }
    fill("black");
    text("your score is "+score, 400, 50)
  }
  else if(gamestate === end){
  textSize(30);
  fill("yellow")
  stroke("orange")
  strokeWeight(5)
  text("gameover", 200,200);
  }
}

function fruits(){
  if (World.frameCount%80 === 0){
    fruit = createSprite(400,200,20,20)
    fruit.velocityX = -5
    fruit.y = Math.round(random(50,500));
    fruit.scale = 0.2
    fruit_grp.add(fruit)
    r=Math.round(random(1,4));
    switch(r){
      case 1: fruit.addImage(fruit1)
      break;
      case 2: fruit.addImage(fruit2)
      break;
      case 3: fruit.addImage(fruit3)
      break;
      case 4: fruit.addImage(fruit4)
      break;
      default: break;
    }
  }
}

function enemy(){
  if (World.frameCount%110 === 0){
    enmy = createSprite(600,200,20,20)
    enmy.velocityX = -5
    enmy.y = Math.round(random(50,500));
    enmy.addImage(enmy_image)
    enemy_grp.add(enmy)
  }
}
