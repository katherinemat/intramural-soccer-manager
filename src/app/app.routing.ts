import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamComponent } from './team/team.component';
import { AboutComponent } from './about/about.component';
import { PlayerComponent } from './player/player.component';
import { AdminComponent } from './admin/admin.component';

const appRoutes: Routes = [
  {
    path: '',
    component: TeamComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'player/:id',
    component: PlayerComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
