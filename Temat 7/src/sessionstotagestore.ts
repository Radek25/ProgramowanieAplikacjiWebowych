import { Guid } from './guid';
import { Note } from './note';
import { NoteStore } from './notestore';

export class SessionStorageStore implements NoteStore {

    deleteNote(id: Guid): void {
        let notes = <string>sessionStorage.getItem('notes');
        let allNotes: Note[];
        allNotes = <Note[]>JSON.parse(notes);
        let newNotes = allNotes.filter(el => el.id != id);
        sessionStorage.setItem('notes', JSON.stringify(newNotes));
    }
    
    public addNote(note: Note): void {
        let notes = <string>sessionStorage.getItem('notes');
        let allNotes: Note[];
        allNotes = <Note[]>JSON.parse(notes);
        if(allNotes === null){
            allNotes = [];
        }
        allNotes.push(note);
        sessionStorage.setItem('notes', JSON.stringify(allNotes));
    }

    public getNotes(): Note[] {
        let notes = <string>sessionStorage.getItem('notes');
        return <Note[]>JSON.parse(notes);
    }
   
}