// AMazeIng(ReVamped) Boubacar Diallo 2016
/* @Project- I chose to re-vamp and use my maze project because creating whack-a-mole requires timing features which would be 
    very complicated to do in p5.js, or require outside javascript functions , taking some of the focus off of the p5 API itself. 
    (And doing things like that might be a turn-off to students).  
 */

/* APPROACH
    I used a bottom-up approach, first creating the setup, then building small parts in the draw function 
    and testing them, creating other functions when needed and building up the project.
    (This was also how my group went about it during the summer, and probably how most other students went with p5)
*/

var ballX, ballY; //vars for x,y value of the player 
var color;       //color of the player
// variables that will hold arrays with r,g,b color values of the ball, walls, and finish spot(win)
var ballcolor, wallcolor, wincolor;  

//array that will hold arrays of rgba values for each of four corners on the player
var corners = [[0 , 0 ,0 ,0 ] , [0 ,0 , 0 ,0] , [0,0,0,0] , [ 0,0,0,0]];  

var level;   //level of the game
var startX = 25;   //first starting x,y values for the player
var startY = 25;
var speed = 3;     //speed of movement


function setup(){ 
    createCanvas(500,500); //create the canvas 
    noStroke();            //take off borders from shapes so they don't interfere with pixel colors later on
    ballX = startX;   // setting the player's x,y values to the start
    ballY = startY;
    color=1;          // setting color of the player, (see getColor() function)
    level = 0;        // start with practice level
}


//Movement Function
function keyPressed(){  
    loadPixels();    //needed to get pixels in the canvas, which will be used for detecting collisions
    edge = 16;       // variable for how many pixels away from center the corners being used for collision detection will be 
    if (keyIsDown(UP_ARROW) || key == "w" ){
        ballY-=speed;                        //UP: set the players y value lower if either up or w is pressed to imitate movement
    }                                            
    if (keyIsDown(DOWN_ARROW) || key == "s"){ 
        ballY+=speed;                       //DOWN: y value higher if down/s pressed
    }
    if (keyIsDown(LEFT_ARROW) || key == "a"){
        ballX-=speed;                       //LEFT: x value lower if left/a pressed
    }
    if (keyIsDown(RIGHT_ARROW) || key == "d"){
        ballX+=speed;                       //RIGHT: x value higher if right/d pressed
    }
    
    /* each value in the corners array is set to an rgba array for each of the four corners
       get(x,y) returns the rgba array for the pixel at x,y
       using this we can get the color at each of the four corners of the player (just wont be using that 4th "a" value)
    */
    corners[0]=get(ballX,ballY-edge); //rgba for pixel directly above uppermost part of circle
    corners[1]=get(ballX,ballY+edge); //rgba for pixel directly below lowermost part of circle
    corners[2]=get(ballX-edge,ballY); //rgba for pixel directly to left of leftmost part of circle
    corners[3]=get(ballX+edge,ballY); //rgba for pixel directly to right of rightmost part of circle
    
    //now if the color changes at any of these 4 corners, it means the circle has touched something
}


//Set the color of the player
function getColor(){
    //White
    if (color==1){
        ballcolor = 255;  //using 1 number is allowed because it is assumed to be the value for r, g ,and b
    } 
    //Red
    if (color==2){
        ballcolor = [255,0,0];
    } 
    //Blue
    if (color==3){
        ballcolor = [0,255,0];
    } 
    //Green
    if (color==4){
        ballcolor = [0,0,255];
    } 
}



//set up the level the player is on
function loadLevel(){
    
    if(level == 0){                //FIRST LEVEL
        wallcolor = [255,168,232]; // set color of the walls for this level
        wincolor = [156,248,122];  // set color of the finish spot
        fill(wincolor);            //fill with color of the winning spot so the next shape will have this color    
        rect(450,450,50,50);       //winning spot
        fill(wallcolor);           //fill with color of walls so next shapes will be this color
        rect(0,60,150,20);         // create rectangles to make a simple maze
        rect(140,60,20,450);
        rect(350,0,20,400);
        rect(350,400,150,20); 
        startX = 25;              //set the starting position for this level
        startY = 25;              //starting positions could be different in other levels
    }
    
    if(level == 1){               //SECOND LEVEL
        wallcolor = [255,168,232];    //Same as first level, just different positions of wall rectangles
        wincolor = [156,248,122];
        fill(wincolor);
        rect(450,450,50,50);
        fill(wallcolor);
        rect(0,75,300,25);
        rect(200,425,300,25);
        rect(200,175,300,25);
        rect(0,300,300,25);
        startX = 25;
        startY = 25;
    }

}



//Test if 2 rgb arrays have the same values (which means the pixels with these 2 arrays have the same color)
//@params- ca1 (color array 1) and ca2 are the 2 arrays to be compared 
function sameColor(ca1,ca2){
    return (ca1[0]==ca2[0] && ca1[1]==ca2[1] && ca1[2]==ca2[2]);
    //if the first 3 values in each array are the same, then they have the same rgb values and are the same color
}



//Test if player has hit wall
function checkhit(){
    for (var i = 0; i<corners.length; i++) { //loop through the corners array for each corner (top,bottom,left, right)
            //temporary variable holding rgba values for the current corner we're at in the loop at the players current position
            var pix = corners[i]; 
            if(sameColor(wallcolor, pix)){   // if the current corner has the same color as the walls, the player has hit
                reset();  //get sent back to the beginning 
            }
        }
}

//Send the player back to the starting point if they have lost
function reset(){
    ballX = startX;    //set the x,y values to the starting ones to place them back at the beginning
    ballY = startY;
}

//test if player has reached end of level (player is completely inside green finish spot)
function checkwin(){
    var w = 0;  //temp var used for counting purposes
    for (var i = 0; i<corners.length; i++) { // again, loop through the rgba of the 4 corners here 
            var pix = corners[i];
            //this time, if the current corner has the finish spot color and thus this corner is in the finish line, increment the count
            if(sameColor(wincolor, pix)){ 
                w+=1;
              }
        }
    //if all 4 corners have entered the finish , then go to the win sequence
    if(w==4){
        win();
     }
}


//Once the player has won a level
function win(){
    level+=1;         //increment the level to go to the next one
    // change the color of the player to the next one in the loop(using mod so it goes back to the first color after running through them)
    color = (color + 1) % 4;  
    loadLevel();    // create the next level's setup (new wall positions, new starting point, new finish place)
    reset();        // set the player to the start for this new level
}


//you know what this does
function draw(){
    //if the player touches the edges of the canvas they lose and are sent back 
    if (ballX<15 || ballX>width-15 || ballY<15 || ballY>height-15){
        reset();
    }  
    
    background(50);   // recreate the background to fake motion
    getColor();       //get the current color of the player
    fill(ballcolor);   //fill the next shape with that color
    ellipse(ballX,ballY,30,30); //create the player!
    loadLevel();       //recreate the current level in every loop to keep it there
    checkhit();        //test for collisions with wall or the finish 
    checkwin();
    keyPressed();       //detect movement
    
    if (level>1){         //if both levels are finished, show that player has won
        textAlign(CENTER);
        text("you win!! for now",width/2-100,height/2-100,100,100)
        text("More levels coming soon", width/2, height/2, 100, 100);
    }
    
}

/* FINAL THOUGHTS
    This is very close to what students would realistically want to get done during the intensive, because it completes the main parts 
    while leaving a framework to build on. From here it would be very easy to add levels with more difficulty. 
    The maze project can be really fun once the framework of movement, collision detection, and level incrementation is down, because from there there are many possibilites and it leaves space for more involved and interesting levels.
    
    When doing the project during the summer, the biggest challenge was trying to get the color detection working so that we'd know when the color around the player had changed. Finding and then understanding the get() function used in keyPressed() took a lot of time and help from TAs, but once it worked it made the rest of the project much easier and much more flexible.
    
    Since we had already done pixels before this, it was familiar, so maybe combining that with array/list knowledge beforehand and hinting at using pixels for detection instead of just positions may have helped students get more out of the project.
*/