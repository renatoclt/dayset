import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponentContract } from '@dayset/mf-contracts';

@Component({
  imports: [CommonModule],
  selector: 'app-nav',
  standalone: true,
  template: `<div>hola mundo nav</div>`,
})
export class NavComponent implements NavComponentContract {
  @Input() title = '';
  @Input() showBackButton = false;
}
