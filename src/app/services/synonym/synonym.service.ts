import { Injectable } from '@angular/core';
import { AddNewSynonymModel } from '../../pages/synonym/models/AddNewSynonymModel';
import { HttpClient } from "@angular/common/http";
import { Globals } from '../../common/globals';

@Injectable({
  providedIn: 'root'
})
export class SynonymService {
  private _synonymUrl = this._myGlobals.WebApiUrl + "api/synonym";

  constructor(private _myGlobals: Globals, private _http: HttpClient) { }

  addNew(newSynonym: AddNewSynonymModel) {
    return this._http.post(this._synonymUrl, newSynonym);
  }
}
