/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

interface PhenomenonProps {
  title: string;
  image: string;
  one_liner: string;
  what_happens: string[];
  description: {
    text1: string;
    text2: string;
  };
  fragilities: string[];
  dependency_note: string;
  cultivate: {
    intro: string;
    items: string[];
    footer: string;
  };
  scene: {
    context: string;
    action: string;
    result: string;
  };
  closing: string;
}

export default function PhenomenonLayout({ phenomenon }: { phenomenon: PhenomenonProps }) {
  const fadeIn = {
    initial: { opacity: 0, y: 15 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.21, 1, 0.44, 1] }
  };

  return (
    <div className="min-h-screen bg-living-bg scroll-smooth">
      <nav className="fixed top-0 w-full z-50 px-8 py-6 flex justify-between items-center bg-living-bg/80 backdrop-blur-md border-b border-living-border">
        <Link to="/" className="text-[11px] font-bold tracking-[0.25em] uppercase text-living-green hover:underline">
          ← Volver a la Biblioteca
        </Link>
      </nav>

      <main className="pt-40 pb-24 px-8 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto">
          
          <header className="mb-20">
            <motion.div {...fadeIn}>
              <span className="header-label">Livingtelligence / Fenómeno</span>
              <h1 className="heading-primary !mb-6 !text-5xl md:!text-6xl">{phenomenon.title}</h1>
              <div className="w-full aspect-video bg-neutral-100 mb-12 flex items-center justify-center overflow-hidden border border-living-border">
                <img 
                  src={phenomenon.image} 
                  alt={phenomenon.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-2xl md:text-3xl leading-tight text-living-green font-medium italic tracking-tight">
                {phenomenon.one_liner}
              </p>
            </motion.div>
          </header>

          <div className="grid md:grid-cols-12 gap-16 md:gap-24">
            {/* Left Column: What happens & Descriptions */}
            <div className="md:col-span-7 space-y-24">
              
              <motion.section {...fadeIn}>
                <h2 className="heading-secondary mb-8">Qué empieza a pasar</h2>
                <ul className="space-y-4">
                  {phenomenon.what_happens.map((item, i) => (
                    <li key={i} className="flex gap-4 group">
                      <span className="text-living-green/40 font-bold group-hover:text-living-green transition-colors">•</span>
                      <p className="text-lg text-living-text-main leading-relaxed">{item}</p>
                    </li>
                  ))}
                </ul>
              </motion.section>

              <motion.section {...fadeIn}>
                <h2 className="heading-secondary mb-8">Que describe este fenómeno</h2>
                <div className="space-y-8">
                  <p className="text-xl md:text-2xl leading-relaxed text-living-text-main font-light">
                    {phenomenon.description.text1}
                  </p>
                  <p className="text-lg leading-relaxed text-living-text-muted">
                    {phenomenon.description.text2}
                  </p>
                </div>
              </motion.section>

              <motion.section {...fadeIn} className="bg-neutral-50 p-12 border border-living-border">
                <h2 className="header-label mb-6">Escena de reconocimiento</h2>
                <div className="space-y-4 text-living-text-main">
                  <p className="text-lg">{phenomenon.scene.context}</p>
                  <p className="text-lg italic text-living-text-muted">{phenomenon.scene.action}</p>
                  <p className="text-xl font-medium pt-4">{phenomenon.scene.result}</p>
                </div>
              </motion.section>
            </div>

            {/* Right Column: Fragility & Cultivation */}
            <div className="md:col-span-5 space-y-20">
              
              <motion.section {...fadeIn} className="bg-neutral-900 text-white p-10">
                <h2 className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/40 mb-8">Qué vuelve frágil</h2>
                <ul className="space-y-6">
                  {phenomenon.fragilities.map((item, i) => (
                    <li key={i} className="flex items-center gap-4 border-b border-white/10 pb-4 last:border-0">
                      <div className="w-1.5 h-1.5 rounded-full bg-living-green" />
                      <span className="text-sm font-bold uppercase tracking-widest">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-white/60 mt-8 leading-relaxed italic">
                  {phenomenon.dependency_note}
                </p>
              </motion.section>

              <motion.section {...fadeIn}>
                <h2 className="heading-secondary mb-6">Que conviene cultivar o corregir</h2>
                <p className="text-sm text-living-text-muted mb-6">{phenomenon.cultivate.intro}</p>
                <ul className="space-y-4 mb-8">
                  {phenomenon.cultivate.items.map((item, i) => (
                    <li key={i} className="flex gap-3 text-base text-living-text-main">
                      <span className="w-1.5 h-1.5 rounded-full bg-living-green mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm border-t border-living-border pt-6 text-living-green font-medium">
                  {phenomenon.cultivate.footer}
                </p>
              </motion.section>

              <motion.div {...fadeIn} className="pt-12 border-t-2 border-living-green">
                <p className="text-2xl font-medium tracking-tight text-living-text-main leading-snug">
                  {phenomenon.closing}
                </p>
              </motion.div>
            </div>
          </div>

          {/* Page Footer */}
          <footer className="mt-48 pt-20 border-t border-living-border flex justify-between items-end">
             <div className="space-y-2">
                <p className="text-xl font-bold">Livingtelligence</p>
                <p className="text-[10px] text-living-text-muted uppercase tracking-[0.2em]">Bridge Protocol Document _ 2026</p>
             </div>
             <div className="text-right">
                <p className="text-[10px] text-living-text-muted uppercase tracking-[0.2em]">Architecture of Observation & Reading</p>
                <p className="text-[10px] text-living-text-muted uppercase tracking-[0.2em]">© Livingtelligence Intelligence Assets</p>
             </div>
          </footer>
        </div>
      </main>
    </div>
  );
}
