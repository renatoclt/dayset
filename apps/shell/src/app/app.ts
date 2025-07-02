import { CommonModule, NgComponentOutlet } from '@angular/common';
import { Component, OnInit, Type } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavContract } from '@dayset/mf-contracts';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
  imports: [
    CommonModule,
    RouterModule,
    NgComponentOutlet
  ],
})
export class App implements OnInit {

  nav: Type<NavContract> | null = null;

  async ngOnInit() {
    console.log('Loading NavComponent...');
    const module = await import('nav/NavComponent');
    this.nav = module.NavComponent;
    console.log('finished loading NavComponent', this.nav);
  }
}
