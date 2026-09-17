import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    awb: string;
  }>;
};

export async function generateMetadata({ params }: Props) {
  const { awb } = await params;

  return {
    title: `Lacak ${awb} · NusaCargo`,
    description: `Status terkini pengiriman ${awb} pada jaringan NusaCargo.`,
  };
}

export default async function TrackPage({ params }: Props) {
  const { awb } = await params;

  if (!awb.startsWith("NC-")) {
    notFound();
  }

  return (
    <section>
      <h1 className="text-2xl font-bold">
        Pelacakan Pengiriman
      </h1>

      <p className="mt-3">
        Nomor Resi: <strong>{awb}</strong>
      </p>
    </section>
  );
}