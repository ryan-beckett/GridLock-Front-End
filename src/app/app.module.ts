import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AlertModule} from 'ngx-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {AssetComponent} from './asset/asset.component';
import {AssetTableComponent} from './asset-table/asset-table.component';
import {AssetSearchComponent} from './asset-search/asset-search.component';
import {FormsModule} from "@angular/forms";
import {AssetService} from "./asset/asset.service";
import {RouterModule, Routes} from "@angular/router";
import {ManufacturerComponent} from './manufacturer/manufacturer.component';
import {RoomComponent} from './room/room.component';
import {BusinessUnitComponent} from './business-unit/business-unit.component';
import {BusinessComponent} from './business/business.component';
import {BusinessUnitService} from "./business-unit/business-unit.service";
import {BusinessService} from "./business/business.service";
import {LocationService} from "./location/location.service";
import {ContactService} from "./contact/contact.service";
import {RoomService} from "./room/room.service";
import {ManufacturerService} from "./manufacturer/manufacturer.service";

const appRoutes: Routes = [
  {
    path: 'asset-table/:field/:value',
    component: AssetTableComponent
  },
  {
    path: 'asset-table/advanced',
    component: AssetTableComponent
  },
  {
    path: 'asset/:id',
    component: AssetComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    AssetComponent,
    AssetTableComponent,
    AssetSearchComponent,
    ManufacturerComponent,
    RoomComponent,
    BusinessUnitComponent,
    BusinessComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    AlertModule.forRoot()
  ],
  providers: [HttpClientModule, AssetService, BusinessService,
    BusinessUnitService, ContactService, LocationService,
    ManufacturerService, RoomService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
