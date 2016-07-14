import { Injectable } from '@angular/core';

@Injectable()
export class TranslateService {
    getWords() { return [
        { ref: "a", description: 'Mr. Nice' }
    ];  }
}