import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#F7F1E3] px-4 text-[#2B2118]">
      <div className="max-w-md text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#6D4C41]">404</p>
        <h1 className="mt-4 text-4xl font-black tracking-[-0.06em]">Page not found</h1>
        <p className="mt-4 text-base leading-7 text-[#5d514b]">
          The page you are looking for no longer exists or has moved.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex items-center justify-center rounded-full bg-[#3E2723] px-5 py-3 text-sm font-semibold text-[#F7F1E3] shadow-[0_12px_24px_rgba(62,39,35,0.14)] transition hover:-translate-y-0.5 hover:bg-[#2a1c18]"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}
