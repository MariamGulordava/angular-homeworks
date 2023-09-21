import { Component } from '@angular/core';
import { Router } from '@angular/router'; 
import { User } from '../user';

@Component({
  selector: 'register-root',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  userModel = new User('mariamgulordava03@gmail.com', 'mariami123', 'mariami123', 'altmarjo', 551443314, 'http://mariami.com', true);

  passwordsMatch: boolean = true;

  constructor(private router: Router) {} 

  checkPasswordMatch() {
    this.passwordsMatch = this.userModel.Password === this.userModel.confirmPassword;
  }

  onSubmit() {
    this.router.navigate(['/user-list']);
  }
}
