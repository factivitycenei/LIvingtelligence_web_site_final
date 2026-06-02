/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';
import { translations } from '../translations';

export default function About() {
  const [lang, setLang] = useState<'es' | 'en'>('es');
  const t = translations[lang];

  const fadeIn = {
    initial: { opacity: 0, y: 15 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.21, 1, 0.44, 1] }
  };

  return (
    <div className="min-h-screen bg-living-bg scroll-smooth text-zinc-900 transition-colors duration-500">
      {/* Simple Header with Back Button and Language Switcher */}
      <nav className="fixed top-0 w-full z-50 px-8 py-6 flex justify-between items-center bg-living-bg/80 backdrop-blur-md border-b border-living-border">
        <Link to="/" className="text-[11px] font-bold tracking-[0.25em] uppercase text-living-green hover:underline">
          {t.about.back}
        </Link>
        <div className="flex items-center gap-6">
          <button 
            onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
            className="text-[11px] font-bold tracking-[0.2em] px-3 py-1 border border-zinc-200 hover:bg-zinc-50 transition-colors uppercase"
          >
            {lang === 'es' ? 'EN' : 'ES'}
          </button>
        </div>
      </nav>

      <main className="pt-40 pb-24 px-8 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto">
          
          {/* Top Header */}
          <header className="mb-24">
            <motion.div {...fadeIn}>
              <span className="header-label">{t.about.eyebrow}</span>
              <h1 className="heading-primary !mb-8">{t.about.title}</h1>
              <p className="text-2xl md:text-3xl leading-snug text-living-text-muted font-medium tracking-tight">
                {t.about.subtitle}
              </p>
            </motion.div>
          </header>

          {/* Editorial Content Grid */}
          <div className="space-y-24">
            {t.about.sections.map((section, i) => (
              <motion.section key={i} {...fadeIn}>
                <div className="section-divider" />
                <div className="grid md:grid-cols-12 gap-8 items-start">
                  <div className="md:col-span-4">
                    <h2 className="heading-secondary text-sm font-bold tracking-[0.2em] text-living-green uppercase">
                      {section.heading}
                    </h2>
                  </div>
                  <div className="md:col-span-8">
                    <p className="body-editorial !max-w-none !text-zinc-700 leading-relaxed text-lg">
                      {section.content}
                    </p>
                  </div>
                </div>
              </motion.section>
            ))}
          </div>

          {/* Footer Card */}
          <motion.div 
            {...fadeIn} 
            className="mt-32 p-12 bg-neutral-50 border border-living-border text-center flex flex-col items-center justify-center space-y-6"
          >
            <Logo isDark={false} />
            <p className="text-sm font-light text-zinc-500 italic max-w-xl">
              {lang === 'es' 
                ? "Preservando la soberanía intelectual y el criterio institucional en la era de la inteligencia artificial." 
                : "Preserving intellectual sovereignty and institutional judgment in the age of artificial intelligence."}
            </p>
            <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-living-text-muted opacity-60">
              {t.about.footer}
            </p>
          </motion.div>

        </div>
      </main>
    </div>
  );
}
