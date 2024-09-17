import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-searchbox',
  templateUrl: './searchbox.component.html',
  styles: ``
})
export class SearchboxComponent {
@Input()
public placerholder: string = '';

@Output() onValue: EventEmitter<string> = new EventEmitter();

emitValue(value:string): void {
  this.onValue.emit( value );
}
}
