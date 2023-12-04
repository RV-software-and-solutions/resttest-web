import { Injectable } from '@angular/core';
import { AddNewSynonymModel } from '../../pages/synonym/models/AddNewSynonymModel';
import { HttpClient } from "@angular/common/http";
import { Globals } from '../../common/globals';
import { FindSynonymModel } from '../../pages/synonym/models/FindSynonymModel';
import { firstValueFrom } from 'rxjs';
import { FindSynonymResponse } from '../../pages/synonym/models/Reponse/FindSynonymResponse';

@Injectable({
  providedIn: 'root'
})
export class SynonymService {
  private _synonymUrl = this._myGlobals.WebApiUrl + "api/synonym";

  constructor(private _myGlobals: Globals, private _http: HttpClient) { }

  async addNew(newSynonym: AddNewSynonymModel): Promise<void> {
    return await firstValueFrom(this._http.post<void>(this._synonymUrl, newSynonym));
  }

  async findSynonyms(synoym: FindSynonymModel): Promise<FindSynonymResponse> {
    return await firstValueFrom(this._http.get<FindSynonymResponse>(this._synonymUrl + "?fromSynonym=" + synoym.synonymFrom));
  }

  async saveGraphState(): Promise<void> {
    return await firstValueFrom(this._http.post<void>(this._synonymUrl + "/save-current-state", null));
  }

  async resetGraphState(): Promise<void> {
    return await firstValueFrom(this._http.post<void>(this._synonymUrl + "/reset-state", null));
  }

  async loadGraphState(): Promise<void> {
    return await firstValueFrom(this._http.post<void>(this._synonymUrl + "/load-state", null));
  }
}
