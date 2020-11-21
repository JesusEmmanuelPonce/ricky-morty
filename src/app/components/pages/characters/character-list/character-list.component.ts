import { CharacterService } from './../../../../shared/services/character.service';
import { Character } from './../../../../shared/interface/character.interface';
import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';

type RequestInfo = {
  next: string;
}
@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.sass']
})
export class CharacterListComponent implements OnInit {

  characters: Character[] = [];
  info: RequestInfo = {
    next: null
  }
  private pageNum = 1;
  private query: string;
  private hideScrollHeight = 200;
  private showScrollHeight = 500;

  constructor( private characterSvc: CharacterService ) { }

  ngOnInit(): void {
    this.getData();
  }

  private getData ():void {
    this.characterSvc.searchCharacter(this.query, this.pageNum)
      .pipe(
        take(1)
      ).subscribe( ( res:any ) => {
        console.log(res);
        const {info, results} = res;
        this.characters = [...this.characters, ...results]
        this.info = info
      })
  }

}
