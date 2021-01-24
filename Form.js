class Form{

    constructor(){}

    display(){

    var input = createInput("Name : ");
    input.position(250, 250);

    var button = createButton("Enter");
    button.position(250, 300);

    var greeting = createElement('h3');
    button.mousePressed( function (){
            
        input.hide();
        button.hide();
        var name = input.value();

        playerCount+=1;
        player.update(name);
        player.updateCount(playerCount);

        greeting.html("Your dog is ", + name, "!");
        greeting.position(240, 350);
    });


}

}