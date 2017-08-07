import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { AuthenticationService } from '../_services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [AuthenticationService]
})
export class LoginComponent implements OnInit {
  @Input() name;

  logInForm: FormGroup;
  returnUrl: string;

  constructor(
    public activeModal: NgbActiveModal,
    fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService ) {
      this.logInForm = fb.group({
        'UserName' : 'Username',
        'password' : 'Password',
        'rememberMe' : false
      });
   }

   submitForm(value: any): void {
     console.log('Reactive Forms Data: ');
     console.log(value);
     console.log(value.UserName);
     this.authenticationService.login(value.UserName, value.password).subscribe( data => {
       this.router.navigate([this.returnUrl]);
       this.activeModal.close();
     }, error => {
       console.error(error);
     });
   }

  ngOnInit() {
    // Reset the login status
    this.authenticationService.logout();

    // Get return URl from route parameters or default to '/dashboard'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/dashboard';
  }
}
