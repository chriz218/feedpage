import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './routing/app-routing.module';
import { FeedComponent } from './feed/feed.component';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from './shared/shared.module';

@NgModule({
  imports: [
    HttpClientModule,
    SharedModule,
    FontAwesomeModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    FeedComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
