import {RackableDevice} from "../rackable-device/rackable-device";

export class PatchPanel extends RackableDevice {
  PATCH_PANEL_PORT_TYPES: string[] = ["COAX", "TWINAX", "FIBER_SM", "FIBER_MM", "RJ_45", "RJ_11", "USB"];
  totalNumberOfPorts: number;
  portType: string;
}
