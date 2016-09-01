import {Component} from "@angular/core";
import {NoteCard} from "./note-card";

@Component({
    selector: 'notes',
    template: require('./notes.html'),
    styles: [require('./notes.css')],
    directives: [NoteCard]
})
export class Notes{}