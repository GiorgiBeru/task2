import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { ColorSetterDirective } from './color-setter.directive';
import { AgePipePipe } from './age-pipe.pipe';
import { CubeComponent } from './cube/cube.component';
import { CubeChangerDirective } from './cube-changer.directive';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ColorSetterDirective,
    AgePipePipe,
    CubeComponent,
    CubeChangerDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
