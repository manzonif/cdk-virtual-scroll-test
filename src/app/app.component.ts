import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  items = Array.from({length: 1000}, (v, k) => k + 1);
  title = 'cdk-virtual-scroll-test';
}
