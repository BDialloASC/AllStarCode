from Myro import *
from Graphics import *
from random import *

width = 500
height = 500
sim = Simulation("Maze World", width, height, Color("gray"))

#outside walls
sim.addWall((10, 10), (490, 20), Color("black"))
sim.addWall((10, 10), (20, 490), Color("black"))
sim.addWall((480, 10), (490, 490), Color("black"))
sim.addWall((10, 480), (490, 490), Color("black"))

colors = ["red","green","blue","yellow","orange","violet","indigo"]


def makeCircle(X,Y,color):
    poly = Circle((X,Y), 45)
    poly.bodyType = "static"
    poly.color = Color(color)
    poly.outline = Color("black")
    sim.addShape(poly)


makeCircle(50,50,"red")
makeCircle(250,50,"green")
makeCircle(450,50,"blue")
makeCircle(50,250,"yellow")
makeCircle(50,450,"orange")
makeCircle(250,450,"violet")
makeCircle(450,450,"indigo")
makeCircle(450,250,"lime")


#begin simulation and sets robot's position
makeRobot("SimScribbler", sim)
sim.setPose(0, width/2, height/2, 0)

sim.setup()



#The following is a helper function 
#Inputs: A picture and a color represented by the list above
#Returns the average x location of the color in the picture or -1 if the robot has found the color spot
def findColorSpot(picture, color):
    xPixelSum = 0
    totalPixelNum = 0
    averageXPixel = 0
    show(picture)

    for pixel in getPixels(picture):
        if(color == 1 and getRed(pixel) > 200 and getGreen(pixel) == 0 and getBlue(pixel) == 0):#RED
            xPixelSum += getX(pixel)
            totalPixelNum += 1
        elif(color == 2 and getRed(pixel)== 0 and getGreen(pixel) > 90 and getBlue(pixel) == 0):#GREEN
            xPixelSum += getX(pixel)
            totalPixelNum += 1
        elif(color == 3 and getRed(pixel) == 0 and getGreen(pixel) == 0 and getBlue(pixel) > 200):#BLUE
            xPixelSum += getX(pixel)
            totalPixelNum += 1
        elif(color == 4 and getRed(pixel) > 200 and getGreen(pixel) > 200 and getBlue(pixel) == 0):#YELLOW
            xPixelSum += getX(pixel)
            totalPixelNum += 1
        elif(color == 5 and getRed(pixel) > 200 and getGreen(pixel)>100 and getGreen(pixel)< 200 and getBlue(pixel) == 0):#ORANGE
            xPixelSum += getX(pixel)
            totalPixelNum += 1
        elif(color == 6 and getRed(pixel) > 150 and getGreen(pixel) > 80 and getBlue(pixel) > 150):#VIOLET
            xPixelSum += getX(pixel)
            totalPixelNum += 1
        elif(color == 7 and getRed(pixel) > 50 and getGreen(pixel) == 0 and getBlue(pixel) > 80):#INDIGO
            xPixelSum += getX(pixel)
            totalPixelNum += 1   
        elif(color == 8 and getRed(pixel) == 0 and getGreen(pixel) > 200 and getBlue(pixel) == 0):#LIME
            xPixelSum += getX(pixel)
            totalPixelNum += 1   
    if(totalPixelNum != 0):
        averageXPixel = xPixelSum/totalPixelNum

    #Handles the case where robot has found the spot if it is near it
    #If necessary adjust the value
    if(totalPixelNum/(getWidth(picture)*getHeight(picture)) > 0.21):
        averageXPixel = -1
        
    return averageXPixel


# Use the following integers for colors:
# 1-RED
# 2-GREEN
# 3-BLUE
# 4-YELLOW
# 5-ORANGE
# 6-VIOLET
# 7-INDIGO
# 8-LIME
######################Code Starts Here##################################

#Function to find a color blob
def findBlob(color):
    spot = 0;
    while(spot==0):    #loops until part of blob is found
       turnBy(30)
       pic = takePicture()                 #saves pic in variable
       spot = findColorSpot(pic, color)    #saves value returned by findColorSpot
    x=15                     #x = angle amount turned
    while(spot!=0):          #Searches for blob while in range
        if(spot==-1):        #If blob is found right away
            forward(1,0.5)
            speak("Found")
            wait(1)
            backward(1,3)
            break            #The end: breaks out of loop
        elif(spot<=100):     #if blob is in left section of pic
            turnBy(x)        #turns towards it
            forward(1,0.5)
            print (spot)
        elif(spot<=156):
            forward(1,0.5)
            print (spot)
        elif(spot<=256):     #if blob is in right section of pic
            turnBy(-x)       #turns towards it
            forward(1,0.5)
            print (spot)
        pic = takePicture()
        spot = findColorSpot(pic, color)
        if(spot==0):        #if turns too far out of range
            print(spot)
            x=-x            #change direction
            turnBy(x)
        
    
findBlob(8)
findBlob(7)
findBlob(6)
findBlob(5)
findBlob(4)
findBlob(3)
findBlob(2)
findBlob(1)







