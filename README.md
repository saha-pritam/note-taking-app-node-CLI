# note-taking-app-node-CLI
This project is to try out a command line-based note taking application project which will have the following commands 

Command Name
  
  1.add 
    
    Parameter Requirement :- title, body
    Purpose :- It will add a new note to the existing notes file. If a note with duplicate title is tried to add then it will dispay in red that title already taken else show success message in green. 
  
  2.delete

    Parameter Requirement :- title
    Purpose :- It will delete the note matching with the title. If title is not matching it will display in red title not found else, it will display success message in green.

  3.read 

    Parameter Requirement :- title
    Purpose :- It will read the note matching with the title. If title is not matching it will display in red title not found else, it will display a success message in green and then both the title and body in white.

 4.list
 
     Parameter Requirement :- -
     Purpose :- It will show all the notes (title and body) with a success message in green if present otherwise display empty list in red. 

The main idea behind this project is to demonstrate the yargs module and a little bit of playing with chalk and fs module.
