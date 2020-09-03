﻿import { Component } from '@angular/core';

import { AccountService } from './services';
import { User } from './models';

@Component({
  selector: 'app',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
    user: User;

    constructor(private accountService: AccountService) {
        this.accountService.user.subscribe(x => this.user = x);
        this.user = this.accountService.userValue;
    }

    logout() {
        this.accountService.logout();
    }
}
