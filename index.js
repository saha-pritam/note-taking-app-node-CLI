const yargs = require("yargs");
const notes = require('./notes')
yargs.command({
    command:'add',
    describe:'It will add a new note to the existing notes file. If a note with duplicate title is tried to add then it will dispay in red that title already taken else show success message in green.',
    builder:{
        title:{
            describe:'For title of the note',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'For body of the note',
            demandOption:true,
            type:'string'
        }
    },
    handler:(argv)=>{
        notes.addNote(argv.title,argv.body)
    }
})

yargs.command({
    command:'delete',
    describe:'It will delete the note matching with the title. If title is not matching it will display in red title not found else, it will display success message in green.',
    builder:{
        title:{
            describe:'For title of the note',
            demandOption:true,
            type:'string'
        }
    },
    handler:(argv)=>{
        notes.deleteNote(argv.title)
    }
})

yargs.command({
    command:'read',
    describe:'It will read the note matching with the title. If title is not matching it will display in red title not found else, it will display a success message in green and then both the title and body in white.',
    builder:{
        title:{
            describe:'For title of the note',
            demandOption:true,
            type:'string'
        }
    },
    handler:(argv)=>{
        console.log('Read command is working')
        console.log('Title - ',argv.title)
    }
})

yargs.command({
    command:'list',
    describe:'It will show all the notes (title and body) with a success message in green if present otherwise display empty list in red.',
    handler:()=>{
        console.log('List command is working')
    }
})

yargs.parse()