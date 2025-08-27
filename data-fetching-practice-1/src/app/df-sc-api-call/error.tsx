// app/df-sc-api-call/error.tsx

'use client'; 

type ErrorProps = {
  error: Error;
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
  return (
    <div className="p-6 text-center">
      <h2 className="text-2xl text-red-500">Something went wrong!</h2>
      <p className="text-red-400 mt-2">{error.message}</p>
      <button
        onClick={reset}
        className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 cursor-pointer"
      >
        Try Again
      </button>
    </div>
  );
}
