import { MediaPlayerPage } from './../pages/media-player/media-player';
import { UploadService } from './../providers/upload-service';
import { UploadPage } from './../pages/upload/upload';
import { LoginPage } from './../pages/login/login';
import { LoginService } from './../providers/login-service';
import { ThumbnailPipe } from './../pipes/thumbnail';
import { Media } from './../providers/media';
import { FrontPage } from './../pages/front/front';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';

@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    FrontPage,
    LoginPage,
    UploadPage,
    MediaPlayerPage,
    ThumbnailPipe
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2,
    FrontPage,
    LoginPage,
    UploadPage,
    MediaPlayerPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, Media, LoginService, UploadService]
})
export class AppModule {}
