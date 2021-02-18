import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlassesFrameComponent } from './comp/glasses-frame/glasses-frame.component';
import { LensScreenComponent } from './comp/lens-screen/lens-screen.component';
import { EyeMeasurementsScreenComponent } from './comp/eye-measurements-screen/eye-measurements-screen.component';
import { FinalScreenComponent } from './comp/final-screen/final-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    GlassesFrameComponent,
    LensScreenComponent,
    EyeMeasurementsScreenComponent,
    FinalScreenComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
