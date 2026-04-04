import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-[#475569] text-sm">© 2026 Sayid Muhammad Heykal</p>
        <div className="flex items-center gap-6">
          <a
            href="https://linkedin.com/in/sayidheykal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#475569] hover:text-[#22D3EE] text-sm font-medium transition-colors duration-300"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/sayid-alt"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#475569] hover:text-[#22D3EE] text-sm font-medium transition-colors duration-300"
          >
            GitHub
          </a>
          <a
            href="mailto:heykalsayid@gmail.com"
            className="text-[#475569] hover:text-[#22D3EE] text-sm font-medium transition-colors duration-300"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
