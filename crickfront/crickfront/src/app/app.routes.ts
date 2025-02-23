import { Routes } from '@angular/router';
import path from 'path';
import { HomeComponent } from './pages/home/home.component';
import { LiveComponent } from './pages/live/live.component';
import { HistoryComponent } from './pages/history/history.component';
import { PointTableComponent } from './pages/point-table/point-table.component';

export const routes: Routes = [
    {path:'',
        redirectTo:'/home',
        pathMatch:'full'
    },
    {
    path:"home",
    component:HomeComponent,
    title:" Home | Home Page "

    },
    {
        path:"live",
        component:LiveComponent,
        title:" Live | Live Page "
        },
        {
            path:"history",
            component:HistoryComponent,
            title:" History | History Page "
            },
            {
                path:"point-table",
                component:PointTableComponent,
                title:" Point Table | Point-Table Page "
                }

];
