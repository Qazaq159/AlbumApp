import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from "./about-page/about-page.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { AlbumsPageComponent } from "./albums-page/albums-page.component";
import {AlbumDetailPageComponent} from "./album-detail-page/album-detail-page.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {AlbumPhotosPageComponent} from "./album-photos-page/album-photos-page.component";

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'albums', component: AlbumsPageComponent },
  { path: 'albums/:id', component: AlbumDetailPageComponent },
  { path: 'albums/:id/photos', component:  AlbumPhotosPageComponent},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
