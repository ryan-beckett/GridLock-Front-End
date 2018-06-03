import {Rack} from "../rack/rack";
import {GridLocation} from "../grid-location/grid-location";
import {ConfigurableDevice} from "../configurable-device/configurable-device";

export class RackableDevice extends ConfigurableDevice {
  rack: Rack;
  ulocation: number;
  uheight: number;
  zone: string;
  gridLocation: GridLocation;
}
