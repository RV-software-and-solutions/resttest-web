import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable()
export class Globals {
    WebApiUrl: string = environment.api_url;
}
