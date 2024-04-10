import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { UserComponent } from './user/user.component';
import { ToggleComponent } from './toggle/toggle.component';
import { TabComponent } from './tab/tab.component';
import { TabGroupComponent } from './tab2/tab-group/tab-group.component';
import { TabPanelComponent } from './tab2/tab-panel/tab-panel.component';

@NgModule({
  declarations: [ //declare component used in Module
    AppComponent, ProgressBarComponent, UserComponent, ToggleComponent, TabComponent, TabGroupComponent, TabPanelComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
