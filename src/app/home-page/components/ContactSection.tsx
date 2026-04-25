'use client';

import React, { useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';

const contactLinks = [
  {
    label: 'LinkedIn',
    handle: '/in/sayidheykal',
    href: 'https://linkedin.com/in/sayidheykal',
    icon: 'linkedin.png',
    accent: '#0077b5',
    description: 'Connect professionally',
  },
  {
    label: 'Medium',
    handle: '/heykalsayid',
    href: 'https://medium.com/@heykalsayid',
    icon: 'medium.png',
    accent: '#4b4f50',
    description: 'Dive Into Projects',
  },
  {
    label: 'GitHub',
    handle: '/sayid-alt',
    href: 'https://github.com/sayid-alt',
    icon: 'CodeBracketIcon',
    accent: '#A78BFA',
    description: 'Browse my repositories',
  },
  {
    label: 'Email',
    handle: 'heykalsayid@gmail.com',
    href: 'mailto:heykalsayid@gmail.com',
    icon: 'EnvelopeIcon',
    accent: '#F59E0B',
    description: 'Send a direct message',
  },
];

export default function ContactSection() {
  const revealRefs = useRef<(HTMLDivElement | HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    revealRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className="py-24 relative" aria-label="Contact">
      <div className="section-divider mb-24" />

      {/* Ambient */}
      <div
        className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-96 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(34,211,238,0.05) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div
          ref={(el) => {
            revealRefs.current[0] = el;
          }}
          className="reveal text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-6 h-px bg-[#22D3EE]" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#22D3EE]">
              Contact
            </span>
            <div className="w-6 h-px bg-[#22D3EE]" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-[#E2E8F0] leading-tight mb-4">
            Let&apos;s work
            <br />
            <span
              className="text-transparent"
              style={{
                backgroundImage: 'linear-gradient(135deg, #22D3EE 0%, #67E8F9 50%, #F59E0B 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
              }}
            >
              together
            </span>
          </h2>
          <p className="text-[#64748B] text-base max-w-md mx-auto">
            Open to full-time data analyst and data scientist roles, freelance projects, and
            research collaborations.
          </p>
        </div>

        {/* CTA card */}
        <div
          ref={(el) => {
            revealRefs.current[1] = el;
          }}
          className="reveal reveal-delay-1 glass-card-accent rounded-3xl p-8 md:p-12 mb-10 text-center relative overflow-hidden"
        >
          {/* Decorative ring */}
          <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full border border-dashed border-[#22D3EE]/10 pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full border border-dashed border-[#F59E0B]/10 pointer-events-none" />

          <div className="relative z-10">
            <p className="text-[#94A3B8] text-lg mb-6 max-w-sm mx-auto">
              Whether it&apos;s a data challenge, a modeling project, or a team you&apos;re building
              — I&apos;d love to hear from you.
            </p>
            <a
              href="mailto:heykalsayid@gmail.com"
              className="inline-flex items-center gap-2 bg-[#22D3EE] text-[#070B14] px-8 py-3.5 rounded-full font-bold text-sm hover:bg-[#67E8F9] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(34,211,238,0.3)]"
            >
              <Icon name="EnvelopeIcon" size={16} className="text-[#070B14]" />
              Send an Email
            </a>
          </div>
        </div>

        {/* Contact links row */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          {contactLinks.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              ref={(el) => {
                revealRefs.current[2 + i] = el;
              }}
              className={`reveal reveal-delay-${i + 1} group glass-card rounded-2xl p-5 flex items-center gap-4 hover:bg-white/5 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden`}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300"
                style={{ background: `${link.accent}15` }}
              >
                <Icon
                  name={link.icon as Parameters<typeof Icon>[0]['name']}
                  size={18}
                  style={{ color: link.accent }}
                />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-[#E2E8F0] mb-0.5">{link.label}</p>
                <p className="text-xs text-[#475569] truncate">{link.handle}</p>
              </div>
              <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Icon name="ArrowTopRightOnSquareIcon" size={14} className="text-[#475569]" />
              </div>
              {/* Accent bottom line */}
              <div
                className="absolute bottom-0 left-0 w-0 h-px group-hover:w-full transition-all duration-500"
                style={{ background: link.accent }}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
