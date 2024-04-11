import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html'
})
export class BasicsPageComponent {
  public nameLower: string = 'rodrigo';
  public nameUpper: string = 'RODRIGO';
  public fullName: string = 'RoDriGo caliZAyA';

  public customDate: Date = new Date();
}
