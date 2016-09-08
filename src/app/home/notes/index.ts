import {Component} from "@angular/core";
import {NoteCard} from "./note-card";
import {NoteCreator} from "./note-creator";

@Component({
    selector: 'notes',
    template: require('./notes.html'),
    styles: [require('./notes.css')],
    directives: [NoteCard, NoteCreator]
})
export class Notes{
    notes = [{
        title: 'a',
        value: 'b'
    }, {
        title: 'a',
        value: 'b'
    }];

    checkCard(note, index) {
        this.notes.splice(index, 1);
    }
}