import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from 'src/app/login/login.component';
import { SignupComponent } from 'src/app/signup/signup.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

 
  constructor(private dialog: MatDialog) { }
  openDialog1() {
    this.dialog.open(LoginComponent, {
      width:'600px',
      height:'700px'
    })
      .afterClosed()
      .subscribe(result => console.log(result));
  }
  openDialog2() {
    this.dialog.open(SignupComponent, {
      width:'500px',
      height:'500px'
    })
      .afterClosed()
      .subscribe(result => console.log(result));
    
  }

  ngOnInit(): void {
  }

}
