import { AppConfig } from './app.config';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UserServiceConfig } from './core/service/user-service.config';
import { StoreModule } from '@ngrx/store';

/* App Root */
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';

/* Feature Modules */
import { CoreModule } from './core/core.module';

/* Routing Module */
import { AppRoutingModule } from './app-routing.module';
import { APP_BASE_HREF } from '@angular/common';

import { ArticleComponent } from './components/article/article.component';
import { reducers, metaReducers } from './reducers/reducers';

@NgModule({
  imports: [
    BrowserModule,
    HomeModule,
    /* Core Module */
    CoreModule.forRoot(new UserServiceConfig('Nguyen Tran')),
    StoreModule.forRoot(reducers, { metaReducers }),
    AppRoutingModule,
  ],
  declarations: [AppComponent, ArticleComponent],
  providers: [
    { provide: AppConfig, useValue: process.env.APP_CONFIG },
    { provide: APP_BASE_HREF, useValue: '/' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

console.log('jorge');
