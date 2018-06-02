import {Manufacturer} from "../manufacturer/manufacturer";
import {Room} from "../room/room";
import {BusinessUnit} from "../business-unit/business-unit";
import {ServiceContract} from "../service-contract/service-contract";

export class Asset {
  ASSET_TYPES: string[] = ["RACK", "MAIN_FRAME", "STORAGE_FRAME", "STORAGE_DEVICE", "SERVER_DEVICE", "NETWORK_DEVICE", "DESKTOP_DEVICE"];
  ASSET_STATUS: string[] = ["NEW", "INSTALLED", "PRE_PRODUCTION", "PRODUCTION", "POST_PRODUCTION", "DECOMMISSIONED"];
  id: number;
  purchaseOrderNumber: string;
  name: string;
  serial: string;
  manufacturer: Manufacturer;
  model: string;
  partNumber: string;
  description: string;
  room: Room;
  type: string;
  status: string;
  owner: BusinessUnit;
  serviceContract: ServiceContract;
  cost: number;
  imageURL: string;
}
