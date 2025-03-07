import AddCompanyButton from '@/app/components/add-company-button';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-zinc-50 p-6">
      <h1 className="text-3xl font-bold mb-6">Welcome to the Home Page</h1>
      <p className="text-lg mb-4 text-zinc-300">
        Manage your companies with ease.
      </p>

      <div className="flex gap-4 mb-6">
        <Link
          href="/dashboard"
          className="py-2.5 px-5 bg-gray-800 text-zinc-50 text-base font-medium rounded hover:bg-gray-700 active:bg-gray-950"
        >
          Dashboard
        </Link>
        <Link
          href="/companies"
          className="py-2.5 px-5 bg-gray-800 text-zinc-50 text-base font-medium rounded hover:bg-gray-700 active:bg-gray-950"
        >
          Companies
        </Link>
      </div>

      <AddCompanyButton />
    </main>
  );
}
