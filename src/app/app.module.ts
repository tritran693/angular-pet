import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { UserComponent } from './user/user.component';
import { ToggleComponent } from './toggle/toggle.component';

@NgModule({
  declarations: [ //declare component used in Module
    AppComponent, ProgressBarComponent, UserComponent, ToggleComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
