'use client';

import React, { useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';
const bootcamps = [
  {
    period: 'Jan –- May 2025',
    provider: 'Skill Academy by Ruangguru',
    org: 'Skill Academy',
    path: 'Artificial Intelligence Specialization',
    highlights: [
      'Hands-on data preprocessing for complex analytical models.',
      'Deep Learning architectures and neural network optimization.',
      'Implementation and fine-tuning of Large Language Models (LLMs).',
    ],
    tags: ['Machine Learning', 'Self Development', 'DL Model Development', 'Project Team'],
    capstone: {
      title: 'NVIDIA FAQ AI Assistant',
      desc: 'Fine-tuned EleutherAI LLM specifically for NVIDIA product technical support and documentation.',
      tags: ['EleutherAI', 'NVIDIA Customer Support', 'Large Language Model'],
      github: 'https://github.com/sayid-alt/eleutherai-finetuned-nvidia-faq-llm',
    },
    icon: 'AcademicCapIcon',
    accent: '#a7ee22',
  },
  {
    period: 'Feb –- July 2024',
    provider: 'Google, GoTo, Traveloka',
    org: 'Bangkit Academy 2024',
    path: 'Machine Learning Path',
    highlights: [
      'Comprehensive data preprocessing and analytics workflows.',
      'Advanced Machine Learning theory and implementation.',
      'Technical stack: Python, TensorFlow, and Scikit-learn.',
    ],
    tags: ['Machine Learning', 'Self Development', 'DL Model Development', 'Project Team'],
    capstone: {
      title: 'Skin Type Classification',
      desc: 'Fine-tuned ResNet-50 architecture to classify human skin types with precision.',
      tags: ['93% MODEL ACCURACY REACHED'],
      github: 'https://github.com/sayid-alt/skin-type-recognition-deep-learning-model',
    },
    icon: 'AcademicCapIcon',
    accent: '#f66868',
  },
];

type TimelineItem = {
  period: string;
  provider: string;
  org: string;
  path: string;
  highlights: string[];
  tags: string[];
  icon: string;
  accent: string;
  capstone?: {
    title: string;
    desc: string;
    tags: string[];
  };
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
      {/* Left Card */}
      <div className="grid md:grid-cols-3 gap-6">
        <div>
          <div className="mb-5">
            <p
              className={`text-xs font-semibold uppercase tracking-widest text-[var(--hover-color)]`}
              style={
                {
                  '--hover-color': item.accent,
                } as React.CSSProperties
              }
            >
              PERIOD
            </p>
            <p className="text-sm font-bold text-[#E2E8F0]">{item.period}</p>
          </div>
          <div>
            <p
              className={`text-xs font-semibold uppercase tracking-widest text-[var(--hover-color)]`}
              style={
                {
                  '--hover-color': item.accent,
                } as React.CSSProperties
              }
            >
              PROVIDER
            </p>
            <p className="text-sm font-bold text-[#E2E8F0]">{item.provider}</p>
          </div>
          {/* <AppImage className='row-span-2' src="/images/bangkit.png" alt="Bangkit" width={100} height={300} /> */}
        </div>

        {/* Right Card */}
        <div className="md:col-span-2">
          {/* Top Card */}
          <div className="grid gap-6 group glass-card rounded-2xl p-6 relative`">
            <div className="grid md:grid-cols-2 justify-around">
              <div className="flex items-start gap-4">
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
                <div className="grid grid-rows-2 gap-1">
                  <h2
                    className={`text-2xl font-bold text-[var(--hover-color)] leading-tight`}
                    style={
                      {
                        '--hover-color': item.accent,
                      } as React.CSSProperties
                    }
                  >
                    {item.org}
                  </h2>
                  <p className="text-sm font-bold">{item.path}</p>
                </div>
              </div>
              <div className="flex justify-end items-start">
                <a
                  className={`inline-flex items-center gap-2 bg-[#ffffff] text-[#070B14] px-8 py-1.5 cursor-pointer rounded-full font-bold text-sm hover:bg-[var(--hover-color)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_var(--hover-shadow)]`}
                  href={item.capstone?.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  // Pass the color as a CSS variable
                  style={
                    {
                      '--hover-color': item.accent,
                      '--hover-shadow': `${item.accent}4D`,
                    } as React.CSSProperties
                  }
                >
                  <Icon name="CodeBracketIcon" size={24} className="text-[#070B14]" />
                  <span className="text-[#070B14]">Github Repository</span>
                </a>
              </div>
            </div>

            {/* Bottom Card*/}
            <div className="grid md:grid-cols-2 gap-2">
              {/* Learning Curriculum */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Icon
                    name="AcademicCapIcon"
                    size={16}
                    className="text-[#22D3EE]"
                    style={{ color: item.accent }}
                  />
                  <h3
                    className={`text-xs font-semibold uppercase tracking-widest text-[var(--hover-color)]`}
                    style={
                      {
                        '--hover-color': item.accent,
                      } as React.CSSProperties
                    }
                  >
                    LEARNING CURRICULUM
                  </h3>
                </div>
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
              </div>

              {/* Capstone Project */}
              <div className="group glass-card rounded-2xl p-4 hover:bg-white/5 transition-all duration-500 hover:-translate-y-1 relative">
                <div className="flex items-center gap-2 mb-3">
                  <Icon
                    name="AcademicCapIcon"
                    size={16}
                    className="text-[#22D3EE]"
                    style={{ color: item.accent }}
                  />
                  <h3
                    className={`text-xs font-semibold uppercase tracking-widest text-[var(--hover-color)]`}
                    style={
                      {
                        '--hover-color': item.accent,
                      } as React.CSSProperties
                    }
                  >
                    CAPSTONE PROJECT
                  </h3>
                </div>
                <h3 className="text-xs font-semibold uppercase tracking-widest mb-1">
                  {item.capstone?.title}
                </h3>
                <p className="text-sm text-[#64748B] leading-relaxed mb-4">{item.capstone?.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {item.capstone?.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-medium px-4 py-1 rounded-full uppercase tracking-wider"
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
              </div>
            </div>
          </div>
        </div>
      </div>
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

  return (
    <section id="bootcamps" className="py-24 relative" aria-label="Experience and Education">
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
            <div className="w-6 h-px bg-[#fa8b8bff]" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#fa8b8bff]">
              Bootcamps
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-[#E2E8F0] leading-tight">
            Specialized Intensive
            <br />
            <span
              className="text-transparent"
              style={{
                backgroundImage: 'linear-gradient(135deg, #fc6464ff 0%, #C4B5FD 60%, #22D3EE 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
              }}
            >
              Bootcamp Programs
            </span>
          </h2>
        </div>

        {/* Two columns */}
        <div>
          {/* Education column */}
          <div>
            <div className="space-y-4">
              {bootcamps.map((item, i) => (
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
