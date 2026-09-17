import { StatusBadge } from "@/components/ui/status-badge";
import type { Shipment } from "@/types/shipment";

const shipment: Shipment = {
  awb: "NC-2026-000481",
  origin: "Jakarta",
  destination: "Surabaya",
  status: "transit",
  weightKg: 1250,
  etaISO: "2026-09-20T08:00:00.000Z",
  delayedMinutes: 0,

  client: {
    id: "CL-001",
    name: "PT Anugrah",
  },

  vehicle: {
    id: "VH-001",
    plateNumber: "B 1234 ABC",
    type: "truck",
  },

  driver: {
    id: "DRV-001",
    name: "Budi Santoso",
    phone: "081234567890",
  },
};

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="mb-6 text-2xl font-bold">
        NusaCargo Control Tower
      </h1>

      <div className="max-w-md rounded-xl border p-5">
        <div className="mb-4 flex items-center justify-between">
          <strong>{shipment.awb}</strong>

          <StatusBadge status={shipment.status} />
        </div>

        <p>
          {shipment.origin} → {shipment.destination}
        </p>

        <p>Berat: {shipment.weightKg} kg</p>

        {shipment.vehicle && (
          <p>Kendaraan: {shipment.vehicle.plateNumber}</p>
        )}

        {shipment.driver && (
          <p>Pengemudi: {shipment.driver.name}</p>
        )}
      </div>
    </main>
  );
}