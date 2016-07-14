import { Component } from '@angular/core';
import { AlertComponent } from 'ng2-bootstrap/ng2-bootstrap';
import { CORE_DIRECTIVES } from '@angular/common';
import { DROPDOWN_DIRECTIVES }  from 'ng2-bootstrap/ng2-bootstrap';
import { Translate } from 'app/services/translate'
import { TranslateService } from 'app/services/translate.service'

@Component({
    selector: 'techlator-app',
    directives: [AlertComponent, DROPDOWN_DIRECTIVES, CORE_DIRECTIVES],
    templateUrl: '/view/main.html',
    providers:[TranslateService]
})


export class AppComponent {
    translations: Translate[];
    constructor(TranslateService: TranslateService) {
        this.translations = TranslateService.getWords();
    }

    public disabled:boolean = false;
    public status:{isopen:boolean} = {isopen: false};
    public items:Array<string> = ['The first choice!',
        'And another choice for you.', 'but wait! A third!'];

    public toggled(open:boolean):void {
        console.log('Dropdown is now: ', open);
    }
    public translateWord(event):void {
        console.log(event.target.innerHTML);
    }

    public toggleDropdown($event:MouseEvent):void {
        $event.preventDefault();
        $event.stopPropagation();
        this.status.isopen = !this.status.isopen;
    }
}
