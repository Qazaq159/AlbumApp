import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import {Album, Photo} from "./models";

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  constructor(private http: HttpClient) { }

  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>('https://jsonplaceholder.typicode.com/albums');
  }

  getAlbum(id: number): Observable<Album> {
    return this.http.get<Album>(`https://jsonplaceholder.typicode.com/albums/${id}`);
  }

  deleteAlbum(id: number): Observable<any> {
    return this.http.delete<any>(`https://jsonplaceholder.typicode.com/albums/${id}`);
  }

  postAlbum(album: Album): Observable<Album> {
    return this.http.post<Album>(`http://jsonplaceholder.typicode.com/albums/${album.id}`, album);
  }

  getAlbumPhotos(albumId: number): Observable<Photo[]> {
    return this.http.get<Photo[]>(`http://jsonplaceholder.typicode.com/albums/${albumId}/photos`);
  }
}
