"use client"
import Link from "next/link";
import { usePathname }  from 'next/navigation';
import { FaCalendarAlt } from "react-icons/fa";
import { FaCompass } from "react-icons/fa6";
import { IoPersonSharp } from "react-icons/io5";
import { MdHomeFilled, MdInbox } from "react-icons/md";

export function NavigationBar(){

    const pathname = usePathname();

    return (
        // "fixed bottom-0 left-0 z-50 w-[768px]"
        <footer className="fixed bottom-0 left-0 z-50 inset-x-0 mx-auto max-w-[768px] min-w-min border-t-2 bg-white">
            <nav className="h-12 p-1 flex items-center justify-evenly text-zinc-400">
                <Link className={pathname == "/" || "/home" ? "flex items-center justify-evenly text-btn-primary-color" : "flex items-center justify-evenly text-zinc-400"} href="/home">
                    <MdHomeFilled size={24} />
                </Link>
                <Link className={pathname == "/GeoLocation" ? "flex items-center justify-evenly text-btn-primary-color" : "flex items-center justify-evenly text-zinc-400"} href="GeoLocation">
                    <FaCompass  size={24} />
                </Link>
                <Link className={pathname == "/appointment" ? "flex items-center justify-evenly text-btn-primary-color" : "flex items-center justify-evenly text-zinc-400"} href="#">
                    <FaCalendarAlt  size={24} />
                </Link>
                <Link className={pathname == "/inbox" ? "flex items-center justify-evenly text-btn-primary-color" : "flex items-center justify-evenly text-zinc-400"} href="#">
                    <MdInbox  size={24} />
                </Link>
                <Link className={pathname == "/profile" ? "flex items-center justify-evenly text-btn-primary-color" : "flex items-center justify-evenly text-zinc-400"} href="#">
                    <IoPersonSharp  size={24} />
                </Link>
            </nav>
        </footer>
    );
}