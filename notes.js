const fs = require('fs')
const chalk = require('chalk')
//This method will return all the notes from notes.json file if present in an array of objects form else it will return empty array in case the notes.json file contains empty json or the file doesn't exist or the notes.json file is totally empty.
const getNotes=()=>{
    try {
        if (!fs.existsSync('notes.json'))
            return []
        return JSON.parse(fs.readFileSync('notes.json').toString())
    }
    catch (e) {
        return []
    }
}

//This method will save data to notes.json by deleting existing contents from notes.json everytime.
const saveNotes=(data)=>{
    data = JSON.stringify(data)
    fs.writeFileSync('notes.json',data)
}

//It will add a new note to the existing notes file. If a note with duplicate title is tried to add then it will dispay in red that title already taken else show success message in green. 
const addNote=(title,body)=>{
    let notes = getNotes()
    if(notes.findIndex((note)=>note.title.toUpperCase()===title.toUpperCase())===-1){
        notes.push({title:title,body:body})
        saveNotes(notes)
        console.log(chalk.bgGreen('Successfully Inserted New Note.'))
    } else{
        console.log(chalk.bgRed('Note Title Already Taken.'))
    }
}

//It will delete the note matching with the title. If title is not matching it will display in red title not found else, it will display success message in green.
const deleteNote=(title)=>{
    let notes = getNotes()
    let index = notes.findIndex((note)=>note.title.toUpperCase()===title.toUpperCase())
    if(index!==-1){
        notes.splice(index,1)
        saveNotes(notes)
        console.log(chalk.bgGreen('Successfully Deleted Note.'))
    } else{
        console.log(chalk.bgRed('Note Title Not Found.'))
    }
}

//It will read the note matching with the title. If title is not matching it will display in red title not found else, it will display a success message in green and then both the title and body in white.
const readNote=(title)=>{
    let notes = getNotes()
    let index = notes.findIndex((note)=>note.title.toUpperCase()===title.toUpperCase())
    if(index!==-1){
        console.log(chalk.bgGreen('Note Title Found.'))
        console.log('Title :- ',notes[index].title)
        console.log('Body :- ',notes[index].body)
    } else{
        console.log(chalk.bgRed('Note Title Not Found.'))
    }
}

//It will show all the notes (title and body) with a success message in green if present otherwise display empty list in red. 
const listNotes=()=>{
    let notes = getNotes()
    let arr=[]
    if(notes.length===0){
        console.log(chalk.bgRed('Empty Notes List.')) 
    } else{
        console.log(chalk.bgGreen('Notes List Fetched.'))
        notes.forEach((note)=>{
            console.log(chalk.bgYellow('Title :- '),note.title,",",chalk.bgYellow("Body :- "),note.body)
        })
    }
}

module.exports={addNote,deleteNote,readNote,listNotes}