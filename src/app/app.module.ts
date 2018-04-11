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
import {DesktopDeviceComponent} from './desktop-device/desktop-device.component';
import {MainFrameComponent} from './main-frame/main-frame.component';
import {NetworkDeviceComponent} from './network-device/network-device.component';
import {PatchPanelComponent} from './patch-panel/patch-panel.component';
import {RackComponent} from './rack/rack.component';
import {ServerDeviceComponent} from './server-device/server-device.component';
import {StorageDeviceComponent} from './storage-device/storage-device.component';
import {StorageFrameComponent} from './storage-frame/storage-frame.component';
import {GridLocationComponent} from './grid-location/grid-location.component';
import {RackableDeviceComponent} from './rackable-device/rackable-device.component';
import {ConfigurableDeviceComponent} from './configurable-device/configurable-device.component';
import {NetworkConfigurationComponent} from './network-configuration/network-configuration.component';
import {OSConfigurationComponent} from './os-configuration/os-configuration.component';
import {HardwareConfigurationComponent} from './hardware-configuration/hardware-configuration.component';
import {ConfigurationComponent} from './configuration/configuration.component';
import {SupportUnitComponent} from './support-unit/support-unit.component';
import {ServiceContractComponent} from './service-contract/service-contract.component';
import {NetworkConnectionComponent} from './network-connection/network-connection.component';
import {HopComponent} from './hop/hop.component';
import {PortComponent} from './port/port.component';
import {PermissionComponent} from './permission/permission.component';
import {RoleComponent} from './role/role.component';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {UserComponent} from './user/user.component';
import {SiteComponent} from './site/site.component';

const appRoutes: Routes = [
  {
    path: 'asset-table/search',
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
    BusinessComponent,
    DesktopDeviceComponent,
    MainFrameComponent,
    NetworkDeviceComponent,
    PatchPanelComponent,
    RackComponent,
    ServerDeviceComponent,
    StorageDeviceComponent,
    StorageFrameComponent,
    GridLocationComponent,
    RackableDeviceComponent,
    ConfigurableDeviceComponent,
    NetworkConfigurationComponent,
    OSConfigurationComponent,
    HardwareConfigurationComponent,
    ConfigurationComponent,
    SupportUnitComponent,
    ServiceContractComponent,
    NetworkConnectionComponent,
    HopComponent,
    PortComponent,
    PermissionComponent,
    RoleComponent,
    UserProfileComponent,
    UserComponent,
    SiteComponent
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
