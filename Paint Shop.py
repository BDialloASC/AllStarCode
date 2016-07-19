#Bootleg Microsoft Paint
from Processing import *
size(800,800)
white = color(255,255,255)     #Create colors to use
red = color(255,0,0)
green = color(0,255,0)
blue = color(0,0,255)
yellow = color(255,255,0)
orange = color(255,165,0)
indigo = color(75,0,130)
black = color(0,0,0)
eraser = color(240,240,240)    #List of colors to use 
colors = [white,red,green,blue,yellow,orange,indigo,black,eraser]


size = 1  #Intial size of writing
textFont("Comic Sans MS Normal")  # #BestFont

def setup():     #Set up (or reset) the paint shop
    stroke(0)    #Black Border 
    strokeWeight(1)
    i = 0
    x = 0
    while (i<len(colors)): #Iterate through the list of  colors
        fill(colors[i])
        rect(x,0,width()/len(colors),width()/len(colors)) # create same size rectangle with each color
        x += width()/len(colors)
        delay(100)                              #load up effect
        i+=1
    ellipse(600,650,25,25)    #Size decrease
    ellipse(675,650,75,75)    #Size increase
    fill(white)
    text("Size",725,700)
    textSize(15)
    text("CLEAR",20,700)
    text("ERASER",725,25)

def doMouseDragged(): 
    gate = width()/len(colors)
    if(not(mouseY()<gate+20 or onPlusSize() or onMinusSize() or onClear()) ):
        line(pmouseX(), pmouseY(), mouseX(), mouseY())  #make a line when mouse is dragged
  
def doMouseClicked():
    global size
    gate = width()/len(colors)
    if(mouseY()<gate):
        clr = 0
        while(mouseX()>gate):
            gate+= width()/len(colors)
            clr+=1
        stroke(colors[clr])
    if(onMinusSize()):
        size-=5
        strokeWeight(size)
    if(onPlusSize()):
        size+=5
        strokeWeight(size)
    if(onClear()):
        background(240,240,240)
        setup()


def onPlusSize():
    return mouseX()>600 and mouseX()<750 and mouseY()>575 and mouseY()<725
    
def onMinusSize():
    return mouseX()>575 and mouseX()<625 and mouseY()>625 and mouseY()<675
    
def onClear():
    return mouseX()>20 and mouseX()<100 and mouseY()>670 and mouseY()<800

onMouseClicked += doMouseClicked
onMouseDragged += doMouseDragged

setup()