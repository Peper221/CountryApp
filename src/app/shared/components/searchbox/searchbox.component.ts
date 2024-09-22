import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { debounceTime, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'shared-searchbox',
  templateUrl: './searchbox.component.html',
  styles: ``
})
export class SearchboxComponent implements OnInit, OnDestroy {


  private debouncer: Subject<string> = new Subject<string>();

  private debouncerSubscription?: Subscription;

  @Input()
  public placerholder: string = '';

  @Input()
  public initialValue: string = '';

  @Output() onValue: EventEmitter<string> = new EventEmitter();

  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  ngOnInit(): void {
    this.debouncerSubscription = this.debouncer
    .pipe(
      debounceTime(1000,)
    )
    .subscribe(value => {
      this.onDebounce.emit(value);
    })
  }

  ngOnDestroy(): void {
    this.debouncerSubscription?.unsubscribe();
  }

  emitValue(value:string): void {
    this.onValue.emit( value );
  }
  onKeyPress(searchTerm:string){
     this.debouncer.next(searchTerm);
  }
}
