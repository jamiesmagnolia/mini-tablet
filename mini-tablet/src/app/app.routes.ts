import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';

export const routes: Routes = [
    {
        path: '',
        title: 'MiniTab | Home',
        component: HomeComponent,
    },
    {
        path: 'user-login',
        title: 'MiniTab | User Login',
        component: UserComponent,
    },
];
