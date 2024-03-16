import {
  HiOutlineMoon,
  HiOutlineArrowRightOnRectangle,
  HiOutlineSun,
} from "react-icons/hi2";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";

export default function Navigation() {
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  // dark:bg-black
  return (
    <nav className="p-5 flex justify-between bg-white pt-12 sm:max-w-lg mx-auto">
      {theme === "light" ? (
        <HiOutlineMoon
          className="h-5 w-5 hover:scale-110 transition-all"
          onClick={() => {
            setTheme("dark");
          }}
        />
      ) : (
        <HiOutlineSun
          className="h-5 w-5 hover:scale-110 transition-all"
          onClick={() => {
            setTheme("light");
          }}
        />
      )}
      <h1 className="font-bold uppercase">
        {router.pathname.split("/")[1] || "Expenses"}
      </h1>
      <HiOutlineArrowRightOnRectangle className="h-5 w-5 hover:scale-110 transition-all" />
    </nav>
  );
}
