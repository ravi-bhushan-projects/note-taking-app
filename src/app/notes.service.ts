import { Injectable } from '@angular/core';
import { Note } from './model/note.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  private noteSelectedSource = new Subject<number>();

  noteSelected$ = this.noteSelectedSource.asObservable();

  constructor() {}

  saveNote(note: Note) {
    if (localStorage.getItem('notes') == null) {
      localStorage.setItem('notes', JSON.stringify([]));
      this.pushNote(note);
    } else {
      this.pushNote(note);
    }
  }

  pushNote(note: Note) {
    let data = JSON.parse(localStorage.getItem('notes'));
    data.push(note);
    localStorage.setItem('notes', JSON.stringify(data));
  }

  getNotes(): Note[] {
    return JSON.parse(localStorage.getItem('notes'));
  }

  showDetails(id: number) {
    this.noteSelectedSource.next(id);
  }
}
