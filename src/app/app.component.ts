import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, HostBinding, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { DialogDemoComponent } from './dialog-demo/dialog-demo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @HostBinding('class') className = '';
  toggleControl = new FormControl(false);

  constructor(private dialog: MatDialog, private overlay: OverlayContainer) {}
  isDarkMode= false;

  public ngOnInit(): void {

    //TODO JANEL or maybe something like this would be easier:  <link rel="stylesheet" href="/theme/css/dark-theme.min.css" *ngIf="setMode">

    this.toggleControl.valueChanges.subscribe((useDarkMode) => {
      const darkClassName = 'darkMode';
      this.className = useDarkMode ? darkClassName : '';
      this.isDarkMode = useDarkMode;
      if (useDarkMode) {
        this.overlay.getContainerElement().classList.add(darkClassName);
      } else {
        this.overlay.getContainerElement().classList.remove(darkClassName);
      }
    });
  }

  public openDialog(): void {
    this.dialog.open(DialogDemoComponent, {
      width: '50%',
    });
  }
}
