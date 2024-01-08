import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { BottomBarComponent } from './components/bottom-bar/bottom-bar.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { LocationEventsComponent } from './components/location-events/location-events.component';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from '@danielmoncada/angular-datetime-picker';
import { MainScreenComponent } from './components/main-screen.ts/main-screen.component';



@NgModule({
  declarations: [
    DashboardComponent,
    NavigationBarComponent,
    BottomBarComponent,
    LocationEventsComponent,
    MainScreenComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    HttpClientModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule
  ],
})
export class DashboardModule { }
