/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const ARTICLE_ES = {
  eyebrow: "Livingtelligence / Marco Filosófico",
  title: "Marco Filosófico",
  subtitle: "Tecnología con conciencia, inteligencia con dirección",
  introduction: "Livingtelligence nace de una convicción: la inteligencia artificial no debe entenderse solo como una herramienta de eficiencia. También debe entenderse como una fuerza formativa que puede cambiar la manera en que las personas piensan, deciden, aprenden, verifican y trabajan con sentido.",
  question_block: {
    question: "¿Qué capacidades humanas se fortalecen o se debilitan cuando empezamos a trabajar con la IA todos los días?",
    body: "La pregunta central no es únicamente qué puede hacer la IA por nosotros. La pregunta más importante es qué ocurre bajo la superficie de la adopción tecnológica diaria."
  },
  sections: [
    {
      id: "desplazamiento",
      heading: "El Desplazamiento Silencioso",
      body: "Durante años, los sistemas digitales aprendieron a capturar atención, moldear hábitos y ocupar espacios crecientes de la vida cotidiana. Muchas veces no vimos el cambio mientras ocurría, porque se volvió parte del ambiente. Con la IA, el desafío entra en una zona más profunda: juicio, agencia, responsabilidad, aprendizaje, verdad práctica y dignidad profesional.",
      callout: "El primer paso para preservar estas capacidades es hacerlas visibles, nombrando lo invisible antes de que se convierta en una norma inadvertida."
    },
    {
      id: "confianza",
      heading: "Confianza en el ser humano",
      body: "Livingtelligence parte de la confianza en el ser humano. Creemos que las personas y las organizaciones pueden integrar IA sin renunciar a las capacidades que las hacen verdaderamente inteligentes: formular buenas preguntas, deliberar, distinguir calidad, reconocer límites, corregir errores, sostener propósito y actuar con responsabilidad.",
      footer: "Por eso no buscamos frenar la IA. Buscamos hacer visible lo que cambia cuando la IA entra al trabajo real."
    },
    {
      id: "observar",
      heading: "Observar sin Juzgar",
      body: "Nuestra tarea es observar, nombrar, clasificar y dar seguimiento a los fenómenos humano-IA que aparecen en la vida organizacional. Algunos pueden debilitar criterio, agencia o dirección. Otros pueden abrir nuevas formas de aprendizaje, colaboración y conciencia institucional. El punto de partida no es juzgar la tecnología, sino aprender a ver sus efectos.",
      bullets: [
        "Observar las señales en el trabajo real",
        "Nombrar y catalogar los fenómenos resultantes",
        "Clasificar dependencias o desviaciones",
        "Dar seguimiento a la co-inteligencia"
      ]
    },
    {
      id: "lenguaje",
      heading: "Lenguaje Común y Acción",
      body: "Livingtelligence convierte señales dispersas en lenguaje común. Ayuda a que una organización reconozca patrones antes de que se vuelvan cultura invisible. Y propone activos, prácticas, readouts y stewardship para que esos patrones puedan discutirse, corregirse o cultivarse.",
      bullets: [
        "Señales dispersas convertidas en un marco común",
        "Identificación de patrones antes de ser hábitos mudos",
        "Discusiones estructuradas con stewards de criterio"
      ]
    },
    {
      id: "direccion",
      heading: "El Juicio como Dirección",
      body: "Este marco se apoya en una idea simple: la IA puede amplificar capacidades, pero solo el juicio humano puede darles dirección. La tecnología puede acelerar respuestas, pero la sabiduría humana sigue siendo necesaria para decidir qué vale la pena preguntar, preservar y construir.",
      callout: "La IA puede entregarnos velocidad, pero el criterio y la dirección siguen siendo prerrogativas que definen nuestra soberanía intelectual."
    },
    {
      id: "conciencia",
      heading: "Conciencia Aplicada",
      body: "En ese sentido, Livingtelligence es una capa institucional para observar cómo está cambiando la inteligencia de una organización.",
      bullets: [
        "No es una app cerrada o restrictiva",
        "No es una auditoría puramente técnica",
        "No es una postura reactiva contra la tecnología",
        "Es una forma de conciencia aplicada para preservar el valor humano"
      ]
    }
  ],
  principles_title: "Principios",
  principles: [
    { text: "La IA debe estar al servicio de la sabiduría humana, no al revés." },
    { text: "La eficiencia sin criterio puede producir fragilidad." },
    { text: "La adopción tecnológica debe observar sus efectos formativos." },
    { text: "Los fenómenos invisibles deben nombrarse para poder corregirse." },
    { text: "La autonomía humana necesita práctica, no solo intención." },
    { text: "Las organizaciones inteligentes aprenden a observar su propia inteligencia." }
  ],
  phrase_block: {
    heading: "En Una Frase",
    body: "Livingtelligence ayuda a que las organizaciones integren IA sin perder lo que más necesitan preservar: juicio, agencia, dirección, aprendizaje y dignidad profesional."
  },
  cierre: {
    title: "Gobernar la evolución",
    body: "El marco filosófico nos da la base. Livingtelligence aporta el método, los activos y la práctica para hacerlo realidad.",
    footer: "Construyendo una relación deliberada con el futuro del trabajo.",
    cta: "Explorar propuesta de alcance",
    sub_cta: "O inicia con un Signal Readout."
  },
  metadata: [
    "Livingtelligence",
    "Marco Filosófico v1",
    "Tecnología con Conciencia _ 2026",
    "Bridge Protocol Document v1",
    "Propiedad Intelectual Livingtelligence"
  ],
  back: "← Volver a la Biblioteca"
};

const ARTICLE_EN = {
  eyebrow: "Livingtelligence / Philosophical Framework",
  title: "Philosophical Framework",
  subtitle: "Technology with conscience, intelligence with direction",
  introduction: "Livingtelligence is born from a conviction: artificial intelligence should not be understood merely as an efficiency tool. It must also be understood as a formative force that can change the way people think, decide, learn, verify, and work with meaning.",
  question_block: {
    question: "Which human capabilities are strengthened or weakened when we begin working with AI every single day?",
    body: "The central question is not only what AI can do for us. The most important question is what happens beneath the surface of daily technological adoption."
  },
  sections: [
    {
      id: "desplazamiento",
      heading: "The Silent Displacement",
      body: "For years, digital systems learned to capture attention, shape habits, and occupy growing spaces of daily life. Often we did not see the change while it happened, because it became part of the environment. With AI, the challenge enters a deeper zone: judgment, agency, responsibility, learning, practical truth, and professional dignity.",
      callout: "The first step to preserving these capabilities is to make them visible, naming the invisible before it becomes an unexamined norm."
    },
    {
      id: "confianza",
      heading: "Trust in the human being",
      body: "Livingtelligence stems from trust in the human being. We believe that people and organizations can integrate AI without giving up the capabilities that make them truly intelligent: formulating good questions, deliberating, distinguishing quality, recognizing limits, correcting errors, sustaining purpose, and acting responsibly.",
      footer: "Therefore, we do not seek to slow down AI. We seek to make visible what changes when AI enters real work."
    },
    {
      id: "observar",
      heading: "Observe without Judging",
      body: "Our task is to observe, name, classify, and track the human-AI phenomena that appear in organizational life. Some may weaken judgment, agency, or direction. Others may open up new forms of learning, collaboration, and institutional awareness. The starting point is not to judge technology, but to learn to see its effects.",
      bullets: [
        "Observe signals in the flow of real work",
        "Name and catalog resulting phenomena",
        "Classify dependencies or behavioral drifts",
        "Track the dynamics of co-intelligence"
      ]
    },
    {
      id: "lenguaje",
      heading: "Common Language and Action",
      body: "Livingtelligence turns scattered signals into a common language. It helps an organization recognize patterns before they become invisible culture. And it proposes assets, practices, readouts, and stewardship so that those patterns can be discussed, corrected, or cultivated.",
      bullets: [
        "Scattered signals converted into a common roadmap",
        "Identifying patterns before they become silent habits",
        "Structured discussions with stewardship of judgment"
      ]
    },
    {
      id: "direccion",
      heading: "Judgment as Direction",
      body: "This framework is based on a simple idea: AI can amplify capabilities, but only human judgment can give them direction. Technology can speed up answers, but human wisdom is still required to decide what is worth asking, preserving, and building.",
      callout: "AI can deliver speed, but judgment and direction remain the key prerogatives that define our intellectual sovereignty."
    },
    {
      id: "conciencia",
      heading: "Applied Awareness",
      body: "In this sense, Livingtelligence acts as an institutional layer to observe how an organization's intelligence is changing.",
      bullets: [
        "It is not a restrictive or closed app",
        "It is not a purely technical audit",
        "It is not a reactive stance against technology",
        "It is standard applied awareness to preserve human value"
      ]
    }
  ],
  principles_title: "Principles",
  principles: [
    { text: "AI must be at the service of human wisdom, not the other way around." },
    { text: "Efficiency without judgment can cause fragility." },
    { text: "Technological adoption must observe its formative effects." },
    { text: "Invisible phenomena must be named to be corrected." },
    { text: "Human autonomy requires practice, not just intention." },
    { text: "Intelligent organizations learn to observe their own intelligence." }
  ],
  phrase_block: {
    heading: "In One Sentence",
    body: "Livingtelligence helps organizations integrate AI without losing what they need to preserve most: judgment, agency, direction, learning, and professional dignity."
  },
  cierre: {
    title: "Governing the evolution",
    body: "The philosophical framework provides the foundation. Livingtelligence delivers the path, the assets, and the practice to make it real.",
    footer: "Building a deliberate relationship with the future of work.",
    cta: "Explore the Scope Proposal",
    sub_cta: "Or begin with an Initial Signal Readout."
  },
  metadata: [
    "Livingtelligence",
    "Philosophical Framework v1",
    "Technology with Conscience _ 2026",
    "Bridge Protocol Document v1",
    "Livingtelligence Intellectual Property"
  ],
  back: "← Go back to Library"
};

export default function ArticlePhilosophy() {
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
          <header className="mb-24">
            <motion.div {...fadeIn}>
              <span className="header-label">{doc.eyebrow}</span>
              <h1 className="heading-primary !mb-6 leading-tight">{doc.title}</h1>
              <p className="text-2xl md:text-3xl font-[500] tracking-tight leading-snug text-living-green">
                {doc.subtitle}
              </p>
            </motion.div>
          </header>

          {/* Intro Paragraph */}
          <section className="mb-24">
            <motion.div {...fadeIn}>
              <div className="section-divider" />
              <p className="body-editorial font-medium !text-zinc-850">
                {doc.introduction}
              </p>
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
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                        {section.bullets.map((bullet, i) => (
                          <li key={i} className="flex gap-3 text-sm text-living-text-muted items-start">
                            <span className="w-1.5 h-1.5 rounded-full bg-living-green mt-1.5 shrink-0" />
                            <span>{bullet}</span>
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
