import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavContract } from '@dayset/mf-contracts';

@Component({
  imports: [CommonModule],
  selector: 'app-nav',
  standalone: true,
  templateUrl: './nav.html',
})
export class NavComponent implements NavContract {
  @Input() title = '';
  @Input() showBackButton = false;

  logoImg = 'public/logo.png';
}
