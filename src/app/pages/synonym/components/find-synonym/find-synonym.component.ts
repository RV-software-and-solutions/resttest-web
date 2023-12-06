import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidationMessages } from "../../../../common/validation.messages"
import { SynonymService } from '../../../../services/synonym/synonym.service';
import { FindSynonymResponse } from '../../../../models/synonym/Reponse/FindSynonymResponse';
import { FindSynonymRequest } from '../../../../models/synonym/Request/FindSynonymRequest';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-find-synonym',
  standalone: false,
  templateUrl: './find-synonym.component.html',
  styleUrl: './find-synonym.component.css'
})
export class FindSynonymComponent {

  validation_messages = ValidationMessages.synonymForm;
  synonymForm!: FormGroup;
  foundSynonyms!: FindSynonymResponse;
  synonymLoaded: boolean = false;

  constructor(
    private _synonymService: SynonymService,
    private fb: FormBuilder,
    private notification: NzNotificationService) {
    this.synonymForm = this.fb.group({
      synonymFrom: [null, Validators.compose([
        Validators.required,
      ])],
    });
  }

  async submitForm() {
    const model = new FindSynonymRequest({ synonymFrom: this.synonymForm.value.synonymFrom });

    try {
      this.foundSynonyms = await this._synonymService.findSynonyms(model);
    } catch (error) {
      this.notification.create(
        'error',
        'Action failed',
        'Add synonym action failed. Message - ' + error + '!'
      );
    }
    
    this.synonymLoaded = true;
  }
}
