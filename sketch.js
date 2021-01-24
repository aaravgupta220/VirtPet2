var dog, happyDog, database, foodS, foodStock;
var dog_Image, happyDog_Image;
var feed, addFood;
var fedTime, lastFed;
var foodObj;
var count;
var playerCount = 0;
var form, player;

function preload(){

  dog_Image = loadImage("dogImg.png");
  happyDog_Image = loadImage("dogImg1.png");

}

function setup() {

  createCanvas(500, 500);
  dog = createSprite(250, 250, 30, 30);
  dog.addImage(dog_Image, "dgimage");
  dog.scale = 0.2;

  database = firebase.database();

  foodObj = new Foodmilk();
  foodObj.getFoodStock();
  foodObj.updateFoodStock(foodS);

  feed = createButton("Feed the Dog");
  feed.position(700, 95);
  feed.mousePressed(feedDog);

  addFood = createButton("Add Food");
  addFood.position(800, 95);
  addFood.mousePressed(addFoods);

}


function draw() {  

  background(46, 139, 87)

  foodObj.display();

  drawSprites();
  
  fill(255, 255, 254);
  textSize(15);

  if(lastFed >= 12){
    text("Last Feed : " + lastFed%12, + " PM", 350, 30);
  }else if(lastFed == 0){
    text("Last Feed : 12 AM", 350, 30);
  }else{
    text("Last Feed : " + lastFed + " AM", 350, 30);
  }

}

function feedDog(){

  dog.addImage(happyDog_Image);

  foodObj.updateFoodStock(foodObj.getFoodStock()-1);
  database.ref('/').update({
    Food : foodObj.getFoodStock(),
    FeedTime : hour()
  })

}

function addFoods(){
  foodS++;
  database.ref('/').update({
    Food : foodS
  })
}