import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidationMessages } from "../../../../common/validation.messages"
import { AddNewSynonymModel } from '../../models/AddNewSynonymModel';
import { SynonymService } from '../../../../services/synonym/synonym.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-add-synonym',
  standalone: false,
  templateUrl: './add-synonym.component.html',
  styleUrl: './add-synonym.component.css'
})
export class AddSynonymComponent {
  validation_messages = ValidationMessages.synonymForm;
  synonymForm!: FormGroup;

  constructor(
      private _synonymService: SynonymService, 
      private fb: FormBuilder,
      private notification: NzNotificationService) {
    this.synonymForm = this.fb.group({
      synonymFrom: [null, Validators.compose([
        Validators.required,
      ])],
      synonymTo: [null, Validators.compose([
        Validators.required,
      ])]
    });
  }

  async submitForm() {
    let model = new AddNewSynonymModel({ synonymFrom: this.synonymForm.value.synonymFrom, synonymTo: this.synonymForm.value.synonymTo });
    await this._synonymService.addNew(model);
    this.notification.create(
      'success',
      'Synonym added',
      'Synonym from ' + model.synonymFrom + ' to ' + model.synonymTo + ' added!'
    );
  }

}
