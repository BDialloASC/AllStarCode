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

#blue spot
poly = Circle((50, 50), 45)
poly.bodyType = "static"
poly.color = Color("blue")
poly.outline = Color("black")
sim.addShape(poly)

#red spot
poly = Circle((450, 50), 45)
poly.bodyType = "static"
poly.color = Color("red")
poly.outline = Color("black")
sim.addShape(poly)

#green spot
poly = Circle((50, 450), 45)
poly.bodyType = "static"
poly.color = Color("green")
poly.outline = Color("black")
sim.addShape(poly)

#yellow spot
poly = Circle((450, 450), 45)
poly.bodyType = "static"
poly.color = Color("yellow")
poly.outline = Color("black")
sim.addShape(poly)

#begin simulation and sets robot's position
makeRobot("SimScribbler", sim)
sim.setPose(0, width/2, height/2, 0)

sim.setup()

# 1-RED
# 2-GREEN
# 3-BLUE
# 4-YELLOW

#The following is a helper function 
#Inputs: A picture and a color represented by the list above
#Returns the average x location of the color in the picture or -1 if the robot has found the color spot

def findColorSpot(picture, color):
    xPixelSum = 0
    totalPixelNum = 0
    averageXPixel = 0

    show(picture)

    for pixel in getPixels(picture):
        if(color == 1 and getRed(pixel) > 200 and getGreen(pixel) == 0 and getBlue(pixel) == 0):
            xPixelSum += getX(pixel)
            totalPixelNum += 1
        elif(color == 2 and getRed(pixel)== 0 and getGreen(pixel) > 90 and getBlue(pixel) == 0):
            xPixelSum += getX(pixel)
            totalPixelNum += 1
        elif(color == 3 and getRed(pixel) == 0 and getGreen(pixel) == 0 and getBlue(pixel) > 200):
          
            xPixelSum += getX(pixel)
            totalPixelNum += 1
        elif(color == 4 and getRed(pixel) > 180 and getGreen(pixel) > 180 and getBlue(pixel) == 0):
            
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

######################Code Starts Here##################################


#Function to find a color blob
def findBlob(color):
    spot = 0;
    while(spot==0):    #loops until part of blob is found
       turnBy(30)
       pic = takePicture()                 #saves pic in variable
       spot = findColorSpot(pic, color)    #saves value returned by findColorSpot
    x=15                     #x = angle amount turned
    while(spot!=-1):
        if(spot==0):        #if turns too far out of range
            print(spot)
            x=-x            #change direction
            turnBy(x)         #Searches for blob until right next to it
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
    forward(1,0.5)
    wait(1)
    backward(1,3)
        

findBlob(1)
speak("Found Red")
findBlob(2)
speak("Found Green")
findBlob(3)
speak("Found Blue")
findBlob(4)
speak("Found Yellow")
turnBy(360)
speak("")




