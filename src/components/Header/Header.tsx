import { UserCircleIcon } from "@heroicons/react/24/solid";

function Header() {
  return (
    <header className="bg-blue-500 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl">
        引路教育
        <sub className="text-sm">高考大数据</sub>
      </h1>

      <nav>
        <button className="py-2 px-4 text-white bg-blue-700 hover:bg-blue-900 rounded focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-opacity-50">
          主页
        </button>
        <button className="py-2 px-4 text-white bg-blue-700 hover:bg-blue-900 rounded focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-opacity-50 ml-2">
          历史组
        </button>
        <button className="py-2 px-4 text-white bg-blue-700 hover:bg-blue-900 rounded focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-opacity-50 ml-2">
          物理组
        </button>
      </nav>
      <UserCircleIcon className="text-white w-8 h-8" />
    </header>
  );
}
export default Header;
