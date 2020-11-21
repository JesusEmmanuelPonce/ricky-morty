import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from './../../../environments/environment';
import { Character } from './../interface/character.interface';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) { }

  searchCharacter (query = '', page = 1){
    return this.http.get<Character[]>(
      `${environment.baseUrlAPI}/?name=${query}&page=${page}`
    );
  }
  getDetails(id: number){
    return this.http.get<Character>(
      `${environment.baseUrlAPI}/${id}`
    )
  }
}
