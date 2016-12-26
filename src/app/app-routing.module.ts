import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CharacterBuilder} from "./Components/CharacterComponent/CharacterComponent";

const routes: Routes = [
  {path: '', component: CharacterBuilder}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class PainManagementRouteModule { }
