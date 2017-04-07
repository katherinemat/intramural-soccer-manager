import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamComponent } from './team/team.component';

const appRoutes: Routes = [
  {
    path: '',
    component: TeamComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
