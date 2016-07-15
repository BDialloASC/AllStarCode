from random import *

ourList1 = ["The Return of the", "The Failure of the", "10,000",
            "The Rise of the", "There Goes the", "The End of the",
            "Goodbye", "Aloha", "Night of the", "Stop the","Stuck in the"]
ourList2 = ["Amazing", "Radioactive", "Killer", "Cherry-Picking",
            "Failing", "Daring", "Storytelling", "Annoying",
            "Sleepy"," Starving"]
ourList3 = ["Programmers", "Pancakes", "Disappointments", 
            "Tsunamis", "Turn Ups" ,"Jordans", "Assignments",
            "Functions","Lists", "Teachers","All Stars"]

i = 0
while(i<10):
    x = randrange(len(ourList1))
    y = randrange(len(ourList2))
    z = randrange(len(ourList3))
    print ( ourList1[x] ,
            ourList2[y] ,
            ourList3[z] )
    del ourList1[x]
    del ourList2[y]
    del ourList3[z]       
    i= i+1
    
 