export class AddNewSynonymModel {
    synonymFrom: string;
    synonymTo: string;
  
    constructor(model: AddNewSynonymModel) {
      this.synonymFrom = model?.synonymFrom;
      this.synonymTo = model?.synonymTo;
    }
  }