import { Component, OnInit } from '@angular/core';
import { RedirectCommand, Router, RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { UserInterface } from '../../core/interfaces/user.interface';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { routes } from '../../app.routes';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export default class LoginComponent implements OnInit {
  user: UserInterface[] = [];
  constructor(private AuthService: AuthService, private router: Router) {}

  email = new FormControl('');
  password = new FormControl('');

  ngOnInit(): void {
    console.log('Iniciando server');
  }

  login() {
    this.AuthService.getUser().subscribe({
      next: (res) => {
        res.map((res: UserInterface) => {
          if (
            res.email == this.email.value &&
            res.password == this.password.value
          ) {
            console.log(res)
            localStorage.setItem('user', res.email);
            this.router.navigate(['/business/dashboard'])
          }
        });
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
