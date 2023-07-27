const fs = require('fs')

const getNotes=()=>{
    if(!fs.existsSync('notes.json'))
        return []
    return JSON.parse(fs.readFileSync('notes.json').toString())
}

const saveNotes=(data)=>{
    data = JSON.stringify(data)
    fs.writeFileSync('notes.json',data)
}

