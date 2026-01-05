import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { Page2Component } from './page2.component';

const routes: Routes = [
  { path: '', component: AppComponent },   // home (we bootstrap AppComponent still)
  { path: 'page2', component: Page2Component },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent,
    Page2Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { useHash: false })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

