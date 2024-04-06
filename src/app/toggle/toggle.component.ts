import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrl: './toggle.component.css'
})
export class ToggleComponent {
  @Input() checked = false;
  @Output() checkedChange = new EventEmitter<boolean>();

  privateChecked = false;

  toggle() {
    this.privateChecked = !this.checked;
    this.checkedChange.emit(this.privateChecked);
  }
}
