import { HiOutlineSun, HiOutlineArrowRightOnRectangle } from "react-icons/hi2";

export default function Navigation() {
  return (
    <nav className="p-5 flex justify-between bg-white dark:bg-black pt-12 sm:max-w-lg mx-auto">
      <HiOutlineSun className="h-5 w-5 hover:scale-110 transition-all" />
      <h1 className="font-bold uppercase">Expenses</h1>
      <HiOutlineArrowRightOnRectangle className="h-5 w-5 hover:scale-110 transition-all" />
    </nav>
  );
}
