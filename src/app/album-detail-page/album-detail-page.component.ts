import {Component, OnInit} from '@angular/core';
import {Album} from "../models";
import {ActivatedRoute} from "@angular/router";
import {ConfigService} from "../config.service";

@Component({
  selector: 'app-album-detail-page',
  templateUrl: './album-detail-page.component.html',
  styleUrls: ['./album-detail-page.component.css']
})
export class AlbumDetailPageComponent implements OnInit {
  album: Album;
  isTitleChanged: boolean;
  constructor(private route: ActivatedRoute,
              private http: ConfigService) {
    this.album = {} as Album;
    this.isTitleChanged = false;
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      let _id = params.get('id');
      if(_id) {
          let id = +_id;
          this.http.getAlbum(id).subscribe((album) =>{
          this.album = album;
        });
      }
    });
  }

  changeTitleText(newTitleText: HTMLInputElement){
    let newText = newTitleText.value;

    if(newText === this.album.title){
      return;
    }

    this.album.title = newText;
    this.isTitleChanged = true;
  }
}
