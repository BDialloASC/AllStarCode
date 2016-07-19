from Processing import *
from random import *

size(600,600)

clr1 = color(randrange(255),randrange(255),randrange(255))
clr2 = color(randrange(255),randrange(255),randrange(255))

x = width()/2
y = height()/2

x2 = width()/2 + 100
y2 = height()/2 + 100

changeX = randrange(15)
changeY = randrange(15) #0 

changeX2 = randrange(15) #2 
changeY2 = randrange(15) #8 

print (str(changeX) , str(changeY) + "  " + str(changeX2),str(changeY2))

def justBounce():
    global x,y,x2,y2,changeX,changeY,changeX2,changeY2,clr1,clr2
    shadows = raw_input("Shadow Effect?")
    fill(250,250,250)
    rect(50,50,width()-100,height()-100)
    fill(255,0,0)
    ellipse(x,y,50,50)
    ellipse(x2,y2,50,50)
    edge = 90
    i=0
    i2=0
    while(noContact()):
            x+=changeX
            y+=changeY
            x2+=changeX2
            y2+=changeY2
            if (shadows != ""):
                fill(250,250,250)
                rect(50,50,width()-100,height()-100) 
            else:
                background(192,192,192,100)
            fill(clr1)           
            ellipse(x,y,50,50)
            fill(clr2)
            ellipse(x2,y2,50,50)
            delay(10)
            if(x>width()-edge or x < edge):
                changeX = -changeX
                clr1 = color(randrange(250),randrange(255),randrange(255))
            if(y>height()-edge or y < edge):
                changeY = -changeY
                clr1 = color(randrange(250),randrange(255),randrange(255))
            if(x2>width()-edge or x2 < edge ):#or x2+25==x or x2-25==x):
                changeX2 = -changeX2
                clr2 = color(randrange(250),randrange(255),randrange(255))
            if(y2>height()-edge or y2 < edge ):#or y2+25==y or y2-25==y):
                changeY2 = -changeY2
                clr2 = color(randrange(250),randrange(250),randrange(250))
           
    

def noContact():
    return x>75 and x<width()-75 and y>75 and y<height()-75


justBounce()
