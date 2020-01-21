import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { Router } from '@angular/router';

@Component({
    selector: 'app-nav',
    templateUrl: 'nav.component.html',
    styleUrls: ['nav.component.scss']
})
export class NavComponent implements OnInit {
    model: any = {};
    photoUrl: string;

    constructor(private authService: AuthService, private alertify: AlertifyService,
        private router: Router) { }

    ngOnInit() {
        this.authService.currentPhotoUrl.subscribe(pUrl => this.photoUrl = pUrl);
    }

    login() {
        this.authService.login(this.model).subscribe(next => {
            this.alertify.success('Logged in successfully');

        }, error => {
            this.alertify.error(error);
        }, () => {
            this.router.navigate(['/members']);
        });
    }

    loggedIn() {
        return this.authService.loggedIn();
    }

    logout() {
        localStorage.removeItem('token');
        this.alertify.message('Logged out');
        this.router.navigate(['/home']);
        localStorage.removeItem('user');
        this.authService.decodedToken = null;
        this.authService.currentUser = null;
    }
}
