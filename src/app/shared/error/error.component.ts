import { Component, Input } from '@angular/core';

@Component({
    selector: 'shared-error',
    templateUrl: './error.component.html',
    styleUrls: ['./error.component.css']
})
export class ErrorComponent { 
  @Input() message: string;
}