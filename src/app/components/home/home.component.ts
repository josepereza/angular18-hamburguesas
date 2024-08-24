import { Component } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { RouterLink } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatGridListModule,RouterLink, MatIconModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  categories = [
    { id:1, name: 'hamburguesa', display: 'Hamburguesas', icon: 'lunch_dining' },
    { id:2 ,name: 'bebida', display: 'Bebidas', icon: 'local_cafe' },
    { id:3 ,name: 'postre', display: 'Postres', icon: 'icecream' },
    { id:4, name: 'ensalada', display: 'Ensaladas', icon: 'eco' }
  ];
}
