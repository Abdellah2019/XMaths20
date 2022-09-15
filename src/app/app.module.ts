import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HTTP } from '@ionic-native/http/ngx';
import {HttpClientModule} from '@angular/common/http';
import { AdMobPro } from '@ionic-native/admob-pro/ngx';
//import { AdMobPro } from '@ionic-native/admob-pro/ngx';
//import { AdMobPro } from '@ionic-native/admob-pro/ngx';

//import { AdMobFree} from '@ionic-native/admob-free/ngx';
//import { Admob, AdmobOptions, AdmobOriginal } from '@ionic-native/admob';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule
  ],
  providers: [AdMobPro ,{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },HTTP],
  bootstrap: [AppComponent],
})
export class AppModule {}
