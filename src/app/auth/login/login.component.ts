import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '@project/services/api.service'; // Adjust path to your ApiService
import { StorageService } from '@project/services/storage.service';
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
    // Check if form is valid
    if (!this.email || !this.password) {
      alert('Please fill in both email and password.');
      return;
    }

    const loginData = {
      email: this.email,
      password: this.password,
    };

    // Call the API to submit login data
    this.apiService.post('user/signin', loginData).subscribe(
      (response: any) => {
        console.log('Login successful!', response);
        this.apiService.alert(response.message, 'success').then(() => {
          // Save the user data in cookies using StorageService
         this.storageService.setUser(response.data.user).then(() => {
             this.router.navigate(['/home']);
          })
        });
      },
      (error) => {
        console.error('Login error:', error);

        // Show an error message
        alert('Invalid login credentials. Please try again.');
      }
    );
  }
}
