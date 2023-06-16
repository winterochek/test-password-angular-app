import { Component, Input } from '@angular/core';
import { Complexity } from 'src/app/types';

@Component({
  selector: 'app-status-bar',
  templateUrl: './statusbar.component.html',
  styleUrls: ['./statusbar.component.scss']
})
export class StatusbarComponent {
  @Input() complexity: Complexity = null;
}
