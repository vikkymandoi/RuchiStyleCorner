import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { fadeoutTrigger } from 'src/app/utils/app-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private router: Router) {

  }
}
