import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

import { LoginComponent } from '../login/login.component';
import { AuthenticationService } from '../_services/authentication.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss'],
  providers: [AuthenticationService]
})
export class TopNavComponent implements OnInit {

 showButtons: any;

  constructor( private modalService: NgbModal, private authenticationService: AuthenticationService, private route: Router ) {
    this.showButtons = this.authenticationService.isLoggedIn();
    console.log(`kwann wewe unazingua ${this.showButtons}`);
   }

  open(): void {
    this.modalService.open( LoginComponent );
   }

  logout(): void {
    // Mtoe huyu boya
    this.authenticationService.logout();
    console.log('Mtoee Huyu boya!!');
    this.route.navigate(['/']);
  }

  ngOnInit() {
  }

}
