import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LocationEventsComponent } from './components/location-events/location-events.component';
import { MainScreenComponent } from './components/main-screen.ts/main-screen.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: MainScreenComponent,
      },
      {
        path: 'location-details/:challengeId',
        component: LocationEventsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
