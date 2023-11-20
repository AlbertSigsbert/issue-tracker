'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiFillBug } from "react-icons/ai";


export default function NavBar() {
   const currentPath = usePathname();
   console.log(currentPath)

  const links = [
    {label:'Dashboard', href:'/'},
    {label:'Issues', href:'/issues'},
  ]
  return (
    <nav className="flex space-x-6 border-b mb-5 px-[6%] h-14 items-center">
      <Link href="/"><AiFillBug /></Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} 
            className={`${link.href === currentPath ? 'text-zinc-900': 'text-zinc-500'} hover:text-zinc-800 transition-colors`}>
            {link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}