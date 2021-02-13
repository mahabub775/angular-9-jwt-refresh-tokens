import { Component } from '@angular/core';

import { AuthenticationService } from './_services';
import { User } from './_models';

@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent {
    user: User;

    constructor(private authenticationService: AuthenticationService) {
        this.authenticationService.user.subscribe(x => this.user = x);
    }

    logout() {
        this.authenticationService.logout();
    }
    Refresh()
    {
         let dd:any =  this.GetRefresh();
    }
    // jokhoni call korbe ai function/ ai rokom controller e likhe use kore call 
    //[HttpGet("{id}/refresh-tokens")]       //  for controller use , it is direct check refresh token & also get or post
    //public IActionResult GetRefreshTokens(int id)
GetRefresh()
    {
        return new Promise(resolve =>  {
            // attempt to refresh token on app start up to auto authenticate
            this.authenticationService.refreshToken()
                .subscribe()
                .add(resolve);
        });
    }
}