#Random Movie Generator

from random import *
ourList1 = ["The Return of the", "The Failure of the", "10,000","The Rise of the", 
            "There Goes the", "The End of the","Goodbye", "Aloha", "Night of the", "Stop the",
            "Stuck in the","Downfall of the","Fast and Furious:","Planet","Planet of the",
            "The Trials of", "Tale of the","Attack of the","Fighting for"]
ourList2 = ["Amazing", "Radioactive", "Killer", "Cherry-Picking","Failing", "Daring", "Storytelling", 
            "Annoying","Sleepy"," Starving","Monster","Beautiful","Jurassic", "Mechanical",
            "Explosive","Dastardly"]
ourList3 = ["Programmers", "Pancakes", "Disappointments","Tsunamis", "Turn Ups" ,"Jordans", 
            "Assignments","Functions","Lists", "Teachers","All Stars","Robots", "Nanobots",
            "Cyborgs","Roaches","College Students","Student Loans","Guns","Cars","Explosions",
            "Terminators","Avengers"]

i=1
print (len(ourList1),len(ourList2),len(ourList3))
while(len(ourList1)!=0 and len(ourList2)!=0 and len(ourList3)!=0):
    x = randrange(len(ourList1))
    y = randrange(len(ourList2))
    z = randrange(len(ourList3))
    print (str(i)+".", ourList1[x] ,
            ourList2[y] ,
            ourList3[z] )
    del ourList1[x]
    del ourList2[y]
    del ourList3[z]       
    i= i+1
    
 