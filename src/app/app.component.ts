import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'My First Angular App';

  /* Primera Prueba Binding */
  onClickMe(mess) {
    alert(mess);
  }

  clickMess = "";
  clicks = 0;

  onClickMe2(event: any) {
    let evMsg = event ? " Event target is " + event.target.tagName : "";
    this.clickMess = (`Click #${this.clicks++}. ${evMsg}`);
  }
}