import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root'})
export class RegexService {
  regexString: string = "^.*(youtu.be\/|v\/|e\/|u\/\w+\/|embed\/|v=)([^#\&\?]*).*";
  regex: RegExp = new RegExp(this.regexString);

  constructor() { }

  isValidURL(url: string): boolean {
    return this.regex.test(url);
  }

  findResult(url: string): any {
      return this.regex.exec(url);
  }
}