import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mytracker';
  timestamp: string;

  constructor(private http: HttpClient) {
  }

  updateTimestamp() {
    this.timestamp = new Date().toISOString();
    this.http.post("https://api.sheetbest.com/sheets/f6765ca4-93a9-4612-bf08-48fd77a5fa3e",
      {poop_date: this.timestamp}
    ).subscribe();
  }
}
