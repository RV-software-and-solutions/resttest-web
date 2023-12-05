export class AddNewSynonymRequest {
    synonymFrom: string;
    synonymTo: string;
  
    constructor(model: AddNewSynonymRequest) {
      this.synonymFrom = model?.synonymFrom;
      this.synonymTo = model?.synonymTo;
    }
  }