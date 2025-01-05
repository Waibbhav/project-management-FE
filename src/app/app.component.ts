import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from './services/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'WTS';
  constructor(private router: Router, private storageService: StorageService) {}

  ngOnInit() {
    setTimeout(() => {
      // Add a delay to ensure cookies are loaded
      if (this.storageService.isAuthenticate()) {
        console.log('User is authenticated, navigating to home.');
        this.router.navigate(['/home']);
      } else {
        console.log('User is not authenticated, navigating to login.');
        this.router.navigate(['/login']);
      }
    }, 500); // Adjust delay if necessary
  }
}