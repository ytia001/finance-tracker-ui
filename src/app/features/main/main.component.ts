import { Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-main',
  imports: [RouterModule, MatSidenavModule, MatButtonModule, MatToolbarModule, MatIconModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {
  @ViewChild('sidenav') sideNavComp!: MatSidenav;

  toggleSideNav(): void {
    this.sideNavComp.toggle();
  }
}
