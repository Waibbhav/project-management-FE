import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-password3',
  templateUrl: './forgot-password3.component.html',
  styleUrls: ['./forgot-password3.component.scss']
})
export class ForgotPassword3Component implements OnInit {
hidepass:boolean= false
  constructor() { }

  ngOnInit(): void {
  }
  
  hidePassword(){
this.hidepass = !this.hidepass
  }
}
