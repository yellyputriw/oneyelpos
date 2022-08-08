import Image from "next/image";
import Link from "next/link";
import {
  RiArrowDropLeftLine,
  RiHome6Line,
  RiHome6Fill,
  RiStoreLine,
  RiStoreFill,
  RiChat1Fill,
  RiChat1Line,
  RiArchiveFill,
  RiArchiveLine,
} from "react-icons/ri";

interface ISidebar {
  isActive: boolean;
}

const Sidebar = ({ isActive }: ISidebar) => {
  return (
    <aside className="w-[240px] bg-white h-screen pt-5 px-5 fixed">
      <div className="border-b border-b-black flex justify-between pb-5">
        <Image src="/vercel.svg" width={100} height={24} alt="logo" />
        <RiArrowDropLeftLine className="text-3xl" />
      </div>
      <div>
        <ul className="pt-5 mt-5">
          <li className="flex items-center px-5 py-3 rounded-md mb-1 bg-slate-500 text-white">
            {isActive ? (
              <RiHome6Fill className="text-lg" />
            ) : (
              <RiHome6Line className="text-lg" />
            )}
            <Link href="/">
              <a className="ml-3">Beranda</a>
            </Link>
          </li>
          <li className="flex items-center px-5 py-3 rounded-md mb-1 ">
            {isActive ? (
              <RiStoreFill className="text-lg" />
            ) : (
              <RiStoreLine className="text-lg" />
            )}
            <Link href="/">
              <a className="ml-3">Pesanan</a>
            </Link>
          </li>
          <li className="flex items-center px-5 py-3 rounded-md mb-1 ">
            {isActive ? (
              <RiChat1Fill className="text-lg" />
            ) : (
              <RiChat1Line className="text-lg" />
            )}
            <Link href="/">
              <a className="ml-3">Chat</a>
            </Link>
          </li>
          <li className="flex items-center px-5 py-3 rounded-md mb-1 ">
            {isActive ? (
              <RiArchiveFill className="text-lg" />
            ) : (
              <RiArchiveLine className="text-lg" />
            )}
            <Link href="/">
              <a className="ml-3">Product</a>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
