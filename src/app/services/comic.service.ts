import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { comic } from "../model/comic";

@Injectable({
  providedIn: 'root'
})
export class ComicService {

  constructor(private http: HttpClient) { }

  getComic(id : number){
      return this.http.get<comic>(`${id}/info.0.json`);
  }

  getLimit(){
    return this.http.get<comic>(`/info.0.json`);
  }
}
