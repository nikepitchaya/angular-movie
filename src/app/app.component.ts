import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('navbarIdentifier') navbarIdentifier: any;
  @ViewChild('contentIdentifier') contentIdentifier: any;
  navbarHeight: number = 0;
  ngAfterViewInit() {
    this.navbarHeight = this.navbarIdentifier.nativeElement.offsetHeight;
    this.contentIdentifier.nativeElement.style.setProperty(
      'margin-top',
      `${this.navbarHeight}px`
    );
  }
}
