export function SearchSkeleton() {
  return (
    <div className="flex justify-center">
      <div className="flex w-[450px] animate-pulse" role="status">
        <div className="w-80 rounded-md bg-gray-300 p-4 dark:bg-gray-700" />
        <div className="h-2.5 w-32 rounded-md bg-gray-300 p-4 dark:bg-blue-400" />
      </div>
    </div>
  );
}
