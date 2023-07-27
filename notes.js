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

module.exports={addNote}