#Obamafication
from Myro import *

def obamafication():
    picture = pickAFile()
    pic = makePicture(picture)
    pixels = getPixels(pic)
    ObamaDarkBlue = makeColor(0,51,76)
    ObamaRed = makeColor(217, 26, 33)
    ObamaBlue = makeColor(112,150,158)
    ObamaYellow = makeColor(252, 227, 166)

    for pxl in pixels:
        grey = getGray(pxl)
        if(grey>180):
            setColor(pxl,ObamaYellow)
        elif(grey>120):
            setColor(pxl,ObamaBlue)
        elif(grey>60):
            setColor(pxl,ObamaRed)
        else:
            setColor(pxl,ObamaDarkBlue)

    show(pic)






obamafication()