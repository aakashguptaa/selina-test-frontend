import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainScreenComponent { }
