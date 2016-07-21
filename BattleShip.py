#BattleShip
from Processing import *
from random import *

size(600,600)

edge = width()-50
board = [[]]
guesses = [[]]
tiles = 10
sideLength = (width()-100)/tiles
missile = loadImage("missile.jpg")
explosion = loadImage("explosion.jpg")
textFont("Comic Sans MS Normal") #BestFont
msg = ""
clicks = 1

def newBoard():
    global tiles,sideLength,board
    gateX = 50
    gateY = 50
    for i in range(tiles):
        for j in range(tiles):
            board[i].append(0)
            guesses[i].append(False)
            rect(gateX,gateY,sideLength,sideLength)
            gateX+= sideLength
        board.append([])
        guesses.append([])
        gateX = 50
        gateY+= sideLength
        
    board[4][4] = 1
    board[randrange(tiles)][randrange(tiles)] = 1
    text("BATTLESHIP",width()/3-25,5,width()/3,sideLength-10)

def showBoard():
    global tiles,sideLength,board,missile,msg
    gateX = 50
    gateY = 50
    for i in range(tiles):
        for j in range(tiles):
            fill(255)
            rect(gateX,gateY,sideLength,sideLength)
            gateX+=sideLength
            if(guesses[i][j]):
                image(missile,sideLength*(j)+50,sideLength*(i)+50,sideLength,sideLength)
        gateX = 50
        gateY+= sideLength
    text(msg,width()/3-25,5,width()/3,sideLength-10)
   
     
def shoot(r,c):
    global sideLength,board,missile
    row = r-1
    col = c-1
    if(board[row][col]==1):
        i = 10
        while(i>0):
            background(240)
            showBoard()
            fill(255,0,0)
            ellipse((sideLength)*(col+0.5)+50,(sideLength)*(row+0.5)+50,
                     sideLength*i,sideLength*i)   
            i-=2
            delay(10)
        image(explosion,sideLength*(col)+50,sideLength*(row)+50,sideLength,sideLength)
        return True
    else:
        i = 10
        while(i>0):
            background(240)
            showBoard()
            fill(0,0,255)
            ellipse((sideLength)*(col+0.5)+50,(sideLength)*(row+0.5)+50,
                     sideLength*i,sideLength*i)
            i-=3
            delay(10)
        guesses[row][col] = True
        print(row,col)
        return False


def doMouseClicked():
   global clicks
   gateX = 50
   gateY = 50
   r = 0
   c = 0
   if(50<mouseX()<edge and 50<mouseY()<edge):
    while(mouseX()>gateX):
        while(mouseY()>gateY):
            gateY+=sideLength
            r +=1
        gateX+=sideLength
        c +=1
    if(guesses[r][c]):
        msg = "Already shot this spot!"
        showBoard()
    if(shoot(r,c)):
        msg = "HIT"
        clicks+=1
    else:
        msg = "MISS"
        clicks+=1
    
    
    
            

def BattleShip():
    newBoard()

onMouseClicked+=doMouseClicked
BattleShip()
