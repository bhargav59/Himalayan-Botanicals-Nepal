'use client';

import { useRouter } from 'next/navigation';

const statuses = ['PENDING', 'QUOTED', 'ACCEPTED', 'REJECTED', 'CLOSED'];

export default function QuoteActions({ id, currentStatus }: { id: string; currentStatus: string }) {
  const router = useRouter();

  async function handleUpdate(newStatus: string) {
    await fetch('/api/admin/quote-status', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, status: newStatus }),
    });
    router.refresh();
  }

  return (
    <select
      value={currentStatus}
      onChange={(e) => handleUpdate(e.target.value)}
      className="rounded border border-gray-200 px-2 py-1 text-xs text-gray-600 bg-white"
    >
      {statuses.map((s) => (
        <option key={s} value={s}>{s}</option>
      ))}
    </select>
  );
}
