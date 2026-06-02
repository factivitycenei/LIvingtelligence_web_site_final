/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const CONTENT = {
  title: "Signal Readout Inicial",
  subtitle: "Una primera lectura estructurada para ver qué está cambiando con la IA antes de que se vuelva invisible.",
  main_text: [
    "Cuando una organización empieza a usar IA, no solo incorpora una herramienta. También empiezan a moverse formas de decidir, revisar, confiar, aprender, delegar y asumir responsabilidad.",
    "El Signal Readout Inicial ayuda a convertir señales dispersas en una lectura ejecutiva comprensible. Su propósito es observar fenómenos humano-IA en el trabajo real y abrir una conversación mejor informada sobre qué preservar, qué corregir y qué cultivar.",
    "No mide productividad individual. No audita técnicamente sistemas de IA. No busca señalar culpables. Busca hacer visibles patrones emergentes para que la organización pueda decidir con más criterio."
  ],
  sections: [
    {
      heading: "Qué observa",
      items: [
        "Cómo se está usando IA en tareas reales.",
        "Dónde aparece ayuda, dependencia o desplazamiento de criterio.",
        "Qué prácticas de revisión y verificación existen.",
        "Qué tan clara está la responsabilidad humana.",
        "Qué señales pueden indicar erosión o fortalecimiento de capacidades.",
        "Qué fenómenos conviene seguir observando."
      ]
    },
    {
      heading: "Qué entrega",
      items: [
        "Lectura ejecutiva inicial.",
        "Señales y patrones relevantes.",
        "Fenómenos plausibles detectados.",
        "Riesgos y oportunidades de aprendizaje.",
        "Conversación de devolución.",
        "Recomendación de siguientes pasos."
      ]
    }
  ],
  meta: [
    { label: "Para quién es", content: "Para organizaciones que ya usan IA en trabajo real y quieren entender mejor qué está cambiando bajo la superficie de la adopción tecnológica." },
    { label: "Cuándo conviene hacerlo", content: "Cuando la IA ya está siendo usada para redactar, sintetizar, analizar, priorizar, decidir, revisar, atender clientes, producir documentos o acelerar flujos de trabajo, pero todavía no existe una lectura clara de sus efectos humanos y organizacionales." }
  ],
  cta: "Solicitar Signal Readout Inicial",
  cta_sub: "Primera respuesta en menos de 48 horas.",
  privacy: "Usaremos tus datos y respuestas únicamente para evaluar la solicitud, preparar la conversación y dar seguimiento al proceso iniciado por ti. No vendemos tus datos personales."
};

export default function SignalReadout() {
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
          ← Volver al sitio
        </Link>
      </nav>

      <main className="pt-40 pb-24 px-8 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto">
          
          <header className="mb-24">
            <motion.div {...fadeIn}>
              <span className="header-label">Livingtelligence / Servicio</span>
              <h1 className="heading-primary">{CONTENT.title}</h1>
              <p className="text-xl md:text-2xl leading-relaxed text-living-text-muted font-normal max-w-3xl tracking-tight">
                {CONTENT.subtitle}
              </p>
            </motion.div>
          </header>

          <div className="space-y-32">
            
            {/* Main Text */}
            <motion.section {...fadeIn} className="space-y-8">
              <div className="section-divider" />
              {CONTENT.main_text.map((text, i) => (
                <p key={i} className={`text-xl md:text-2xl leading-relaxed ${i === 2 ? 'text-living-text-muted italic' : 'text-living-text-main'}`}>
                  {text}
                </p>
              ))}
            </motion.section>

            {/* Grid Sections */}
            <div className="grid md:grid-cols-2 gap-16 md:gap-24">
              {CONTENT.sections.map((section, i) => (
                <motion.section key={i} {...fadeIn}>
                  <h2 className="heading-secondary mb-10">{section.heading}</h2>
                  <ul className="space-y-4">
                    {section.items.map((item, j) => (
                      <li key={j} className="flex gap-3 text-lg text-living-text-main">
                        <span className="text-living-green font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.section>
              ))}
            </div>

            {/* Meta Info */}
            <div className="space-y-20">
              {CONTENT.meta.map((item, i) => (
                <motion.section key={i} {...fadeIn}>
                  <div className="section-divider" />
                  <div className="grid md:grid-cols-12 gap-8">
                    <div className="md:col-span-4">
                      <h2 className="heading-secondary">{item.label}</h2>
                    </div>
                    <div className="md:col-span-8">
                      <p className="text-xl leading-relaxed text-living-text-main">
                        {item.content}
                      </p>
                    </div>
                  </div>
                </motion.section>
              ))}
            </div>

            {/* CTA Section */}
            <motion.section {...fadeIn} className="bg-neutral-900 text-white p-12 md:p-20 text-center space-y-12">
               <div className="space-y-4">
                  <h2 className="text-3xl md:text-4xl font-medium tracking-tight">
                    {CONTENT.cta}
                  </h2>
                  <p className="text-xs font-bold tracking-[0.3em] uppercase text-living-green">
                    {CONTENT.cta_sub}
                  </p>
               </div>
               
               <a 
                 href="mailto:aflores@livingtelligence.com?subject=Solicitud%20Signal%20Readout%20Inicial&body=Hola%2C%20quisiera%20solicitar%20un%20Signal%20Readout%20Inicial%20para%20mi%20organizaci%C3%B3n.%0A%0ANombre%3A%0AOrganizaci%C3%B3n%3A%0ARol%3A%0ABreve%20contexto%3A"
                 className="inline-block bg-living-green text-white px-12 py-6 text-sm font-bold tracking-[0.2em] uppercase hover:bg-living-green/90 transition-all hover:scale-[1.02]"
               >
                 Solicitar Ahora
               </a>

               <div className="max-w-lg mx-auto pt-8 border-t border-white/10">
                  <p className="text-[10px] uppercase tracking-widest text-white/40 leading-relaxed">
                    {CONTENT.privacy}
                  </p>
               </div>
            </motion.section>

          </div>

          {/* Footer */}
          <footer className="mt-48 pt-20 border-t border-living-border">
            <motion.div {...fadeIn}>
              <p className="text-xs font-bold tracking-widest uppercase text-living-text-muted opacity-50">
                Livingtelligence / Architectural Observation / 2026
              </p>
            </motion.div>
          </footer>

        </div>
      </main>
    </div>
  );
}
