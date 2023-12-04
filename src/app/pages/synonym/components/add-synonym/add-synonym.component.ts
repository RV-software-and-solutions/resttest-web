import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidationMessages } from "../../../../common/validation.messages"
import { AddNewSynonymModel } from '../../models/AddNewSynonymModel';
import { SynonymService } from '../../../../services/synonym/synonym.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-add-synonym',
  standalone: false,
  templateUrl: './add-synonym.component.html',
  styleUrl: './add-synonym.component.css'
})
export class AddSynonymComponent {
  validation_messages = ValidationMessages.synonymForm;
  synonymForm!: FormGroup;

  constructor(private _synonymService: SynonymService, private fb: FormBuilder) {
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
    let addNewCall = this._synonymService.addNew(model);
    await firstValueFrom(addNewCall)
    .then((value) => {
      console.log(`Result: ` + value);
    });
  }

}
