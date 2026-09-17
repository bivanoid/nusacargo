import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center p-6">
      <div className="max-w-md text-center">
        <h1 className="text-3xl font-bold">
          Resi tidak ditemukan
        </h1>

        <p className="mt-3 text-gray-600">
          Nomor resi yang Anda masukkan tidak ditemukan.
          Silakan periksa kembali nomor resi Anda.
        </p>

        <Link
          href="/"
          className="mt-6 inline-block rounded-lg bg-black px-4 py-2 text-white"
        >
          Coba resi lain
        </Link>
      </div>
    </main>
  );
}