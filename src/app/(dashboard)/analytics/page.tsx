import { MetricCards } from "@/components/dashboard/metric-cards";

export default function AnalyticsPage() {
  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">
          Analitik
        </h1>

        <p className="mt-2 opacity-70">
          Ringkasan performa pengiriman NusaCargo.
        </p>
      </div>

      <MetricCards />
    </section>
  );
}