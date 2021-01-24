class Foodmilk{

    constructor(){

        this.image = loadImage("Milk.png");
        this.foodStock = foodStock;
        this.lastFed = lastFed;

    }

    getFoodStock(){
        var getFoodStockRef = database.ref('Food');
        getFoodStockRef.on("value", function (data){
            Food = data.val();
        })
    }

    updateFoodStock(foodStock){
        database.ref('/').update({
            Food : foodStock
        })
    }

    deductFood(x){

    if(x<=0){
        x=0;
    }else{
        x=x-1;
        }
        
        database.ref('/').update({
        Food:x
        })
        
    }

    display(){
        var x = 80, y = 100;

        imageMode(CENTER);
        image(this.image, 720, 220, 70, 70);
        
        if(this.foodStock != 0){

            for (var i = 0; i<this.foodStock; i++){
                if(1%10==0){
                    x = 80;
                    y = y + 50;
                }
                image(this.image, x, y, 50, 50);
                x = x + 30;
            }

        }
    }

}