import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-password3',
  templateUrl: './forgot-password3.component.html',
  styleUrls: ['./forgot-password3.component.scss']
})
export class ForgotPassword3Component implements OnInit {
hidepass:boolean= false
hidepass2:boolean= false
  constructor() { }

  ngOnInit(): void {
  }

  hidePassword(){
this.hidepass = !this.hidepass
  }

  hidePassword2(){
    this.hidepass2 = !this.hidepass2
      }
}
