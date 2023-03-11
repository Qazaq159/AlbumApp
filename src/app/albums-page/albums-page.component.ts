import {Component, OnInit} from '@angular/core';
import {Album, delay} from "../models";
import { ConfigService } from "../config.service"

@Component({
  selector: 'app-albums-page',
  templateUrl: './albums-page.component.html',
  styleUrls: ['./albums-page.component.css']
})
export class AlbumsPageComponent implements OnInit {
  albums: Album[];
  isLoading: boolean;
  constructor(private albumService: ConfigService) {
    this.albums = [];
    this.isLoading = true;
  }

  ngOnInit(): void {
    this.albumService.getAlbums().subscribe((albums) => {
      delay(2000).then(any => {
        this.albums = albums;
      });
    })
  }

  deleteAlbum(id: number) {
    this.albumService.deleteAlbum(id).subscribe((object) => {
      console.log(`Successfully deleted album with id = ${id}`);
    });
  }
}
