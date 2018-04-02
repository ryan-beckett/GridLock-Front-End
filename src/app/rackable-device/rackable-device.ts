import {Rack} from "../rack/rack";
import {GridLocation} from "../grid-location/grid-location";

export class RackableDevice {
  rack: Rack;
  uLocation: number;
  uHeight: number;
  zone: string;
  gridLocation: GridLocation;
}
