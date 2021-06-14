import { Guid } from './guid';
import { Note } from './note';
import { NoteStore } from './notestore';

export class LocalStorageStore implements NoteStore {

    deleteNote(id: Guid): void {
        let notes = <string>localStorage.getItem('notes');
        let allNotes: Note[];
        allNotes = <Note[]>JSON.parse(notes);
        let newNotes = allNotes.filter(el => el.id != id);
        localStorage.setItem('notes', JSON.stringify(newNotes));
    }
    
    public addNote(note: Note): void {
        let notes = <string>localStorage.getItem('notes');
        let allNotes: Note[];
        allNotes = <Note[]>JSON.parse(notes);
        if(allNotes === null){
            allNotes = [];
        }
        allNotes.push(note);
        localStorage.setItem('notes', JSON.stringify(allNotes));
    }

    public getNotes(): Note[] {
        let notes = <string>localStorage.getItem('notes');
        return <Note[]>JSON.parse(notes);
    }
   
}