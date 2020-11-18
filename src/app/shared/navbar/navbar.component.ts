import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../../login/login.component';
import { SignupComponent } from '../../signup/signup.component';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private dialog: MatDialog) { }
  openDialog1() {
    this.dialog.open(LoginComponent, {
      width:'350px',
      height:'480px'
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