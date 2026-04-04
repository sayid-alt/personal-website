'use client';

import React, { useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';

const skills = [
  { name: 'Python', category: 'Language' },
  { name: 'SQL', category: 'Language' },
  { name: 'TensorFlow', category: 'ML Framework' },
  { name: 'Keras', category: 'ML Framework' },
  { name: 'scikit-learn', category: 'ML Library' },
  { name: 'Tableau', category: 'Visualization' },
  { name: 'Looker Studio', category: 'Visualization' },
  { name: 'Google Sheets', category: 'Productivity' },
  { name: 'Predictive Modeling', category: 'Technique' },
  { name: 'Classification', category: 'Technique' },
  { name: 'Clustering', category: 'Technique' },
  { name: 'NLP', category: 'Technique' },
  { name: 'Feature Engineering', category: 'Technique' },
  { name: 'Deep Learning', category: 'Technique' },
];

const achievements = [
  { value: '82.11%', label: 'MSE Reduction in exchange rate forecasting model' },
  { value: '3.68', label: 'GPA from University of Muhammadiyah Prof. DR. Hamka' },
  { value: '12', label: 'Distinct behavioral clusters in alumni segmentation project' },
  { value: '23 yrs', label: 'Historical data used in deep learning time-series model' },
];

export default function AboutSkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const revealRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    revealRefs.current.forEach((el) => { if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 relative"
      aria-label="About and Skills"
    >
      {/* Divider */}
      <div className="section-divider mb-24" />

      {/* Ambient */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-80 h-80 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(245,158,11,0.06) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div
          ref={(el) => { revealRefs.current[0] = el; }}
          className="reveal mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-px bg-[#F59E0B]" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#F59E0B]">
              About
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-[#E2E8F0] leading-tight">
            Bridging data
            <br />
            <span
              className="text-transparent"
              style={{
                backgroundImage: 'linear-gradient(135deg, #F59E0B 0%, #FCD34D 60%, #22D3EE 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
              }}
            >
              and decisions
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Bio + Achievements */}
          <div
            ref={(el) => { revealRefs.current[1] = el; }}
            className="reveal reveal-delay-1"
          >
            <p className="text-[#94A3B8] text-base leading-relaxed mb-8">
              As a highly motivated Informatics Engineering fresh graduate from the University of Muhammadiyah Prof. DR. Hamka, I&apos;ve developed strong capabilities in data analytics, machine learning, and data visualization through academic research and organizational experience.
            </p>
            <p className="text-[#94A3B8] text-base leading-relaxed mb-10">
              I combine technical rigor—developing high-accuracy exchange rate forecasting models—with business acumen in churn reduction and stakeholder reporting. I&apos;m adept at bridging the gap between raw data and executive decision-making through structured reporting and collaborative project management.
            </p>

            {/* Achievement stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((ach, i) => (
                <div
                  key={ach.label}
                  className="glass-card rounded-2xl p-5 hover:bg-white/5 transition-all duration-300 hover:-translate-y-1"
                >
                  <p
                    className="font-display text-2xl font-semibold mb-1"
                    style={{
                      backgroundImage: 'linear-gradient(135deg, #22D3EE, #67E8F9)',
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                      color: 'transparent',
                    }}
                  >
                    {ach.value}
                  </p>
                  <p className="text-xs text-[#475569] leading-snug">{ach.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Skills */}
          <div
            ref={(el) => { revealRefs.current[2] = el; }}
            className="reveal reveal-delay-2"
          >
            <div className="glass-card rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Icon name="CpuChipIcon" size={18} className="text-[#22D3EE]" />
                <h3 className="font-semibold text-[#E2E8F0] text-sm uppercase tracking-wider">
                  Technical Stack
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {skills.map((skill, i) => (
                  <span
                    key={skill.name}
                    className="skill-pill glass-card px-3 py-1.5 rounded-full text-sm font-medium text-[#94A3B8] border border-white/6 cursor-default"
                    style={{ transitionDelay: `${i * 30}ms` }}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>

              {/* Decorative data visualization bars */}
              <div className="mt-8 pt-6 border-t border-white/5">
                <p className="text-xs text-[#475569] uppercase tracking-wider mb-4 font-semibold">
                  Core Competencies
                </p>
                {[
                  { label: 'Machine Learning', pct: 90 },
                  { label: 'Data Visualization', pct: 85 },
                  { label: 'Python / SQL', pct: 88 },
                  { label: 'Deep Learning', pct: 78 },
                ].map((bar) => (
                  <div key={bar.label} className="mb-3">
                    <div className="flex justify-between mb-1">
                      <span className="text-xs text-[#64748B]">{bar.label}</span>
                      <span className="text-xs text-[#22D3EE] font-medium">{bar.pct}%</span>
                    </div>
                    <div className="h-1 rounded-full bg-white/5 overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${bar.pct}%`,
                          background: 'linear-gradient(to right, #22D3EE, #67E8F9)',
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}