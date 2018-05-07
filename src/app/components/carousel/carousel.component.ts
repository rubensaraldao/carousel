import { Component, OnInit } from '@angular/core';
import {ImageProvider} from '../../services/imageProvider';
import {photo} from '../../models/photo';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

import { ViewEncapsulation } from '@angular/core'
@Component({
    encapsulation: ViewEncapsulation.None,
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  public responseFlirck
  public photoList: photo[];

   constructor(config: NgbCarouselConfig,private _imageProvider: ImageProvider) {
    this.photoList=[];

    // customize default values of carousels used by this component tree
    config.interval = 2000;
    config.wrap = false;
    config.keyboard = false;
  }

  ngOnInit() {
  
    this.getImagesFromFlirk();
  }


  getImagesFromFlirk(){

    this._imageProvider.getImages().subscribe(
      result => {  

          this.responseFlirck = result.items;
          console.log(this.responseFlirck);
          this.mapResponse();
          console.log(this.photoList);
         
      },
      error => {
          console.log('Error in post');
          console.log(error);
      }
  );
  }

  mapResponse(){
      for(let i =0; i<this.responseFlirck.length;i++ ){
          let phot= new photo(this.responseFlirck[i].title,this.responseFlirck[i].media.m);
          this.photoList.push(phot);         
      }
  }

}
