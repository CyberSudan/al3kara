"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4">

        <div className="flex justify-between items-center">

          <h1 className="text-2xl font-bold text-green-900">
            العيكورة
          </h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6 text-sm lg:text-base">

            <a href="/" className="hover:text-yellow-600 transition">
              الرئيسية
            </a>

            <a href="/about" className="hover:text-yellow-600 transition">
              عن العيكورة
            </a>

            <a href="/history" className="hover:text-yellow-600 transition">
              تاريخ العيكورة
            </a>

            <a href="/pioneers" className="hover:text-yellow-600 transition">
              رواد العيكورة
            </a>

            <a href="/pioneers" className="hover:text-yellow-600 transition">
              رواد العيكورة الرقمية
            </a>

            <a href="/people" className="hover:text-yellow-600 transition">
              أبناء العيكورة
            </a>

            <a href="/newspaper" className="hover:text-yellow-600 transition">
              صحيفة العيكورة
            </a>

            <a href="/gallery" className="hover:text-yellow-600 transition">
              معرض الصور
            </a>

            <a href="/news" className="hover:text-yellow-600 transition">
              الأخبار
            </a>

            <a href="/contact" className="hover:text-yellow-600 transition">
              تواصل معنا
            </a>

          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-3xl text-green-900"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>

        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 border-t pt-4 flex flex-col gap-4">

            <a href="/" onClick={() => setIsOpen(false)}>
              الرئيسية
            </a>

            <a href="/about" onClick={() => setIsOpen(false)}>
              عن العيكورة
            </a>

            <a href="/history" onClick={() => setIsOpen(false)}>
              تاريخ العيكورة
            </a>

            <a href="/pioneers" onClick={() => setIsOpen(false)}>
              رواد العيكورة
            </a>

            <a href="/pioneers" onClick={() => setIsOpen(false)}>
              رواد العيكورة الرقمية
            </a>

            <a href="/people" onClick={() => setIsOpen(false)}>
              أبناء العيكورة
            </a>

            <a href="/newspaper" onClick={() => setIsOpen(false)}>
              صحيفة العيكورة
            </a>

            <a href="/gallery" onClick={() => setIsOpen(false)}>
              معرض الصور
            </a>

            <a href="/news" onClick={() => setIsOpen(false)}>
              الأخبار
            </a>

            <a href="/contact" onClick={() => setIsOpen(false)}>
              تواصل معنا
            </a>

          </div>
        )}

      </div>
    </nav>
  );
}
