const metrics = [
  {
    title: "Total Pengiriman",
    value: "1.248",
    description: "Pengiriman hari ini",
  },
  {
    title: "Ketepatan Waktu",
    value: "92%",
    description: "Tiba sesuai estimasi",
  },
  {
    title: "Tertunda",
    value: "37",
    description: "Pengiriman mengalami keterlambatan",
  },
];

export function MetricCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {metrics.map((metric) => (
        <article
          key={metric.title}
          className="rounded-xl border border-border bg-surface p-5"
        >
          <p className="text-sm opacity-70">{metric.title}</p>

          <p className="mt-2 text-3xl font-bold">
            {metric.value}
          </p>

          <p className="mt-1 text-sm opacity-70">
            {metric.description}
          </p>
        </article>
      ))}
    </div>
  );
}