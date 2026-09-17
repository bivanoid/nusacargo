export const SHIPMENT_STATUS = [
  "dijemput",
  "transit",
  "di-pelabuhan",
  "dikirim",
  "selesai",
	"tertunda",
  "dibatalkan"
] as const;

export type ShipmentStatus = (typeof SHIPMENT_STATUS)[number];

export interface Vehicle {
  id: string;
  plateNumber: string;
  type: "truck" | "van" | "pickup";
}

export interface Driver {
  id: string;
  name: string;
  phone: string;
}

export interface Shipment {
  awb: string;
  origin: string;
  destination: string;
  status: ShipmentStatus;
  weightKg: number;
  etaISO: string;
  delayedMinutes: number;

  client: {
    id: string;
    name: string;
  };

  vehicle?: Vehicle;
  driver?: Driver;
}

export type ShipmentSummary = Pick<
  Shipment,
  "awb" | "status" | "etaISO"
>;