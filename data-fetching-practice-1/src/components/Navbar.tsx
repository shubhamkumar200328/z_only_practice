"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();


  return (
    <nav className="flex justify-between items-center p-4 bg-brand text-white bg-emerald-900 shadow-lg">
      <Link href="/" className="font-bold text-xl">Logo</Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6">
        <Link href="/df-cc-api-call" className={`px-3 py-2 rounded-md font-semibold hover:bg-gray-400 transition ${pathname === "/df-cc-api-call" ? "bg-[#ffffff] text-[#013337] font-semibold" : ""}`}>dfCcAc</Link>
        <Link href="/df-sc-api-call" className={`px-3 py-2 rounded-md font-semibold hover:bg-gray-400 transition ${pathname === "/df-sc-api-call" ? "bg-[#ffffff] text-[#013337] font-semibold" : ""}`}>dfScAc</Link>
        <Link href="/df-sc-db-sqlite" className={`px-3 py-2 rounded-md font-semibold hover:bg-gray-400 transition ${pathname === "/df-sc-db-sqlite" ? "bg-[#ffffff] text-[#013337] font-semibold" : ""}`}>dfScSQLite</Link>
        <Link href="/df-sc-db-mongodb" className={`px-3 py-2 rounded-md font-semibold hover:bg-gray-400 transition ${pathname === "/df-sc-db-mongodb" ? "bg-[#ffffff] text-[#013337] font-semibold" : ""}`}>dfScMdb</Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-brand-dark flex flex-col items-center p-4 space-y-4 md:hidden">
          <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/df-cc-api-call" onClick={() => setIsOpen(false)}>dfCcAc</Link>
          <Link href="/df-sc-api-call" onClick={() => setIsOpen(false)}>dfScAc</Link>
          <Link href="/df-sc-db-sqlite" onClick={() => setIsOpen(false)}>dfScSQLite</Link>
          <Link href="/df-sc-db-mongodb" onClick={() => setIsOpen(false)}>dfScMdb</Link>
        </div>
      )}
    </nav>
  );
}
