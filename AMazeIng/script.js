var ellipseX, ellipseY;
var color;
var ballr, ballg, ballb;
var pixr,pixg,pixb;
var wallr,wallg,wallb;
var winr,wing,winb
var pixelCorners =[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
var lvl,i;

function setup(){
    createCanvas(500,500);
    ellipseX=25;
    ellipseY=25;
    color=2;
    noStroke();
    winr = 156;
    wing = 248;
    winb = 122;
    lvl = 0;
    i = 0;
}

function keyPressed(){
    loadPixels();
    if (keyIsDown(UP_ARROW) || key == "w" ){
        ellipseY-=3;
        pixelCorners[0]=get(ellipseX,ellipseY-16).slice(0);
    }
    if (keyIsDown(DOWN_ARROW) || key == "s"){ 
        ellipseY+=3;
        pixelCorners[1]=get(ellipseX,ellipseY+16).slice(0);
    }
    if (keyIsDown(LEFT_ARROW) || key == "a"){
        ellipseX-=3;
        pixelCorners[2]=get(ellipseX-16,ellipseY).slice(0);
    }
    if (keyIsDown(RIGHT_ARROW) || key == "d"){
        ellipseX+=3;
        pixelCorners[3]=get(ellipseX+16,ellipseY).slice(0);
    }
}

function ballColor(){
    if (color==1){
        ballr=255;
        ballg=255;
        ballb=255;
    } //White
    if (color==2){
        ballr=255;
        ballg=0;
        ballb=0;
    } //Red
    if (color==3){
        ballr=0;
        ballg=0;
        ballb=255;
    } //Blue
    if (color==4){
        ballr=0;
        ballg=255;
        ballb=0;
    } //Green
}



function loadLevel(){
    if(lvl==0){
        fill(255,168,232)
        rect(0,50,150,10);
        rect(140,50,10,450);
        rect(350,0,10,450);
        rect(350,440,150,10); 
        wallr = 255;
        wallg = 168;
        wallb = 232;
    }
    if(lvl ==1){
        fill(255,168,232);
        rect(0,50,300,25);
        rect(200,425,300,25);
        rect(200,175,300,25);
        rect(0,300,300,25);
        wallr = 255;
        wallg = 168;
        wallb = 232;

    }

}


function hit(){
    i = 0;
    for (var i = 0; i<pixelCorners.length; i++) {
            pixr = pixelCorners[i][0];
            pixg = pixelCorners[i][1];
            pixb = pixelCorners[i][2];
            console.log(pixr,pixg,pixb);
            if(wallr==pixr && wallg==pixg && wallb==pixb){
                reset();
              }
            if(156==pixr && 248==pixg && 122==pixb){
                i+=1
                console.log(i);
                if(i==4){
                        win();
                    }
                }
            }
        }


function reset(){
    ellipseX = 25;
    ellipseY = 25;
}

function win(){
   /* won = document.createElement("button");
    won.textContent = "YOU WON";
    $("body").append(won);
    */
    lvl+=1;
    ellipseX=25;
    ellipseY=25;
}

function draw(){
    background(50);
    fill(156,248,122);
    rect(450,450,50,50);
    ballColor();
    fill(ballr, ballg, ballb);
    ellipse(ellipseX,ellipseY,30,30);
    loadLevel();
    hit();
    if (ellipseX<5){
        reset();
    }  
    if (ellipseX>495){
        reset();
    }
    if (ellipseY<5){
        reset();
    }
    if (ellipseY>495){
        reset();
    }
    keyPressed();
    if (lvl>1){
        textAlign(CENTER);
        text("YOU WIN", width/2, height/2, 200, 200);
        delay(3);
        lvl=0;
    }
}