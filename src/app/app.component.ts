import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mytracker';
  timestamp: string;

  updateTimestamp() {
    this.timestamp = new Date().toISOString();
  }
}
