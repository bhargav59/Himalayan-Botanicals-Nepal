'use client';

export default function AdminError({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <h2 className="text-lg font-semibold text-gray-900">Something went wrong</h2>
      <p className="mt-1 text-sm text-gray-500">{error.message}</p>
      <button onClick={reset} className="mt-4 rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800">
        Try again
      </button>
    </div>
  );
}
