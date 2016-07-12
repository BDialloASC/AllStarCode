from Myro import *


def drawShape():
    sides = input("How many sides to this polygon? : ")
    size = input("How big? : ")
    init("sim")
    penDown()
    i = 0
    while i < sides:
        forward(1,size)
        turnBy(360/sides)
        i+=1
    penUp()

def drawSquare():
    drawShape()
    
def drawSquareAtAngle(angle):
    turnBy(angle)
    drawSquare()  
 
  
             
drawShape()
