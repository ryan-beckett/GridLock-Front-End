import {RackableDevice} from "../rackable-device/rackable-device";
import {GridLocation} from "../grid-location/grid-location";
import {Asset} from "../asset/asset";

export class Rack extends Asset {
  uheight: number;
  devices: RackableDevice[];
  gridLocation: GridLocation;
}
