import { Component } from '@angular/core';
import { Storage } from "@ionic/storage-angular";
import { XpService } from "../xp.service";
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  note: string[] = [];
  newNote: string = '';
  private _storage: Storage | null = null;


  constructor(private storage: Storage, private xpService: XpService) {

  }

  userXp = this.xpService.userXp


  async log() {
    console.log(this.xpService.userXp);

  }


  async addExp() {
    this.xpService.addExp(); // Appeler correctement la fonction
    console.log('ajout');
    console.log(this.xpService.userXp); // Vérifier si ça change bien
  }

  async ngOnInit() {
    this._storage = await this.storage.create();
    this.loadNotes();
  }

  async loadNotes() {
    const saveNotes = await this._storage?.get('notes') || [];
    if (saveNotes) {
      this.note = saveNotes;

    }
  }

  async addNote() {
    if (this.newNote.trim() === '') return;
    this.note.push(this.newNote);
    await this._storage?.set('notes', this.note); // Sauvegarder
    this.newNote = ''; // Réinitialiser le champ
  }
  async deleteNote(index: number) {
    this.note.splice(index, 1);
    await this._storage?.set('notes', this.note); // Mettre à jour le stockage
  }
}


