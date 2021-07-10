import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA  } from '@angular/material/dialog';
import { ModalComponent } from './modal/modal.component';

// import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent implements OnInit {
  title = 'PMI-BRASIL';
  constructor() { }
  ngOnInit(): void {
    window.addEventListener('scroll', function(): void {
      if (window.scrollY > 400) {
        document.getElementById('mainNav').classList.add('navbar-shrink');
      } else {
        document.getElementById('mainNav').classList.remove('navbar-shrink');
      }
    });
  }

}
