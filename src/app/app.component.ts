import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { DialogDemoComponent } from './dialog-demo/dialog-demo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private dialog: MatDialog) {}

  public openDialog(): void {
    this.dialog.open(DialogDemoComponent, {
      width: '50%',
    });
  }
}
