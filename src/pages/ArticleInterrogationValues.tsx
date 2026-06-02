/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import imgPath from '../assets/images/interrogation_values_1779912085670.png';

const ARTICLE_ES = {
  eyebrow: "Livingtelligence / Bridge Document 04",
  title: "Interrogación de Valores",
  subtitle: "Antes de automatizarlo, ¿qué valores estamos escalando?",
  introduction: "La interrogación de valores aparece cuando una persona, equipo u organización reconoce que adoptar IA no es solamente una decisión técnica o una ganancia en eficiencia. Es una decisión profunda sobre qué valores serán preservados, debilitados, desplazados o amplificados cuando el trabajo empiece a delegarse en sistemas inteligentes.",
  question_block: {
    question: "¿Qué valores queremos que la automatización amplifique realmente?",
    body: "La pregunta central en la era de la IA no debe ser únicamente '¿qué podemos automatizar?' sino '¿qué valores estamos codificando e incrementando con este proceso?'"
  },
  sections: [
    {
      id: "starts_happening",
      heading: "Qué empieza a pasar",
      body: "Cuando se introduce este debate reflexivo, la inercia tecnológica habitual se interrumpe positivamente en varios aspectos:",
      bullets: [
        "La conversación deja de girar solo alrededor de eficiencia, velocidad o productividad.",
        "Alguien pregunta qué bienes humanos protege el proceso actual antes de convertirlo en sistema.",
        "La automatización deja de parecer neutral: empieza a verse como una amplificación de criterios, incentivos y supuestos.",
        "La organización descubre que no basta con preguntar qué puede hacer la IA, sino también qué debe preservar."
      ]
    },
    {
      id: "description",
      heading: "El momento deliberativo",
      body: "Este fenómeno no representa una resistencia pasiva o miedo a la tecnología. Muy por el contrario, es el momento exacto en el que la adopción tecnológica de la empresa deja de ser reactiva y se convierte en un proceso plenamente deliberativo.",
      callout: "La buena pregunta no frena la inteligencia artificial. La vuelve responsable y alineada."
    },
    {
      id: "fragility",
      heading: "Qué se vuelve frágil",
      body: "La prisa por optimizar puede fragilizar relaciones institucionales de forma inadvertida. En particular, la interrogación de valores saca a la luz la tensión crítica entre:",
      bullets: [
        "La posibilidad técnica y el juicio institucional.",
        "La eficiencia y la dignidad intrínseca del trabajo.",
        "La escala masiva de automatización y la cultura del cuidado.",
        "Las métricas frías y los bienes humanos fundamentales.",
        "La delegación robótica y la responsabilidad real."
      ],
      footer: "Cuando esta interrogación no ocurre, la organización termina gobernada por valores no nombrados: velocidad extrema, reducción indiscriminada de costos, defaults de proveedor o supuestos del proceso original."
    },
    {
      id: "cultivar",
      heading: "Qué conviene cultivar",
      body: "Para avanzar con soberanía intelectual, conviene introducir una pausa deliberativa antes de automatizar flujos clave:",
      bullets: [
        "Nombrar y mapear explícitamente los valores ya codificados en el proceso.",
        "Distinguir claramente lo que debe acelerarse de lo que debe preservarse.",
        "Preguntar qué parte del trabajo forma criterio, cuidado, responsabilidad o dignidad.",
        "Decidir activamente si el proceso debe amplificarse, rediseñarse o si aún no debe automatizarse."
      ]
    },
    {
      id: "scene",
      heading: "Escena de reconocimiento",
      body: "Un equipo revisa un flujo de trabajo listo para automatizarse. La pantalla muestra beneficios claros en el dashboard: menos tiempo, más volumen, cero fricción. Todo parece avanzar sin obstáculos. Entonces alguien interrumpe y pregunta de frente contra la inercia: 'Antes de automatizarlo, ¿qué valores estamos escalando?'. La reunión cambia de plano inmediatamente. Ya no se trata solo de implementar; se trata de entender qué tipo de organización quedará configurada.",
      callout: "La reunión de implementación cambia de plano: ya no es solo sobre optimizar, es sobre el impacto en el criterio común."
    }
  ],
  principles_title: "Directrices",
  principles: [
    { text: "La IA no es una herramienta neutra; amplifica de manera exponencial las intenciones y sesgos previas." },
    { text: "Optimizar el error acelera la desviación; identificar qué preservar es anterior a elegir qué automatizar." },
    { text: "La pausa deliberativa no es ineficiencia, es protección de la soberanía directiva de la organización." }
  ],
  phrase_block: {
    heading: "En Una Frase",
    body: "La IA no vuelve neutral un proceso. Amplifica lo que ya estaba dentro. Por eso, antes de escalar una práctica, una organización necesita saber qué valores está dispuesta a escalar con ella."
  },
  cierre: {
    title: "Preservar el centro humano",
    body: "La interrogación de valores dota de alma y dirección al cambio tecnológico en la corporación.",
    footer: "Livingtelligence provee las metodologías y herramientas de stewardship para instituir esta pausa estratégica de forma fluida.",
    cta: "Explorar propuesta de alcance",
    sub_cta: "Inicia hoy mismo el diagnóstico de co-inteligencia."
  },
  metadata: [
    "Livingtelligence",
    "Documento de Protocolo v4",
    "Interrogación de Valores _ 2026",
    "Bridge Protocol Suite",
    "Derechos Reservados © Livingtelligence"
  ],
  back: "← Volver a la Biblioteca"
};

const ARTICLE_EN = {
  eyebrow: "Livingtelligence / Bridge Document 04",
  title: "Interrogation of Values",
  subtitle: "Before automating, what values are we scaling?",
  introduction: "The interrogation of values appears when a person, team, or organization recognizes that adopting AI is not solely a technical decision or an efficiency gain. It is a profound decision about which values will be preserved, weakened, displaced, or amplified when work starts being delegated to smart systems.",
  question_block: {
    question: "What values do we actually want automation to amplify?",
    body: "The central question in the AI era must not solely be 'what can we automate?' but rather 'what values are we encoding and boosting with this automation?'"
  },
  sections: [
    {
      id: "starts_happening",
      heading: "What starts to happen",
      body: "When this reflective debate is introduced, the habitual technological inertia is positively interrupted in several key areas:",
      bullets: [
        "The conversation stops revolving only around efficiency, speed, or utility.",
        "Someone asks what human goods the current process protects before turning it into a system.",
        "Automation ceases to seem neutral; it begins to be understood as an amplification of criteria, incentives, and assumptions.",
        "The organization discovers that it is not enough to ask what AI can do, but also what it must preserve."
      ]
    },
    {
      id: "description",
      heading: "The deliberative moment",
      body: "This phenomenon does not represent passive resistance or fear of technology. Quite the contrary, it is the exact moment when the firm's technological adoption ceases to be reactive and turns into a fully deliberative process.",
      callout: "A good question doesn't stop artificial intelligence. It makes it responsible and aligned."
    },
    {
      id: "fragility",
      heading: "What becomes fragile",
      body: "The rush to optimize can inadvertently weaken institutional relationships. In particular, the interrogation of values brings to light the critical tension between:",
      bullets: [
        "Technical possibility and institutional judgment.",
        "Efficiency and the intrinsic dignity of work.",
        "The massive scale of automation and the culture of care.",
        "Cold metrics and fundamental human goods.",
        "Robotic delegation and real responsibility."
      ],
      footer: "When this interrogation does not occur, the organization ends up governed by unnamed values: extreme speed, cost reductions, vendor defaults, or assumptions inherited from the legacy workflow."
    },
    {
      id: "cultivar",
      heading: "What is best to cultivate",
      body: "To advance with intellectual sovereignty, it is highly recommended to introduce a deliberative pause before automating core flows:",
      bullets: [
        "Explicitly name and map the values already encoded in the workflow.",
        "Vigilantly separate what should be accelerated from what should be preserved.",
        "Ask which part of the work builds judgment, care, responsibility, or dignity.",
        "Actively decide whether the process should be amplified, redesigned, or not automated yet."
      ]
    },
    {
      id: "scene",
      heading: "Recognition scene",
      body: "A team reviews a workflow ready to be automated. The screen displays clear benefits: less time, more volume, zero friction. Everything seems perfectly set. Then someone interrupts against the herd inertia: 'Before automating, what values are we scaling?'. The meeting shifts dimension. It is no longer just about rolling it out; it is about clarifying the kind of organization that will be shaped.",
      callout: "The implementation desk shifts focus: from technical speed to the long-term impact on shared judgment."
    }
  ],
  principles_title: "Guidelines",
  principles: [
    { text: "AI is never a neutral agent; it exponentially amplifies preexisting intents and human incentives." },
    { text: "Optimizing the wrong path accelerates drift; identifying what to preserve is a prerequisite to choosing what to automate." },
    { text: "The deliberative pause is not an inefficiency—it protects the firm's executive sovereignty." }
  ],
  phrase_block: {
    heading: "In One Sentence",
    body: "AI doesn't make a process neutral. It amplifies what was already inside. Therefore, before scaling a practice, an organization must know what values it is willing to scale with it."
  },
  cierre: {
    title: "Sustaining the human core",
    body: "The interrogation of values provides soul and guidance to tech adoption in the modern enterprise.",
    footer: "Livingtelligence provides the frameworks and stewardship toolkits to smoothly institutionalize this strategic pause.",
    cta: "Explore Scope Proposal",
    sub_cta: "Or begin with a co-intelligence Signal Readout today."
  },
  metadata: [
    "Livingtelligence",
    "Bridge Protocol Document v4",
    "Interrogation of Values _ 2026",
    "Bridge Protocol Suite",
    "All Rights Reserved © Livingtelligence"
  ],
  back: "← Go back to Library"
};

export default function ArticleInterrogationValues() {
  const [lang, setLang] = useState<'es' | 'en'>('es');
  const doc = lang === 'es' ? ARTICLE_ES : ARTICLE_EN;

  const fadeIn = {
    initial: { opacity: 0, y: 15 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.21, 1, 0.44, 1] }
  };

  return (
    <div className="min-h-screen bg-living-bg scroll-smooth">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-8 py-6 flex justify-between items-center bg-living-bg/80 backdrop-blur-md border-b border-living-border">
        <Link to="/" className="text-[11px] font-bold tracking-[0.25em] uppercase text-living-green hover:underline">
          {doc.back}
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
          {/* Header */}
          <header className="mb-20">
            <motion.div {...fadeIn}>
              <span className="header-label">{doc.eyebrow}</span>
              <h1 className="heading-primary !mb-6 leading-tight">{doc.title}</h1>
              <p className="text-2xl md:text-3xl font-[500] tracking-tight leading-snug text-living-green">
                {doc.subtitle}
              </p>
            </motion.div>
          </header>

          {/* Intro Section with newly generated illustration */}
          <section className="mb-24">
            <motion.div {...fadeIn} className="grid md:grid-cols-12 gap-12 items-center">
              <div className="md:col-span-7">
                <div className="section-divider" />
                <p className="body-editorial font-medium !text-zinc-850 leading-relaxed">
                  {doc.introduction}
                </p>
              </div>
              <div className="md:col-span-5 relative">
                <div className="border border-zinc-200/80 p-2 bg-white/70 shadow-sm rounded-sm">
                  <img 
                    src={imgPath} 
                    alt="Interrogation of Values visual schema" 
                    className="w-full h-auto object-cover grayscale opacity-90 hover:grayscale-0 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <p className="text-[10px] font-mono text-zinc-400 mt-2 text-center uppercase tracking-wider">
                    Fig 4. Pausa Deliberativa
                  </p>
                </div>
              </div>
            </motion.div>
          </section>

          {/* Question Callout */}
          <section className="mb-32">
            <motion.div {...fadeIn} className="grid md:grid-cols-12 gap-8 items-center bg-neutral-55 border border-zinc-120 p-8 md:p-12 mb-16">
              <div className="md:col-span-6">
                <p className="text-2xl md:text-3xl font-medium tracking-tight text-neutral-900 border-l-4 border-living-green pl-6 py-2 leading-snug">
                  "{doc.question_block.question}"
                </p>
              </div>
              <div className="md:col-span-6">
                <p className="text-base text-living-text-muted leading-relaxed">
                  {doc.question_block.body}
                </p>
              </div>
            </motion.div>
          </section>

          {/* Core Content sections */}
          <div className="space-y-32">
            {doc.sections.map((section) => (
              <motion.section key={section.id} {...fadeIn}>
                <div className="section-divider" />
                <div className="grid md:grid-cols-12 gap-8">
                  <div className="md:col-span-4">
                    <h2 className="heading-secondary">{section.heading}</h2>
                  </div>
                  <div className="md:col-span-8 space-y-8">
                    <p className="body-editorial !max-w-none !mb-0 text-zinc-700">{section.body}</p>
                    
                    {section.bullets && (
                      <ul className="space-y-4 pt-4">
                        {section.bullets.map((bullet, i) => (
                          <li key={i} className="flex gap-3 text-sm text-living-text-muted items-start">
                            <span className="w-1.5 h-1.5 rounded-full bg-living-green mt-1.5 shrink-0" />
                            <span className="leading-relaxed">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {section.callout && (
                      <div className="callout-box">
                        "{section.callout}"
                      </div>
                    )}

                    {section.footer && (
                      <p className="text-sm italic text-living-text-muted pt-6 border-t border-black/5">
                        {section.footer}
                      </p>
                    )}
                  </div>
                </div>
              </motion.section>
            ))}

            {/* Principles block */}
            <motion.section {...fadeIn}>
              <div className="section-divider" />
              <div className="grid md:grid-cols-12 gap-8">
                <div className="md:col-span-4">
                  <h2 className="heading-secondary text-living-green font-bold">{doc.principles_title}</h2>
                </div>
                <div className="md:col-span-8">
                  <ul className="space-y-6">
                    {doc.principles.map((pr, i) => (
                      <li key={i} className="flex gap-4 items-start pb-6 border-b border-zinc-100 last:border-0">
                        <span className="text-living-green mt-1 font-bold">/</span>
                        <span className="text-base text-living-text-muted leading-relaxed font-medium">
                          {pr.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* In One Sentence banner */}
            <motion.section {...fadeIn} className="bg-living-green/5 border border-living-green/20 p-8 md:p-12">
              <span className="text-[10px] font-bold uppercase tracking-widest text-living-green block mb-4">
                {doc.phrase_block.heading}
              </span>
              <p className="text-xl md:text-2xl font-light leading-relaxed text-zinc-800 italic">
                "{doc.phrase_block.body}"
              </p>
            </motion.section>

            {/* Cierre banner */}
            <motion.section {...fadeIn} className="bg-neutral-900 text-white p-12 md:p-20">
               <h2 className="text-3xl font-medium tracking-tight mb-8 leading-tight">
                 {doc.cierre.title}
               </h2>
               <p className="text-lg text-white/70 mb-12 leading-relaxed italic max-w-2xl">
                 {doc.cierre.body}
               </p>
               <div className="p-8 border-l border-living-green mb-16">
                 <p className="text-lg text-white/90 leading-relaxed font-light">
                   {doc.cierre.footer}
                 </p>
               </div>
               <div className="space-y-8">
                  <Link to="/scope-proposal" className="inline-block bg-living-green text-white px-10 py-5 text-sm font-bold tracking-widest uppercase hover:bg-living-green/90 transition-colors">
                    {doc.cierre.cta}
                  </Link>
                  <p className="text-xs text-white/40 uppercase tracking-widest">
                    {doc.cierre.sub_cta}
                  </p>
               </div>
            </motion.section>
          </div>

          {/* Page Footer */}
          <footer className="mt-48 pt-20 border-t-2 border-living-green">
            <motion.div {...fadeIn} className="grid grid-cols-1 md:grid-cols-2 gap-12">
               <div className="space-y-1">
                  {doc.metadata.slice(0, 3).map((line, i) => (
                    <p key={i} className={`${i === 0 ? 'text-xl font-bold mb-2 text-living-text-main' : 'text-xs text-living-text-muted uppercase tracking-widest'}`}>
                       {line}
                    </p>
                  ))}
               </div>
               <div className="md:text-right space-y-1">
                  {doc.metadata.slice(3).map((line, i) => (
                    <p key={i} className="text-xs text-living-text-muted uppercase tracking-widest">
                      {line}
                    </p>
                  ))}
               </div>
            </motion.div>
          </footer>
        </div>
      </main>
    </div>
  );
}
