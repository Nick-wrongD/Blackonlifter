export function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="relative w-12 h-12">
        <div className="absolute inset-0 border-4 border-teal-500/30 rounded-full"></div>
        <div className="absolute inset-0 border-4 border-transparent border-t-teal-500 rounded-full animate-spin"></div>
      </div>
    </div>
  );
}
