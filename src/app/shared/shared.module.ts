import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { LoadComponent } from './load/load.component';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule
  ],
  declarations: [
    LoadComponent,
    ErrorComponent,
    SafeHtmlPipe
  ],
  exports: [
    BrowserModule,
    LoadComponent,
    ErrorComponent,
    SafeHtmlPipe
  ]
})
export class SharedModule { }
