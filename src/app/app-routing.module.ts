import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GlassesFrameComponent } from './comp/glasses-frame/glasses-frame.component';
import { LensScreenComponent } from './comp/lens-screen/lens-screen.component';
import { EyeMeasurementsScreenComponent } from './comp/eye-measurements-screen/eye-measurements-screen.component';
import { FinalScreenComponent } from './comp/final-screen/final-screen.component';

const routes: Routes = [
  {path: '', component: GlassesFrameComponent},
  {path: 'lens', component: LensScreenComponent},
  {path: 'eyeMeasurement', component: EyeMeasurementsScreenComponent},
  {path: 'final', component: FinalScreenComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
