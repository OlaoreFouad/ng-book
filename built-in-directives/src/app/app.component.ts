import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'built-in-directives';
  showIsChecked = false;
  switchNumber = 1;

  selectedColor = 'red';
  selectedFontSize = 16;

}
