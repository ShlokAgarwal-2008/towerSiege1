const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var block1, block2, block3, block4, block5;
var block6, block7, block8;
var block9, block10, block11, block12, block13, block14;
var block15, block16, block17, block18;
var block19, block20;
var block21;
var ball;
var polygonImg;
var slingShot;

function preload(){
polygonImg = loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(1000, 500);
   engine = Engine.create();
   world = engine.world;
    Engine.run(engine);

   ball = Bodies.circle(50, 200, 20);
   World.add(world, ball);

    
   ground = new Ground(660, 315, 320, 15);
   block1 = new Block(520, 285);
   block2 = new Block(560, 285);
   block3 = new Block(600, 285);
   block4 = new Block(640, 285);
   block5 = new Block(680, 285);
   block6 = new Block(720, 285);
   block7 = new Block(760, 285);
   block8 = new Block(800, 285);
   block9 = new Block(560, 245);
   block10 = new Block(600, 245);
   block11 = new Block(640, 245);
   block12 = new Block(680, 245);
   block13 = new Block(720, 245);
   block14 = new Block(760, 245);
   block15 = new Block(600, 205);
   block16 = new Block(640, 205);
   block17 = new Block(680, 205);
   block18 = new Block(720, 205);
   block19 = new Block(640, 165);
   block20 = new Block(680, 165);
   block21 = new Block(660, 125);

   slingShot = new String(this.ball, {x:150, y:75});
}

function draw(){
    background("white");

    ground.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    imageMode(CENTER);
    image(polygonImg, ball.position.x, ball.position.y, 40, 40);
    slingShot.display();
}

function mouseDragged(){
    Matter.Body.setPosition(this.ball, {x: mouseX, y: mouseY})
}

function mouseReleased(){
    slingShot.fly();
}