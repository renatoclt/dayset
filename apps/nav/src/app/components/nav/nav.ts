import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavContract } from '@dayset/mf-contracts';
import { RouterModule } from '@angular/router';

@Component({
  imports: [CommonModule, RouterModule],
  selector: 'app-nav',
  standalone: true,
  templateUrl: './nav.html',
  styleUrls: ['./nav.scss'],
})
export class NavComponent implements NavContract {
  @Input() title = '';
  @Input() showBackButton = false;

  logoImg = 'logo_sin_fondo.png';

  menuOptions = [
  { path: '/today', label: 'Hoy' },
  { path: '/routines', label: 'Rutinas' },
  { path: '/goals', label: 'Metas' }
];
}
