export const MainErrorFallback = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <h1 className="text-center text-3xl font-bold">Error</h1>
      <button onClick={() => window.location.assign(window.location.origin)}>
        <span>Try Again</span>
      </button>
    </div>
  );
};
