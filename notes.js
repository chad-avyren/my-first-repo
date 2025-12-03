const fs = require('fs');

// Simple notes app - saves notes to a text file

function addNote(note) {
    fs.appendFileSync('notes.txt', note + '\n');
    console.log('Note added: ' + note);
}

function readNotes() {
    if (fs.existsSync('notes.txt')) {
        const notes = fs.readFileSync('notes.txt', 'utf-8');
        console.log('Your notes:\n' + notes);
    } else {
        console.log('No notes yet!');
    }
}
function deleteAllNotes() {
    if (fs.existsSync('notes.txt')) {
        fs.unlinkSync('notes.txt');
        console.log('All notes deleted!');
    } else {
        console.log('No notes to delete!');
    }
}
// Try it out
addNote('This is my first note!');
readNotes();