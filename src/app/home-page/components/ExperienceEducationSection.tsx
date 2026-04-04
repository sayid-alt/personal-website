'use client';

import React, { useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';

const experience = [
  {
    period: '2025 – Present',
    role: 'Data Analyst',
    org: 'Indonesia Youth Foundation',
    type: 'experience',
    description:
      'Deliver data-driven insights to division heads to make decisions more reliable and measurable. Maintain interactive dashboards monitoring project progress against predefined KPI metrics.',
    tags: ['Data Analytics', 'Data Visualization', 'Member Segmentation'],
    icon: 'BriefcaseIcon',
    accent: '#22D3EE',
  },
];

const education = [
  {
    period: '2021 – 2025',
    role: 'Bachelor of Informatics Engineering',
    org: 'University of Muhammadiyah Prof. DR. Hamka',
    type: 'education',
    description:
      'GPA 3.68 / 4.00. Relevant courses: Data Mining, Machine Learning, Artificial Intelligence, Statistics & Probability, Calculus. Conducted literature review on 5 prior studies to identify state-of-the-art forecasting approaches.',
    highlights: [
      'Designed hybrid CNN-LSTM and CNN-GRU architectures for financial time-series',
      'Reduced Mean Squared Error from 0.0019 to 0.00034 — 82.11% improvement',
      'GPA 3.68 out of 4.00',
    ],
    tags: ['Informatics Engineering', 'Machine Learning', 'Research', 'Data Mining', 'Artificial Intelligence'],
    icon: 'AcademicCapIcon',
    accent: '#F59E0B',
  },
];

type TimelineItem = {
  period: string;
  role: string;
  org: string;
  type: string;
  description: string;
  tags: string[];
  icon: string;
  accent: string;
  highlights?: string[];
};

function TimelineCard({
  item,
  index,
  revealRef,
}: {
  item: TimelineItem;
  index: number;
  revealRef: (el: HTMLDivElement | null) => void;
}) {
  return (
    <div
      ref={revealRef}
      className={`reveal reveal-delay-${(index % 3) + 1} group glass-card rounded-2xl p-6 hover:bg-white/5 transition-all duration-500 hover:-translate-y-1 relative overflow-hidden`}
    >
      {/* Accent top border */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: `linear-gradient(to right, ${item.accent}60, transparent)`,
        }}
      />

      <div className="flex items-start gap-4 mb-4">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ background: `${item.accent}15` }}
        >
          <Icon
            name={item.icon as Parameters<typeof Icon>[0]['name']}
            size={18}
            className="text-current"
            style={{ color: item.accent }}
          />
        </div>
        <div className="flex-1">
          <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
            <h3 className="font-semibold text-[#E2E8F0] text-base">{item.role}</h3>
            <span
              className="text-xs font-medium px-2.5 py-0.5 rounded-full"
              style={{
                background: `${item.accent}12`,
                color: item.accent,
                border: `1px solid ${item.accent}25`,
              }}
            >
              {item.period}
            </span>
          </div>
          <p className="text-sm font-medium" style={{ color: item.accent }}>
            {item.org}
          </p>
        </div>
      </div>

      <p className="text-sm text-[#64748B] leading-relaxed mb-4">{item.description}</p>

      {item.highlights && (
        <ul className="space-y-1.5 mb-4">
          {item.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2 text-sm text-[#94A3B8]">
              <span
                className="w-1 h-1 rounded-full mt-2 flex-shrink-0"
                style={{ background: item.accent }}
              />
              {h}
            </li>
          ))}
        </ul>
      )}

      <div className="flex flex-wrap gap-1.5">
        {item.tags.map((tag) => (
          <span
            key={tag}
            className="text-[10px] font-medium px-2.5 py-0.5 rounded-full uppercase tracking-wider"
            style={{
              background: `${item.accent}10`,
              color: item.accent,
              border: `1px solid ${item.accent}20`,
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Shimmer on hover */}
      <div
        className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.03), transparent)',
          transform: 'skewX(-12deg)',
        }}
      />
    </div>
  );
}

export default function ExperienceEducationSection() {
  const revealRefs = useRef<(HTMLDivElement | null)[]>([]);

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

  const allItems = [...experience, ...education];

  return (
    <section id="experience" className="py-24 relative" aria-label="Experience and Education">
      <div className="section-divider mb-24" />

      <div
        className="absolute right-0 bottom-0 w-80 h-80 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(167,139,250,0.06) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div
          ref={(el) => {
            revealRefs.current[0] = el;
          }}
          className="reveal mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-px bg-[#A78BFA]" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#A78BFA]">
              Background
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-[#E2E8F0] leading-tight">
            Experience &
            <br />
            <span
              className="text-transparent"
              style={{
                backgroundImage: 'linear-gradient(135deg, #A78BFA 0%, #C4B5FD 60%, #22D3EE 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
              }}
            >
              Education
            </span>
          </h2>
        </div>

        {/* Two columns */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Experience column */}
          <div>
            <div
              ref={(el) => {
                revealRefs.current[1] = el;
              }}
              className="reveal flex items-center gap-3 mb-5"
            >
              <Icon name="BriefcaseIcon" size={16} className="text-[#22D3EE]" />
              <span className="text-sm font-semibold text-[#22D3EE] uppercase tracking-wider">
                Work Experience
              </span>
            </div>
            <div className="space-y-4">
              {experience.map((item, i) => (
                <TimelineCard
                  key={item.org}
                  item={item}
                  index={i}
                  revealRef={(el) => {
                    revealRefs.current[2 + i] = el;
                  }}
                />
              ))}
            </div>
          </div>

          {/* Education column */}
          <div>
            <div
              ref={(el) => {
                revealRefs.current[3] = el;
              }}
              className="reveal flex items-center gap-3 mb-5"
            >
              <Icon name="AcademicCapIcon" size={16} className="text-[#F59E0B]" />
              <span className="text-sm font-semibold text-[#F59E0B] uppercase tracking-wider">
                Education
              </span>
            </div>
            <div className="space-y-4">
              {education.map((item, i) => (
                <TimelineCard
                  key={item.org}
                  item={item}
                  index={i}
                  revealRef={(el) => {
                    revealRefs.current[4 + i] = el;
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
