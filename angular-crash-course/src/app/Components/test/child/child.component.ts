import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Output() onChanged = new EventEmitter<boolean>();

  change(increased: any) {
    this.onChanged.emit(increased);
  }
}
