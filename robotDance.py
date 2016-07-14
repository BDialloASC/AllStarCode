#Robot Dance
#Boubacar and Joshua
from Myro import *
init("COM4")

#Main Dance Function
def RobotDance():
    i=0
    while (i<4):
        frontBack(0.5,2)
        motors(-0.5,3,1)
        frontBack(0.5,1)
        backWiggle(2)
        frontWiggle(2)
        motors(0.5,3,1)
        i+=1
    firstVerse()       
      
#Makes robo go  forward and backward
def frontBack(speed,times):
    i=0
    while(i<times):
        forward(speed,1)
        backward(speed,1)
        i=i+1
#Makes the robo wiggle while moving backward
def backWiggle(times):
    i = 0
    while(i<times):
        motors(-3,1,0.5)
        motors(1,-3,0.5)
        i=i+1
   
#Makes robo wiggle while moving forward
def frontWiggle(times):
    i = 0
    while(i<times):
        motors(3,1,0.5)
        motors(1,3,0.5)
        i=i+1
    
#Robo does moves singer describes                      
def firstVerse():
    forward(1,2)
    backward(1,2)
    motors(-1,3,6)
        
#calls out dance
RobotDance()