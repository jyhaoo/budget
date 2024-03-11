export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen relative">
      <div className="sm:max-w-lg mx-auto bg-white dark:bg-black px-5 flex justify-center items-center relative min-h-screen">
        {children}
      </div>
    </div>
  );
}
