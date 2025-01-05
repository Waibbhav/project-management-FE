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
        // Mark the function as async
        console.log('Login successful!', response);

        this.apiService.alert(response.message, 'success').then(async () => {
          await this.storageService.setUser(response.data); // Wait for user to be set
          this.router.navigate(['/home'], { replaceUrl: true }); // Navigate after setting user
        });
      },
      (error) => {
        console.error('Login error:', error);
        alert('Invalid login credentials. Please try again.');
      }
    );
  }
}
