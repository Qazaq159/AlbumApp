import {Component, OnInit} from '@angular/core';
import {ConfigService} from "../config.service";
import {ActivatedRoute} from "@angular/router";
import {delay, Photo} from "../models";

@Component({
  selector: 'app-album-photos-page',
  templateUrl: './album-photos-page.component.html',
  styleUrls: ['./album-photos-page.component.css']
})
export class AlbumPhotosPageComponent implements OnInit {
  albumId: number
  photos: Photo[]
  isLoading: boolean
  constructor(private http: ConfigService,
              private route: ActivatedRoute) {
    this.albumId = 0;
    this.photos = [];
    this.isLoading = true;
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      let _id = params.get('id');
      if(_id) {
        let id = +_id;
        this.http.getAlbumPhotos(id).subscribe((photos) => {
          delay(2000).then(any => {
            this.photos = photos;
            this.isLoading = false;
          });
        });
        this.albumId = id;
      }
    });
  }

}
