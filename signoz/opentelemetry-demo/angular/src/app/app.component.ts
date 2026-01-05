import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular OTEL Demo';

  constructor(private router: Router) {}

  // called by the button in the template
  doClick() {
    console.log('Button clicked!');
    // navigate programmatically to /page2 (changes URL)
    this.router.navigate(['/page2']);
  }
}
