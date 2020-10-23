
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine;
var world;
var Rain=[];
var thunder1;
var thunder2;
var thunder;
var thunder3;
var thunder4;
var umbrella;
var umbrella1;
var umbrella2;
var umbrella3;
var umbrella4;
var umbrella5;
var umbrella7;
var umbrella6;
var umbrella8;
var rain;
var drop
function preload(){
    thunder1=loadImage("proc41images/1.png");
    thunder2=loadImage("proc41images/2.png");
    thunder3=loadImage("proc41images/3.png");
    thunder4=loadImage("proc41images/4.png");
}

function setup(){
    createCanvas(500, 700);
engine=Engine.create();
world=engine.world
    umbrella=new Umbrella(250,550);
}

function draw(){
    background("black");
        Engine.update(engine);
    umbrella.display();

    var maxDrops=100;
    if(frameCount%25===0){
   for(var i=0;i<maxDrops;i++){
Rain.push(new Drop(random(1,400),random(1,200)));

   }
}

   if(frameCount%80===0){

rand=Math.round(random(1,4))
    thunder=createSprite(random(1,200),10,20,20);
    switch(rand) {
        case 1:
         thunder.addImage(thunder1)
          break;
        case 2:
            thunder.addImage(thunder2)
          break;
        case 3:
            thunder.addImage(thunder3)
          break;
        default:
            thunder.addImage(thunder4)
      }
    }
    if(frameCount%90===0){
        thunder.destroy();
    }
    

    for (var i = 0; i < Rain.length; i++) {
        Rain[i].display();
       }
    drawSprites();
   
}   



