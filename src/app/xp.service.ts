import { Injectable } from '@angular/core';
import { Storage } from "@ionic/storage-angular";

@Injectable({
  providedIn: 'root'
})
export class XpService {

  userXp: number = 10;

  async addExp() {
    this.userXp = this.userXp + 10
  }

  constructor() { }
}
