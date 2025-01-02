import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from '@project/services/api.service'; // Adjust the path as necessary
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  selectedFile: File | null = null; // To store the selected file

  constructor(private apiService: ApiService , private router:Router) {}

  ngOnInit(): void {}

  // This method will be triggered when a file is selected
  onFileChange(event: any): void {
    if (event.target.files && event.target.files[0]) {
      this.selectedFile = event.target.files[0];
    }
  }

  // This method will be triggered when the form is submitted
 onSubmit(form: NgForm): void {
    if (form.invalid) {
      alert('Please fill in all required fields.');
      return;
    }

    const formData: any = new FormData();

    // Append non-file form data
    formData.append('email', form.value.email);
    formData.append('first_name', form.value.first_name);
    formData.append('last_name', form.value.last_name);
    formData.append('companyName', form.value.companyName);
    formData.append('password', form.value.password);

    // Append the selected file if present
    if (this.selectedFile) {
      formData.append('profile_image', this.selectedFile);
    }

    console.log(formData);

    // Call the service to upload the data (with or without the file)
    this.apiService.postMultiData('user/signup', formData).subscribe(
      (response) => {
        console.log('Form submitted successfully!', response);

        // Display success alert
        this.apiService.alert(response.message, 'success').then(() => {
          // Redirect to login screen after successful submission
          this.router.navigate(['/login']);
        });
      },
      (error) => {
        // Handle error response
        console.error('Error submitting form:', error);
        this.apiService.alert('Error submitting form', 'error');
      }
    );
  }
}

