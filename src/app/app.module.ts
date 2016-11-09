import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { FantasyDjApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { League } from '../pages/league/league';
import { PlayerDetails } from '../pages/player-details/player-details';
import { CreateLeague } from '../pages/create-league/create-league';

@NgModule({
  declarations: [
    FantasyDjApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    League,
    PlayerDetails,
    CreateLeague
  ],
  imports: [
    IonicModule.forRoot(FantasyDjApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    FantasyDjApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    League,
    PlayerDetails,
    CreateLeague
  ],
  providers: []
})
export class AppModule {}
