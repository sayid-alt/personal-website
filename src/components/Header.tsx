'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

const navLinks = [
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-[#070B14]/90 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'
        }`}
      >
        <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/home-page" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-full overflow-hidden border border-white/10 group-hover:border-[#22D3EE]/40 transition-colors duration-300">
              <AppImage
                src="https://www.datascienceportfol.io/static/profile_pics/pr0_AFACD359DB7FE2B9118D.jpg"
                alt="Sayid Muhammad Heykal profile photo"
                width={32}
                height={32}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-display text-sm font-semibold text-[#E2E8F0] group-hover:text-[#22D3EE] transition-colors duration-300 tracking-tight">
              Sayid
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks?.map((link) => (
              <a
                key={link?.label}
                href={link?.href}
                className="text-sm font-medium text-[#94A3B8] hover:text-[#E2E8F0] transition-colors duration-300 relative group"
              >
                {link?.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#22D3EE] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <a
              href="mailto:heykalsayid@gmail.com"
              className="text-sm font-semibold text-[#070B14] bg-[#22D3EE] px-4 py-1.5 rounded-full hover:bg-[#67E8F9] transition-colors duration-300"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 relative z-50"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <span
              className={`block w-5 h-px bg-[#E2E8F0] transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}
            />

            <span
              className={`block w-5 h-px bg-[#E2E8F0] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}
            />

            <span
              className={`block w-5 h-px bg-[#E2E8F0] transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}
            />
          </button>
        </nav>
      </header>
      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-[#070B14]/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8"
          onClick={handleNavClick}
        >
          {navLinks?.map((link) => (
            <a
              key={link?.label}
              href={link?.href}
              onClick={handleNavClick}
              className="font-display text-3xl font-semibold text-[#E2E8F0] hover:text-[#22D3EE] transition-colors duration-300"
            >
              {link?.label}
            </a>
          ))}
          <a
            href="mailto:heykalsayid@gmail.com"
            onClick={handleNavClick}
            className="mt-4 text-base font-semibold text-[#070B14] bg-[#22D3EE] px-8 py-3 rounded-full hover:bg-[#67E8F9] transition-colors duration-300"
          >
            Hire Me
          </a>
        </div>
      )}
    </>
  );
}
