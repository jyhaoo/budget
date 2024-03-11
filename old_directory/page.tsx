import Navigation from "./ui/Navigation";
import BottomNaviation from "./ui/BottomNavigation";

export default function Home() {
  return (
    <>
      <Navigation />
      <div className="sm:max-w-lg mx-auto dark:bg-black px-5 flex justify-center items-center relative min-h-screen">
        <BottomNaviation />
      </div>
    </>
  );
}
