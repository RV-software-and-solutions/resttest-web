export class FindSynonymRequest {
    synonymFrom: string;
  
    constructor(model: FindSynonymRequest) {
      this.synonymFrom = model?.synonymFrom;
    }
  }