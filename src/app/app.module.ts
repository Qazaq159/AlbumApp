import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AlbumsPageComponent } from './albums-page/albums-page.component';
import {HttpClientModule} from "@angular/common/http";
import { AlbumDetailPageComponent } from './album-detail-page/album-detail-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AlbumPhotosPageComponent } from './album-photos-page/album-photos-page.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutPageComponent,
    HomePageComponent,
    AlbumsPageComponent,
    AlbumDetailPageComponent,
    NotFoundComponent,
    AlbumPhotosPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
