import { Component, Input } from '@angular/core';



@Component({
  selector: 'app-copy-button',
  templateUrl: './copy-button.component.html',
  styleUrls: ['./copy-button.component.scss']
})
export class CopyButtonComponent {
  @Input() pass: string = '';
  @Input() disabled: boolean = true;
  copyPassword(pass: string): void {
    navigator.clipboard.writeText(pass)
  }
}
