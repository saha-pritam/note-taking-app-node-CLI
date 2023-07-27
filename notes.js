const fs = require('fs')

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
