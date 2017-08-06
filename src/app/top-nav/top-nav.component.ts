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

  constructor( private modalService: NgbModal, private authenticationService: AuthenticationService, private route: Router ) { }

  open(): void {
    const modalRef = this.modalService.open( LoginComponent );
    modalRef.componentInstance.name = `World`;
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
