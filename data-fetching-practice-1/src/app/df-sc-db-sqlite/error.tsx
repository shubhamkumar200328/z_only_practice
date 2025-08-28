"use client";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="p-6 text-red-600">
      <h2>❌ SQLite Fetch Failed</h2>
      <p>{error.message}</p>
      <button
        onClick={reset}
        className="mt-3 px-4 py-2 bg-red-500 text-white rounded-lg cursor-pointer hover:bg-red-600"
      >
        Retry
      </button>
    </div>
  );
}
