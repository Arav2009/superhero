var canvas=new fabric.Canvas('myCanvas');

block_image_width= 30;
block_image_height= 30;

player_X=10;
player_y=10;

var player_object="";
var block_object="";

function player_update()
{
    fabric.image.fromURL("https://images.unsplash.com/photo-1559535332-db9971090158?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYxNzQzMDA2NA&ixlib=rb-1.2.1&q=85", function(Img){
    player_object=Img;
    player_object.scaleToWidth(150);
    player_object.scaleToHeight(140);
    player_object.set({
     top:player_y,
     left:player_X
    });

    canvas.add(player_object);
    });
  
}

function new_image(get_image)
{
    fabric.image.fromURL(get_image, function(Img){
    block_object=Img;
    block_object.scaleToWidth(block_image_width);
    block_object.scaleToHeight(block_image_height);
    block_object.set({
     top:player_y,
     left:object_X
    });

    canvas.add(player_object);
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown
{
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(keyPressed=="70")
    {
        new_image('ironman_face.png');
        console.log("f");
    }
    if(keyPressed=="66")
    {
        new_image('spiderman_body.png');
        console.log("b");
    }
    if(keyPressed=="76")
    {
       new_image('hulk_leg.png');
       console.log("l");
    }
    if(keyPressed=="82")
    {
        new_image('thor_right_hand.png');
        console.log("r");
    }
    if(keyPressed=="72")
    {
        new_image("captain_america_left_hand.png");
        console.log("h");
    }
    if(keyPressed=="38")
    {
        up();
        console;.log("up");
    }
    if(keyPressed=="40")
    {
        down();
        console.log("down");
    }
    if(keyPressed=="37")
    {
        left();
        console.log("left");
    }
    if(keyPressed=="39")
    {
        right()
        console.log("right")
    }
}
