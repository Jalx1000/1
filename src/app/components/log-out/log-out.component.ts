import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-log-out',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './log-out.component.html',
  styleUrl: './log-out.component.css'
})
export class LogOutComponent {
  router = new Router;
  logOut(){
    localStorage.removeItem("user");
    this.router.createUrlTree(['/login']);
  }
}
