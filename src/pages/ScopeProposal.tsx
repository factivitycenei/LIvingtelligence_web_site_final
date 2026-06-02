/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const DOCUMENT = {
  eyebrow: "Livingtelligence / Proposal / modular_v1",
  title: "Propuesta de alcance Livingtelligence",
  subtitle: "Una capa de inteligencia modular para observar, nombrar y corregir fenómenos humano-IA en el trabajo real.",
  intro: {
    heading: "Contexto y Sentido",
    body: "La inteligencia artificial ya no solo responde preguntas. Empieza a escribir, sintetizar, priorizar, recomendar y ejecutar tareas dentro de los sistemas donde la organización trabaja. El cambio no siempre aparece como crisis. Muchas veces aparece como ayuda conveniente, velocidad, fluidez o reducción de fricción.",
    question: "¿Cómo puede una organización obtener más valor de la IA sin perder de vista dónde viven el juicio, la deliberación y la capacidad humana de decidir?",
    capacities: [
      "Juicio profesional",
      "Criterio de revisión",
      "Agencia y creatividad",
      "Responsabilidad ética",
      "Claridad sobre quién piensa y decide"
    ]
  },
  value: {
    heading: "El Valor Agregado",
    subheading: "Qué instala Livingtelligence",
    body: "Livingtelligence no es una aplicación cerrada ni una capacitación aislada. Es una capa institucional para observar, nombrar, dar seguimiento y corregir fenómenos humano-IA en el trabajo real. El cliente no recibe solo un diagnóstico: recibe lenguaje, método, activos, stewards y memoria para decidir qué preservar, qué corregir y qué cultivar.",
    includes: [
      "Signal Readout Inicial",
      "Canon fenomenológico aplicado",
      "Core team y stewards",
      "Jornadas de fluencia deliberativa",
      "Custodian y seguimiento mensual"
    ]
  },
  modules: [
    {
      id: "01",
      title: "Módulo 1: Signal Readout Inicial",
      desc: "El primer módulo es la puerta de entrada. Levanta señales reales de uso, interpreta patrones iniciales y traduce la adopción de IA en una lectura ejecutiva comprensible. Sirve para reconocer fenómenos plausibles antes de que se vuelvan parte invisible de la operación.",
      bullets: [
        "Alineación breve de alcance y contexto",
        "Cuestionario estructurado con usuarios y stewards",
        "Lectura fenomenológica y entregable de devolución",
        "Conversación ejecutiva de interpretación"
      ],
      value: "Valor: convierte una adopción difusa de IA en una primera lectura observable para decidir con más claridad."
    },
    {
      id: "02",
      title: "Módulo 2: Instalación de capacidad",
      desc: "Convierte la lectura inicial en capacidad humana instalada. La intención es que Livingtelligence no quede como una interpretación externa, sino como una práctica interna de observación, discernimiento y conversación. Aquí se forma un core, se identifican stewards y se despliegan jornadas de fluencia deliberativa con IA.",
      bullets: [
        "Formación de core team y entrenamiento de stewards",
        "Prácticas de revisión, delegación y trazabilidad",
        "Sesiones sobre juicio, dependencia y agencia",
        "Tarjetas visuales, storyboards y activos de conciencia"
      ],
      value: "Valor: convierte la lectura inicial en lenguaje compartido, prácticas de revisión y capacidad humana instalada."
    },
    {
      id: "03",
      title: "Módulo 3: Custodian y continuidad mensual",
      desc: "Instala una capa ligera de observación, memoria y seguimiento sobre los sistemas actuales (Google Workspace, Asana). Custodian integra el registro para producir seguimiento, readouts periódicos y memoria fenomenológica.",
      bullets: [
        "Instancia operativa ligera de Custodian",
        "Skills, herramientas y procedimientos controlados",
        "Readout mensual y cubo de trayectorias",
        "Salida a tareas, activos y bitácora de acciones"
      ],
      value: "Valor tangible: los sistemas documentan, los agentes ejecutan, Custodian interpreta y los stewards actúan."
    }
  ],
  changes: {
    heading: "Qué cambia para la organización",
    body: "Livingtelligence ayuda a que la organización deje de mirar la IA solo como herramienta y empiece a observar cómo está cambiando su propia inteligencia. La meta no es usar más tecnología por inercia; es conservar y desarrollar la capacidad institucional mientras la tecnología se vuelve más poderosa.",
    list: [
      "Observa cambios en juicio, agencia y confianza",
      "Distingue ayuda, dependencia y deriva",
      "Fortalece revisión, criterio y trazabilidad",
      "Protege capacidades de autonomía y aprendizaje",
      "Convierte señales en decisiones y prácticas corregibles"
    ]
  },
  not_is: {
    heading: "Qué no es",
    items: [
      "No es una app cerrada.",
      "No es auditoría técnica de sistemas de IA.",
      "No es assessment genérico de madurez digital.",
      "No es capacitación aislada en herramientas.",
      "No es automatización sin stewardship humano."
    ]
  },
  sequence: {
    heading: "Secuencia sugerida",
    steps: [
      "Triage de alcance y readiness",
      "Signal Readout Inicial y devolución",
      "Instalación de capacidad (Core & Stewards)",
      "Continuidad con Custodian y Memoria"
    ]
  },
  levels: [
    { id: "01", name: "Entrada ligera", desc: "Signal Readout Inicial y devolución ejecutiva." },
    { id: "02", name: "Instalación", desc: "Signal Readout, core, stewards, jornadas y activos." },
    { id: "03", name: "Continuidad", desc: "Custodian, readouts mensuales, trayectorias y canon vivo." }
  ],
  cierre: {
    heading: "Instalar capacidad, no solo adoptar tecnología",
    body: "Livingtelligence no busca que una organización use más IA por inercia. Busca instalar una inteligencia institucional para observar cómo está cambiando su propia inteligencia, decidir con más criterio y proteger la dignidad profesional en el trabajo real.",
    footer: "Una capa institucional para observar, nombrar, dar seguimiento y corregir fenómenos humano-IA en el trabajo real.",
    cta: "Solicitar una conversación de alcance"
  }
};

export default function ScopeProposal() {
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
          {/* Header */}
          <header className="mb-32">
            <motion.div {...fadeIn}>
              <span className="header-label">{DOCUMENT.eyebrow}</span>
              <h1 className="heading-primary !mb-8">{DOCUMENT.title}</h1>
              <p className="text-2xl md:text-3xl leading-snug text-living-text-muted font-medium max-w-4xl tracking-tight">
                {DOCUMENT.subtitle}
              </p>
            </motion.div>
          </header>

          {/* Context Section */}
          <section className="mb-32">
            <motion.div {...fadeIn}>
              <div className="section-divider" />
              <div className="grid lg:grid-cols-12 gap-16">
                <div className="lg:col-span-12">
                   <h2 className="heading-secondary">{DOCUMENT.intro.heading}</h2>
                   <p className="body-editorial !max-w-none mb-12">{DOCUMENT.intro.body}</p>
                </div>
                <div className="lg:col-span-7">
                  <div className="p-10 border-l-4 border-living-green bg-neutral-50 text-2xl leading-relaxed italic font-medium">
                    "{DOCUMENT.intro.question}"
                  </div>
                </div>
                <div className="lg:col-span-5">
                   <p className="text-xs font-bold uppercase tracking-[0.2em] mb-6 text-living-text-muted">Capacidades en desplazamiento</p>
                   <ul className="space-y-4">
                     {DOCUMENT.intro.capacities.map((item, i) => (
                       <li key={i} className="flex gap-4 items-center text-sm font-medium">
                         <span className="w-1.5 h-1.5 rounded-full bg-living-green shrink-0" />
                         {item}
                       </li>
                     ))}
                   </ul>
                </div>
              </div>
            </motion.div>
          </section>

          {/* Value Added Section */}
          <section className="mb-32">
            <motion.div {...fadeIn}>
              <div className="section-divider" />
              <div className="grid lg:grid-cols-12 gap-16">
                <div className="lg:col-span-4">
                  <h2 className="heading-secondary">{DOCUMENT.value.heading}</h2>
                  <p className="text-lg font-medium text-living-green mb-4">{DOCUMENT.value.subheading}</p>
                </div>
                <div className="lg:col-span-8">
                  <p className="body-editorial !max-w-none mb-12">{DOCUMENT.value.body}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {DOCUMENT.value.includes.map((item, i) => (
                      <div key={i} className="p-6 border border-living-border bg-white text-sm font-medium text-living-text-muted flex items-center gap-4">
                        <span className="text-living-green font-bold">/</span>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </section>

          {/* Architecture Placeholder Section */}
          <section className="mb-32">
            <motion.div {...fadeIn}>
              <div className="section-divider" />
              <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                <div>
                  <span className="header-label">Architecture Map</span>
                  <h3 className="text-2xl font-medium tracking-tight">Arquitectura General de Co-Inteligencia</h3>
                </div>
                <a 
                  href="https://drive.google.com/file/d/1F3xQXAGMOStzZbeEu1gj5fg18Opt1Oy9/view?usp=sharing" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[10px] font-bold uppercase tracking-[0.2em] px-6 py-2 border border-zinc-200 hover:bg-zinc-50"
                >
                  Ampliar diagrama
                </a>
              </div>
              <div className="border border-living-border overflow-hidden bg-white p-4 md:p-8 flex justify-center items-center">
                <img 
                  src="https://lh3.googleusercontent.com/d/1F3xQXAGMOStzZbeEu1gj5fg18Opt1Oy9" 
                  alt="Livingtelligence Arquitectura Institucional" 
                  className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700 max-w-4xl"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </section>

          {/* Modules Section */}
          <section className="mb-32">
            <div className="section-divider" />
            <span className="header-label">Cómo se estructura el programa</span>
            <div className="space-y-40 mt-16">
              {DOCUMENT.modules.map((module) => (
                <motion.div key={module.id} {...fadeIn} className="grid lg:grid-cols-12 gap-16">
                  <div className="lg:col-span-1">
                    <span className="text-4xl font-light text-living-green tabular-nums opacity-50">{module.id}</span>
                  </div>
                  <div className="lg:col-span-5">
                    <h3 className="text-3xl font-medium tracking-tight mb-8">{module.title}</h3>
                    <p className="body-editorial !max-w-none">{module.desc}</p>
                    <div className="mt-12 p-6 bg-teal-50 border-l-2 border-living-green">
                      <p className="text-sm font-medium text-teal-900 leading-relaxed italic">{module.value}</p>
                    </div>

                  </div>
                  <div className="lg:col-span-6">
                    <ul className="space-y-6">
                      {module.bullets.map((bullet, i) => (
                        <li key={i} className="flex gap-4 items-start pb-6 border-b border-zinc-100 last:border-0">
                          <span className="text-living-green mt-1">
                             <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                               <path d="M1 6H11M11 6L6 1M11 6L6 11" stroke="currentColor" strokeWidth="1.5" />
                             </svg>
                          </span>
                          <span className="text-sm text-living-text-muted leading-relaxed">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {module.id === "01" && (
                    <div className="lg:col-span-12 mt-12 border border-living-border overflow-hidden bg-white p-4 md:p-8 flex justify-center items-center">
                      <img 
                        src="https://lh3.googleusercontent.com/d/1TtYfV51V_3M74qpb1k1cOTSIrhyzGKGm"
                        alt="Livingtelligence Signal Readout Inicial Diagram"
                        className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700 max-w-4xl"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </section>

          {/* Changes Section */}
          <section className="mb-32">
            <motion.div {...fadeIn}>
               <div className="section-divider" />
               <div className="grid lg:grid-cols-12 gap-16">
                 <div className="lg:col-span-4">
                   <h2 className="heading-secondary">{DOCUMENT.changes.heading}</h2>
                 </div>
                 <div className="lg:col-span-8">
                   <p className="body-editorial !max-w-none mb-12">{DOCUMENT.changes.body}</p>
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                     {DOCUMENT.changes.list.map((item, i) => (
                       <div key={i} className="flex gap-4 text-sm text-living-text-muted">
                         <span className="w-1.5 h-1.5 rounded-full bg-living-green mt-1.5 shrink-0" />
                         {item}
                       </div>
                     ))}
                   </div>
                 </div>
               </div>
            </motion.div>
          </section>

          {/* Sequencing & Not Section */}
          <div className="grid lg:grid-cols-2 gap-24 mb-32">
             <motion.section {...fadeIn}>
                <div className="section-divider" />
                <h3 className="heading-secondary">{DOCUMENT.sequence.heading}</h3>
                <div className="space-y-4">
                   {DOCUMENT.sequence.steps.map((step, i) => (
                     <div key={i} className="p-4 border border-living-border bg-white text-sm font-medium flex justify-between items-center group hover:border-living-green transition-all">
                        <span>{i + 1}. {step}</span>
                        <span className="text-living-green opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                     </div>
                   ))}
                </div>
             </motion.section>
             <motion.section {...fadeIn}>
                <div className="section-divider" />
                <h3 className="heading-secondary">{DOCUMENT.not_is.heading}</h3>
                <div className="space-y-4">
                   {DOCUMENT.not_is.items.map((item, i) => (
                     <div key={i} className="flex gap-4 text-sm text-zinc-400">
                        <span className="text-red-300 font-bold">✕</span>
                        {item}
                     </div>
                   ))}
                </div>
             </motion.section>
          </div>

          {/* Levels Section */}
          <section className="mb-32">
             <motion.div {...fadeIn}>
                <div className="section-divider" />
                <span className="header-label">Niveles de relación</span>
                <div className="grid md:grid-cols-3 gap-8 mt-12">
                   {DOCUMENT.levels.map((level) => (
                     <div key={level.id} className="p-8 border border-living-border bg-neutral-50 hover:bg-neutral-100 transition-colors">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-living-green mb-4 block">Nivel {level.id}</span>
                        <h4 className="text-xl font-medium mb-4">{level.name}</h4>
                        <p className="text-sm text-living-text-muted leading-relaxed">{level.desc}</p>
                     </div>
                   ))}
                </div>
             </motion.div>
          </section>

          {/* Cierre */}
          <motion.section {...fadeIn} className="bg-neutral-900 text-white p-12 md:p-20">
             <h2 className="text-3xl font-medium tracking-tight mb-8 leading-tight">
               {DOCUMENT.cierre.heading}
             </h2>
             <p className="text-lg text-white/70 mb-12 leading-relaxed italic max-w-3xl">
               {DOCUMENT.cierre.body}
             </p>
             <div className="p-8 border-l border-living-green mb-16">
               <p className="text-lg text-white/90 leading-relaxed font-light">
                 {DOCUMENT.cierre.footer}
               </p>
             </div>
             <div className="space-y-8">
                <a 
                  href="mailto:aflores@livingtelligence.com?subject=Explorar%20propuesta%20de%20alcance" 
                  className="inline-block bg-living-green text-white px-10 py-5 text-sm font-bold tracking-widest uppercase hover:bg-living-green/90 transition-colors"
                >
                  {DOCUMENT.cierre.cta}
                </a>
             </div>
          </motion.section>

          {/* Footer Metadata */}
          <footer className="mt-48 pt-20 border-t-2 border-living-green">
            <motion.div {...fadeIn} className="grid grid-cols-1 md:grid-cols-2 gap-12 text-[10px] uppercase tracking-[0.3em] text-living-text-muted">
               <div className="space-y-2">
                  <p className="text-base font-bold text-living-text-main normal-case tracking-normal">Livingtelligence</p>
                  <p>Bridge Protocol / modular_v1</p>
                  <p>Propuesta de Alcance y Ruta Operativa</p>
               </div>
               <div className="md:text-right space-y-2">
                  <p>© 2026 Inteligencia y Diseño Social</p>
                  <p>Propiedad Intelectual Livingtelligence</p>
               </div>
            </motion.div>
          </footer>
        </div>
      </main>
    </div>
  );
}
