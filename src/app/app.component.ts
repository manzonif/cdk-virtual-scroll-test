import { Component, AfterViewChecked, ElementRef, NgZone } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewChecked {
  items = Array.from({ length: 100000 }).map((_, i) => `Item #${i}`);
  title = 'cdk-virtual-scroll-test';

  constructor(
    private elementRef: ElementRef,
    private ngZone: NgZone
  ) { }

  ngAfterViewChecked() {
        const x = this.elementRef.nativeElement.scrollTop;
        console.log(x);

  }
}
