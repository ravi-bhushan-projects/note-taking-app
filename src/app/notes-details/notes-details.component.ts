import { Component, OnInit, OnDestroy } from '@angular/core';
import { NotesService } from '../notes.service';
import { Subscription } from 'rxjs';
import { Note } from '../model/note.model';

@Component({
  selector: 'app-notes-details',
  templateUrl: './notes-details.component.html',
  styleUrls: ['./notes-details.component.scss']
})
export class NotesDetailsComponent implements OnInit, OnDestroy {
  private noteSelectedSubscription: Subscription;
  selectedNote: Note;

  constructor(private noteService: NotesService) {}

  ngOnInit() {
    this.noteSelectedSubscription = this.noteService.noteSelected$.subscribe(
      id => {
        this.loadDetails(id);
      }
    );
  }

  loadDetails(id: number) {
    this.selectedNote = this.noteService
      .getNotes()
      .filter(note => note.id === id)[0];
  }

  ngOnDestroy() {
    this.noteSelectedSubscription.unsubscribe();
  }
}
