#Obamafication
from Myro import *

#"Obamafies" a picture based on the color of each pixel
def obamafication():
    picture = pickAFile() #Opens a window each time to choose image file
    pic = makePicture(picture) #Save picture in a variable
    pixels = getPixels(pic)    #saves list of pixels in a variable
    ObamaDarkBlue = makeColor(0,51,76)       #Obama color values that pixels 
    ObamaRed = makeColor(217, 26, 33)        #pixels will be converted to
    ObamaBlue = makeColor(112,150,158)
    ObamaYellow = makeColor(252, 227, 166)

    for pxl in pixels:  #for each pixel in the pic
        grey = getGray(pxl)           #conditionals to change each pixel 
        if(grey>180):
            setColor(pxl,ObamaYellow)
        elif(grey>120):
            setColor(pxl,ObamaBlue)
        elif(grey>60):
            setColor(pxl,ObamaRed)
        else:
            setColor(pxl,ObamaDarkBlue)

    show(pic) #show new obamafied picture






obamafication()