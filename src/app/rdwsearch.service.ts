import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RdwInfo } from './rdwinfo.model';
@Injectable({
  providedIn: 'root'
})
export class RdwsearchService {
  apiUrl = 'https://opendata.rdw.nl/resource/m9d7-ebf2.json?%24select=*&%24order=kenteken&%24where=kenteken+=+';
  constructor(private _http: HttpClient) { }


  getRdwInfo(kenteken: String) {
    return this._http.get<RdwInfo[]>(this.apiUrl+'%27'+kenteken+'%27');
  }
}
