'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const stats = [
  { value: '4+', label: 'ML Projects' },
  { value: '3.68', label: 'GPA / 4.00' },
  { value: '6000+', label: 'Data Processed' },
];

const socialLinks = [
  {
    id: 2,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/sayidheykal',
    icon: 'linkedin-white.png',
  },
  {
    id: 3,
    label: 'GitHub',
    href: 'https://github.com/sayid-alt',
    icon: 'github.svg',
  },
  {
    id: 4,
    label: 'Email',
    href: 'mailto:heykalsayid@gmail.com',
    icon: 'EnvelopeIcon',
  },
];

export default function HeroSection() {
  const blobRef1 = useRef<HTMLDivElement>(null);
  const blobRef2 = useRef<HTMLDivElement>(null);

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center pt-24 pb-16 overflow-hidden"
      aria-label="Hero"
    >
      {/* Ambient background blobs */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div
          className="absolute top-[-15%] right-[-8%] w-[500px] h-[500px] rounded-full animate-blob animate-pulse-glow"
          style={{
            background: 'radial-gradient(circle, rgba(34,211,238,0.12) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />

        <div
          className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full animate-blob"
          style={{
            background: 'radial-gradient(circle, rgba(245,158,11,0.08) 0%, transparent 70%)',
            filter: 'blur(80px)',
            animationDelay: '4s',
          }}
        />

        <div
          className="absolute top-[40%] left-[30%] w-[300px] h-[300px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(34,211,238,0.05) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />
      </div>
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Identity */}
          <div>
            {/* Status badge */}
            <div
              className="inline-flex items-center gap-2.5 glass-card px-4 py-1.5 rounded-full mb-8"
              style={{
                animation: 'fadeIn 0.8s cubic-bezier(0.22,1,0.36,1) 0.1s both',
              }}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.7)]" />
              <span className="text-xs font-medium tracking-widest uppercase text-[#94A3B8]">
                Available for opportunities
              </span>
            </div>

            {/* Name */}
            <h1
              className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold text-[#E2E8F0] leading-[1.05] mb-4"
              style={{
                animation: 'fadeInUp 0.9s cubic-bezier(0.22,1,0.36,1) 0.2s both',
              }}
            >
              Sayid Muhammad
              <br />
              <span className="relative inline-block">
                <span
                  className="text-transparent"
                  style={{
                    backgroundImage:
                      'linear-gradient(135deg, #22D3EE 0%, #67E8F9 50%, #F59E0B 100%)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                  }}
                >
                  Heykal
                </span>
                {/* Underline glow */}
                <span
                  className="absolute -bottom-1 left-0 w-full h-px blur-sm"
                  style={{
                    background:
                      'linear-gradient(to right, transparent, rgba(34,211,238,0.6), transparent)',
                  }}
                />
              </span>
            </h1>

            {/* Title & Location */}
            <div
              className="mb-8"
              style={{
                animation: 'fadeInUp 0.9s cubic-bezier(0.22,1,0.36,1) 0.35s both',
              }}
            >
              <p className="text-lg font-medium text-[#22D3EE] mb-1">Data Analyst & Scientist</p>
              <p className="text-sm text-[#475569] flex items-center gap-1.5">
                <Icon name="MapPinIcon" size={14} className="text-[#475569]" />
                Jakarta, Indonesia
              </p>
            </div>

            {/* Bio excerpt */}
            <p
              className="text-[#94A3B8] text-base leading-relaxed mb-10 max-w-lg"
              style={{
                animation: 'fadeInUp 0.9s cubic-bezier(0.22,1,0.36,1) 0.45s both',
              }}
            >
              Informatics Engineering graduate bridging raw data and executive decision-making
              through ML research, predictive modeling, and interactive dashboards.
            </p>

            {/* CTA buttons */}
            <div
              className="flex flex-wrap gap-3 mb-10"
              style={{
                animation: 'fadeInUp 0.9s cubic-bezier(0.22,1,0.36,1) 0.55s both',
              }}
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 bg-[#22D3EE] text-[#070B14] px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-[#67E8F9] transition-all duration-300 hover:-translate-y-0.5"
              >
                View Projects
                <Icon name="ArrowDownIcon" size={14} className="text-[#070B14]" />
              </a>
              <a
                href="mailto:heykalsayid@gmail.com"
                className="inline-flex items-center gap-2 glass-card px-6 py-2.5 rounded-full font-semibold text-sm text-[#E2E8F0] hover:bg-white/5 hover:border-[#22D3EE]/30 transition-all duration-300 hover:-translate-y-0.5"
              >
                Get in Touch
              </a>
            </div>

            {/* Social links */}
            <div
              className="flex items-center gap-4"
              style={{
                animation: 'fadeInUp 0.9s cubic-bezier(0.22,1,0.36,1) 0.65s both',
              }}
            >
              {socialLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card w-9 h-9 rounded-full flex items-center justify-center text-[#94A3B8] hover:text-[#22D3EE] hover:border-[#22D3EE]/30 transition-all duration-300 hover:-translate-y-1"
                  aria-label={link.label}
                >
                  <Icon name={link.icon} size={15} variant="solid" className="text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Right: Profile + Stats */}
          <div
            className="flex flex-col items-center gap-6"
            style={{
              animation: 'fadeInScale 1s cubic-bezier(0.22,1,0.36,1) 0.3s both',
            }}
          >
            {/* Profile photo card */}
            <div className="relative group">
              {/* Rotating ring */}
              <div className="absolute -inset-3 rounded-full border border-dashed border-[#22D3EE]/20 animate-spin-slow" />

              {/* Glow */}
              <div
                className="absolute -inset-4 rounded-full animate-pulse-glow"
                style={{
                  background: 'radial-gradient(circle, rgba(34,211,238,0.15) 0%, transparent 70%)',
                  filter: 'blur(20px)',
                }}
              />

              {/* Photo */}
              <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-2 border-[#22D3EE]/30 shadow-[0_0_40px_rgba(34,211,238,0.15)]">
                <AppImage
                  src="https://www.datascienceportfol.io/static/profile_pics/pr0_AFACD359DB7FE2B9118D.jpg"
                  alt="Sayid Muhammad Sayid - Data Analyst and Scientist based in Jakarta"
                  width={224}
                  height={224}
                  priority
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Stats row */}
            <div className="flex gap-4 w-full max-w-sm">
              {stats?.map((stat, i) => (
                <div
                  key={stat?.label}
                  className="glass-card flex-1 rounded-2xl p-4 text-center hover:bg-white/5 transition-all duration-300 hover:-translate-y-1"
                  style={{ animationDelay: `${0.5 + i * 0.1}s` }}
                >
                  <p
                    className="font-display text-2xl font-semibold mb-0.5"
                    style={{
                      backgroundImage: 'linear-gradient(135deg, #22D3EE, #67E8F9)',
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                      color: 'transparent',
                    }}
                  >
                    {stat?.value}
                  </p>
                  <p className="text-[10px] font-medium text-[#475569] uppercase tracking-wider leading-tight">
                    {stat?.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Current role badge */}
            <div className="glass-card-accent rounded-2xl px-5 py-3 flex items-center gap-3 w-full max-w-sm">
              <div className="w-8 h-8 rounded-full bg-[#22D3EE]/10 flex items-center justify-center flex-shrink-0">
                <Icon name="BriefcaseIcon" size={16} className="text-[#22D3EE]" />
              </div>
              <div>
                <p className="text-xs font-semibold text-[#E2E8F0]">Data Analyst</p>
                <p className="text-[11px] text-[#475569]">
                  Indonesia Youth Foundation · 2025–Present
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float"
        style={{
          animation: 'fadeIn 1s 1.2s both, float 3s 2s ease-in-out infinite',
        }}
      >
        <span className="text-[10px] uppercase tracking-widest text-[#475569]">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-[#22D3EE]/40 to-transparent" />
      </div>
    </section>
  );
}
