var face;
var hX,hY;
var fX,fY;
var speed=5;
var bodySize = 10;
var up,down,left,right;
var firstx,firsty;
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
	//snake.add(h);
}


function draw(){
	background(0);
	f = createSprite(fX,fY,5,5);
	drawSprites();
	hit();
	eat();
	move();
	//drawSprites();
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
    for (var i = 1; i < snake.length; i++) {
    	if(i==1){
    		
    	}
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
			firsty = h.position.y+50;
		}
		else if(down){
			firstx = h.position.x;
			firsty = h.position.y-50;
		}
		else if(left){
			firstx = h.position.x+50;
			firsty = h.position.y;
		}
		else if(right){
			firstx = h.position.x-50;
			firsty = h.position.y;
		} 
		var body = createSprite(firstx,firsty,bodySize,bodySize);
		if(!(eaten)){
			/*var body2 = createSprite(firstx,firsty,bodySize,bodySize);
			var body3 = createSprite(firstx,firsty,bodySize,bodySize);
			body2.visible = false;
			body3.visible = false;
			snake.add(body2);
			snake.add(body3);*/

		}
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
	/*
	for (var i = 4; i < snake.length; i++) {
		if(h.bounce(snake.get(i))){
			h.velocity.x = 0;
			h.velocity.y = 0;
			console.log("self");
			noLoop();
		}
	}
	*/

	if(h.bounce(snake)) {  //hits self
		h.velocity.x = 0;
		h.velocity.y = 0;
		console.log("self");
		noLoop();
	}

}

