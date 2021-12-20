import { OverlayContainer } from '@angular/cdk/overlay';
import { AfterViewInit, Component, HostBinding, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { DialogDemoComponent } from './dialog-demo/dialog-demo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  isDarkMode= false;

  @HostBinding('class') className = '';
  toggleControl = new FormControl(false);

  benefits = new FormControl();
  benefitsList: string[] = [
    'Flexible Schedule',
    '401K Matching',
    '9/80 Workweek',
    'Charitable Contribution Matching',
    'Unlimited PTO',
    'Volunteer Time Off',
    'Paid Cell Phone',
    '100% Paid Medical'
  ];

  @ViewChild('myMainDiv') myMainDiv;
  el: HTMLElement;

  constructor(private dialog: MatDialog, private overlay: OverlayContainer) {}

  public ngOnInit(): void {

    this.toggleControl.valueChanges.subscribe((useDarkMode) => {
      const darkClassName = 'darkMode';
      this.className = useDarkMode ? darkClassName : '';
      this.isDarkMode = useDarkMode;

      //toggles main app dark mode on/off
      this.el.classList.toggle(darkClassName);

      //toggles the overlay darkmode on/off
      if (useDarkMode) {
        console.log('adding dark mode');
        this.overlay.getContainerElement().classList.add(darkClassName);

      } else {
        console.log('removing dark mode');
        this.overlay.getContainerElement().classList.remove(darkClassName);

      }
    });
  }

  ngAfterViewInit() {
    this.el = this.myMainDiv.nativeElement;
  }

  public openDialog(): void {
    this.dialog.open(DialogDemoComponent, {
      width: '50%',
    });
  }
}
