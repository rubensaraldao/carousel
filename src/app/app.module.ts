import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {CarouselComponent} from './components/carousel/carousel.component';
import { AppComponent } from './app.component';
import { ImageProvider } from './services/imageProvider';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,    
    HttpClientModule,
    NgbModule.forRoot()
  ],
  providers: [ImageProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
