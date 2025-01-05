import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '@project/services/api.service'; // Adjust path to your ApiService
import { StorageService } from '@project/services/storage.service';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(
    private apiService: ApiService,
    private router: Router,
    private storageService: StorageService
  ) {}

  onSubmit(): void {
    if (!this.email || !this.password) {
      alert('Please fill in both email and password.');
      return;
    }

    const loginData = { email: this.email, password: this.password };

    this.apiService.post('user/signin', loginData).subscribe(
      async (response: any) => {
        console.log('Login successful!', response);
        await this.storageService.setUser(response.data); // Wait for user to be set
        
        this.apiService.alert(response.message, 'success').then(async () => {
          // Ensure data is stored before redirecting
          console.log('User data stored, redirecting now...');
setTimeout(() => {
  console.log('Checking user data:', this.storageService.getUser());
  this.router
    .navigate(['/home'])
    .then((success) => {
      if (success) {
        console.log('✅ Navigation to home successful!');
      } else {
        console.error('❌ Navigation failed!');
      }
    })
    .catch((error) => {
      console.error('🚨 Router navigation error:', error);
    });
}, 300); 
        });
      },
      (error) => {
        console.error('Login error:', error);
        alert('Invalid login credentials. Please try again.');
      }
    );
  }
}
