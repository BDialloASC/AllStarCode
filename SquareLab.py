from Myro import *
init("sim")

def drawShape(sides,size):
    #sides = input("How many sides to this polygon? : ")
    #size = input("How big? : ")
    """Didn't use the input because the prompt
       kept popping up behind the sim window
       and numbers wouldnt be able to be entered
       So the script would have to be stopped"""
    penDown()
    i = 0
    while i < sides:
        forward(1,size)
        turnBy(360/sides)
        i+=1
    penUp()

def drawSquare():
    drawShape(4,1)
    
def drawSquareAtAngle(angle):
    turnBy(angle)
    drawSquare()  
 
  
             
drawSquare()
forward(1,2)
drawShape(8,1)
