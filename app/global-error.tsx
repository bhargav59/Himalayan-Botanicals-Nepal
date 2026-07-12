'use client';

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <html>
      <body>
        <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
          <h1 className="text-2xl font-bold">Critical Error</h1>
          <p className="mt-2 text-gray-500">The application encountered a critical error.</p>
          <button onClick={reset} className="mt-4 rounded-lg bg-gray-900 px-4 py-2 text-sm text-white">
            Reload
          </button>
        </div>
      </body>
    </html>
  );
}
