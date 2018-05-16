import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AlertModule} from 'ngx-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {AssetComponent} from './asset/asset.component';
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
import {ConfigurationService} from "./configuration/configuration.service";
import {ConfigurableDeviceService} from "./configurable-device/configurable-device.service";
import {DesktopDeviceService} from "./desktop-device/desktop-device.service";
import {GridLocationService} from "./grid-location/grid-location.service";
import {HardwareConfigurationService} from "./hardware-configuration/hardware-configuration.service";
import {HopService} from "./hop/hop.service";
import {MainFrameService} from "./main-frame/main-frame.service";
import {NetworkConfigurationService} from "./network-configuration/network-configuration.service";
import {NetworkConnectionService} from "./network-connection/network-connection.service";
import {PatchPanelService} from "./patch-panel/patch-panel.service";
import {RackableDeviceService} from "./rackable-device/rackable-device.service";
import {ServiceContractService} from "./service-contract/service-contract.service";
import {SupportUnitService} from "./support-unit/support-unit.service";
import {UserProfileService} from "./user-profile/user-profile.service";
import {UserService} from "./user/user.service";
import {StorageFrameService} from "./storage-frame/storage-frame.service";
import {StorageDeviceService} from "./storage-device/storage-device.service";
import {SiteService} from "./site/site.service";
import {ServerDeviceService} from "./server-device/server-device.service";
import {RoleService} from "./role/role.service";
import {RackService} from "./rack/rack.service";
import {PortService} from "./port/port.service";
import {PermissionService} from "./permission/permission.service";
import {OSConfigurationService} from "./os-configuration/os-configuration.service";
import {NetworkDeviceService} from "./network-device/network-device.service";
import {ContactComponent} from "./contact/contact.component";
import {LocationComponent} from "./location/location.component";
import { DashboardComponent } from './dashboard/dashboard.component';
import {DashboardService} from "./dashboard/dashboard.service";

const appRoutes: Routes = [
  {
    path: '', redirectTo: '/asset-search', pathMatch: 'full'
  },
  {
    path: 'rack/:id',
    component: RackComponent
  },
  {
    path: 'desktop-device/:id',
    component: DesktopDeviceComponent
  },
  {
    path: 'main-frame/:id',
    component: MainFrameComponent
  },
  {
    path: 'network-device/:id',
    component: NetworkDeviceComponent
  },
  {
    path: 'patch-panel/:id',
    component: PatchPanelComponent
  },
  {
    path: 'server-device/:id',
    component: ServerDeviceComponent
  },
  {
    path: 'storage-device/:id',
    component: StorageDeviceComponent
  },
  {
    path: 'storage-frame/:id',
    component: StorageFrameComponent
  },
  {
    path: 'asset-search',
    component: AssetSearchComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    AssetComponent,
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
    SiteComponent,
    ContactComponent,
    LocationComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    AlertModule.forRoot()
  ],
  providers: [HttpClientModule, AssetService, BusinessService,
    BusinessUnitService, ConfigurableDeviceService, ConfigurationService,
    ContactService, DesktopDeviceService, GridLocationService, HardwareConfigurationService,
    HopService, LocationService, MainFrameService, ManufacturerService, NetworkConfigurationService,
    NetworkConnectionService, NetworkDeviceService, OSConfigurationService, PatchPanelService, PermissionService,
    PortService, RackService, RackableDeviceService, RoleService, RoomService, ServerDeviceService,
    ServiceContractService, SiteService, StorageDeviceService, StorageFrameService, SupportUnitService, UserService,
    UserProfileService, DashboardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
