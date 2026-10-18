import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Contact } from './components/contact/contact';
import { About } from './components/about/about';
import { Services } from './components/services/services';
import { NotFound } from './components/not-found/not-found';

export const routes: Routes = [

    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: Home },
    { path: 'services', component: Services },
    { path: 'about', component: About },
    { path: 'contact', component: Contact },
    { path: 'not-found', component: NotFound },
    {path: '**', redirectTo:'/not-found' , pathMatch: 'full' }

];
