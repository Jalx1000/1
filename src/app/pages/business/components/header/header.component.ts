import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LogOutComponent } from '../../../../components/log-out/log-out.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,LogOutComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
