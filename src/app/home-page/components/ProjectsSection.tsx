"use client";

import React, { useEffect, useRef } from "react";
import AppImage from "@/components/ui/AppImage";

const projects = [
  {
    id: 1,
    title: "Predictive Churn Diagnostics & Strategic Action Plan",
    description:
      "Analyzed drivers, geographic patterns, and key correlations of customer churn at JB Telco. Developed high-impact retention strategies that minimize future attrition using ML predictive models.",
    tags: [
      "Data Analytics",
      "Machine Learning",
      "Python",
      "Tableau",
      "Data Visualization",
    ],
    image:
      "https://www.datascienceportfol.io/static/profile_pics/pr1_A3469C2E181CE359D2B9.png",
    imageAlt:
      "Dashboard showing customer churn analysis with geographic heatmap and predictive model results for JB Telco",
    accent: "#22D3EE",
    outcome: "Retention strategy for telecom churn",
  },
  {
    id: 2,
    title: "Maximizing ROI through Targeted Discounts & Segmented Actions",
    description:
      "Determined the most effective actions for specific customer segments using tailored discount strategies and sales predictive modeling to estimate discount impact on revenue.",
    tags: [
      "Customer Segmentation",
      "Python",
      "Looker Studio",
      "Data Visualization",
    ],
    image:
      "https://www.datascienceportfol.io/static/profile_pics/pr2_50B456F918466C774FE4.png",
    imageAlt:
      "ROI optimization dashboard with customer segments and discount impact visualization in Looker Studio",
    accent: "#F59E0B",
    outcome: "Revenue optimization via segmentation",
  },
  {
    id: 3,
    title: "The Intelligent Network: ML to Unlock Alumni Engagement",
    description:
      "Optimized IYF's outreach using K-means clustering to segment alumni into 12 behavioral groups. Leveraged Gemini API for text extraction and Gemma embeddings for feature similarity.",
    tags: [
      "NLP",
      "K-Means Clustering",
      "API Integration",
      "Feature Engineering",
      "Python",
    ],
    image:
      "https://www.datascienceportfol.io/static/profile_pics/pr3_BFD9DA238DDA8337DAE8.png",
    imageAlt:
      "Alumni cluster visualization showing 12 behavioral segments with MBTI and interest-based groupings",
    accent: "#A78BFA",
    outcome: "12 behavioral alumni clusters",
  },
  {
    id: 4,
    title: "USD-IDR Exchange Rate Prediction: Hybrid CNN-GRU & CNN-LSTM",
    description:
      "Forecasted IDR/USD exchange rate by designing and comparing two hybrid deep learning models. Used 23 years of Yahoo Finance data, reducing MSE from 0.0019 to 0.00034 — an 82.11% improvement.",
    tags: [
      "Deep Learning",
      "CNN",
      "LSTM",
      "GRU",
      "TensorFlow",
      "Keras-Tuner",
      "Python",
    ],
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80",
    imageAlt:
      "Time series chart comparing CNN-LSTM and CNN-GRU model predictions for USD to Indonesian Rupiah exchange rate",
    accent: "#34D399",
    outcome: "82.11% MSE reduction · Journal Research",
  },
];

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    cardRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-24 relative"
      aria-label="Projects"
    >
      {/* Section ambient */}
      <div
        className="absolute top-0 right-0 w-96 h-96 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(34,211,238,0.04) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div
          ref={(el) => {
            cardRefs.current[4] = el;
          }}
          className="reveal mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-px bg-[#22D3EE]" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#22D3EE]">
              Selected Work
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-[#E2E8F0] leading-tight">
            Projects that
            <br />
            <span
              className="text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #22D3EE 0%, #67E8F9 60%, #F59E0B 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
              }}
            >
              ship results
            </span>
          </h2>
        </div>

        {/* Projects grid — 2 col on md+ */}
        {/* Bento Audit:
             Row 1: [Project 1 col-span-1] + [Project 2 col-span-1] = 2/2 ✓
             Row 2: [Project 3 col-span-1] + [Project 4 col-span-1] = 2/2 ✓
          */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <div
              key={project.id}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              className={`reveal reveal-delay-${(i % 3) + 1} group glass-card rounded-2xl overflow-hidden hover:border-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_48px_rgba(0,0,0,0.4)] cursor-default`}
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <AppImage
                  src={project.image}
                  alt={project.imageAlt}
                  width={800}
                  height={400}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#070B14] via-[#070B14]/30 to-transparent" />

                {/* Outcome badge */}
                <div className="absolute top-4 right-4 glass-card px-3 py-1 rounded-full">
                  <span className="text-[10px] font-semibold text-[#94A3B8] uppercase tracking-wider">
                    {project.outcome}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Cyan line reveal */}
                <div
                  className="line-reveal mb-4"
                  style={{ background: project.accent }}
                />

                <h3 className="font-display text-lg font-semibold text-[#E2E8F0] mb-3 leading-snug group-hover:text-white transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-sm text-[#64748B] leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="tag-pill"
                      style={{
                        background: `${project.accent}14`,
                        borderColor: `${project.accent}30`,
                        color: project.accent,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="tag-pill">+{project.tags.length - 4}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
