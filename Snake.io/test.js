var face;
var fX,fY;
var firstX,firstY;
var speed=5;
var up,down,left,right;
var eaten = false;


function preload(){
	face = loadImage("https://upload.wikimedia.org/wikipedia/commons/4/49/Pacman.svg");
}


function setup(){
	createCanvas(600,600);
	x = width/2
	y = height/2
	fX = random(width);
	fY = random(height);
	up = false;
	down = false;
	left = false;
	right = false;
	h = createSprite(x,y, 10, 10);
	h.addImage("head",face);
	h.scale = 0.05;
	h.rotateToDirection = true;
	snake = new Group();
}


function draw(){
	background(0);
	f = createSprite(fX,fY,10,10);
	drawSprites();
	hit();
	eat();
	move();
	snake.draw();
	drawSprites();
	f.remove();

}


function move(){
    if ((keyCode==UP_ARROW || key == "W") && !(down)){
    	h.velocity.x=0;
        h.velocity.y=speed;
		h.velocity.y=-speed;
    	up = true;
    	down = false;
    	right = false;
    	left = false;
    }

    if ((keyCode==DOWN_ARROW || key == "S") && !(up)){ 
    	h.velocity.x = 0;
        h.velocity.y=speed;
        down = true;
        up = false;
        right = false;
        left = false;
    }

    if ((keyCode == LEFT_ARROW || key == "A") && !(right)){
    	h.velocity.y=0;
    	h.velocity.x = -speed;
    	left = true;
    	right = false;
    	up = false;
    	down = false;
    }

    if ((keyCode==RIGHT_ARROW || key == "D") && !(left)){
    	h.velocity.y = 0;
    	h.velocity.x = speed;
    	right = true;
    	left = false;
    	up = false;
    	down = false;

    }
    moveSnake();
}


function bounds(){
	return (h.position.x>width-5 || h.position.x<5 ||
		h.position.y<5 || h.position.y>height-5) 
}


function moveSnake(){
 if(eaten){
	if(up){
		snake.get(0).position.x = h.position.x;
		snake.get(0).position.y = h.position.y+30;
	}
	else if(down){
		snake.get(0).position.x = h.position.x;
		snake.get(0).position.y = h.position.y-30;
	}
	else if(left){
		snake.get(0).position.x = h.position.x+30;
		snake.get(0).position.y = h.position.y;
	}
	else if(right){
		snake.get(0).position.x = h.position.x-30;
		snake.get(0).position.y = h.position.y;
	}
	snake.get(0).position.x = firstx;
	snake.get(0).position.y = firsty;
    for (var i = 1; i < snake.length; i++) {
    	snake.get(i).position.x = snake.get(i-1).previousPosition.x;
    	snake.get(i).position.y = snake.get(i-1).previousPosition.y;
    }
  }
}


function eat(){
	if(h.bounce(f)){ //eats food
		fX = random(width);
		fY = random(height);
		if(up){
			firstx = h.position.x;
			firsty = h.position.y+30;
		}
		else if(down){
			firstx = h.position.x;
			firsty = h.position.y-30;
		}
		else if(left){
			firstx = h.position.x+30;
			firsty = h.position.y;
		}
		else if(right){
			firstx = h.position.x-30;
			firsty = h.position.y;
		}  
		var body = createSprite(firstx,firsty,30,30);
		snake.add(body);
		eaten = true;
	}
}


function hit(){
	if(bounds()){       //hits wall
		h.velocity.x = 0;
		h.velocity.y = 0;
		console.log("wall");
		noLoop();
	}

	if(h.bounce(snake)) {  //hits self
		h.velocity.x = 0;
		h.velocity.y = 0;
		console.log("self");
		noLoop();
	}

}

