
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var gs='aim'
var s=0 

function setup() {
	createCanvas(650,500);
    engine = Engine.create();
	world = engine.world;
	w1=new Wall(250,250,20,500)
    w2=new Wall(550,250,20,500)
    w3=new Wall(325,450,20,100)
    w4=new Wall(400,450,20,100)
    w5=new Wall(475,450,20,100)
    w6=new Wall(400,500,400,10)


    b1=new Ball(300,150,10)
    b2=new Ball(400,150,10)
    b3=new Ball(500,150,10)
    b4=new Ball(350,200,10)
    b5=new Ball(450,200,10)
    b6=new Ball(300,250,10)
    b7=new Ball(400,250,10)
    b8=new Ball(500,250,10)
    b9=new Ball(350,300,10)
    b10=new Ball(450,300,10)
    b11=new Ball(350,100,10)
    b12=new Ball(450,100,10)
    b13=new Ball(270,400,10)
    b14=new Ball(360,400,10)
    b15=new Ball(420,400,10)
    b16=new Ball(520,400,10)
    b17=new Ball(300,300,10)
    b18=new Ball(350,100,10)
    b19=new Ball(450,100,10)

    p=new Particle(400,50)
    
    Engine.run(engine);
  
}


function draw() {
  background(0);
  fill('white')
  textSize(35)
  text('score:'+s,50,50)
  textSize(20)
  text('space to deploy',50,70)
  text('up arrow to reset',50,90)
  textSize(15)
  text('100',270,450)
  text('1000',340,450)
  text('500',420,450)
  text('750',490,450)
  w1.display()
  w2.display()
  w3.display()
  w4.display()
  w5.display()
  w6.display()
  b1.display()
  b2.display()
  b3.display()
  b4.display()
  b5.display()
  b6.display()
  b7.display()
  b8.display()
  b9.display()
  b10.display()
  b11.display()
  b12.display()
  b13.display()
  b14.display()
  b15.display()
  b16.display()
  b17.display()
  b18.display()


  if(gs !='deployed'){
    Matter.Body.setPosition(p.body, {x: mouseX , y:50});
    
  }
  if(p.body.position.x<540&&p.body.position.x>270){
  if(keyCode == 32){
    gs='deployed'
  }
}
  if(keyCode == UP_ARROW &&  gs=='deployed'){
    gs='aim' 
    s=0
  }
  score()
p.display()
  
}

function score(){
  if(p.body.position.y>450&&gs=='deployed'){
    if(p.body.position.x<300&&p.body.position.x>250){
      s=100
    }
    if(p.body.position.x<400&&p.body.position.x>310){
      s=1000
    }
    if(p.body.position.x<500&&p.body.position.x>400){
      s=500
    }
    if(p.body.position.x<550&&p.body.position.x>500){
      s=750
    }
  }
}



