import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FeedComponent } from '../feed/feed.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: '', component: FeedComponent },
            { path: '**', redirectTo: '', pathMatch: 'full' }
          ])
    ],
    exports: [
        RouterModule 
    ]
})

export class AppRoutingModule { }