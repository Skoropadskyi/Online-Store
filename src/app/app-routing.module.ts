import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { AuthGuard } from './helpers';
import {ContentComponent} from '@app/home/content/content.component';
import {TelephoneComponent} from '@app/home/telephone/telephone.component';
import {TvComponent} from '@app/home/tv/tv.component';
import {AudioComponent} from '@app/home/audio/audio.component';
import {TransportComponent} from '@app/home/transport/transport.component';
import {LaptopsComponent} from '@app/home/laptops/laptops.component';
import {GamingComponent} from '@app/home/gaming/gaming.component';
import {SmartWatchComponent} from '@app/home/smart-watch/smart-watch.component';

const accountModule = () => import('./account/account.module').then(x => x.AccountModule);
const usersModule = () => import('./users/users.module').then(x => x.UsersModule);

const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard], children: [
        {path: '', component: ContentComponent},
        {path: 'telephone', component: TelephoneComponent},
        {path: 'tv', component: TvComponent},
        {path: 'audio', component: AudioComponent},
        {path: 'transport', component: TransportComponent},
        {path: 'laptops', component: LaptopsComponent},
        {path: 'gaming', component: GamingComponent},
        {path: 'smart-watch', component: SmartWatchComponent}
      ]},
    { path: 'users', loadChildren: usersModule, canActivate: [AuthGuard] },
    { path: 'account', loadChildren: accountModule },


    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
