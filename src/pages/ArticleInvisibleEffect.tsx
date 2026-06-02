/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const ARTICLE = {
  eyebrow: "Livingtelligence / Bridge Document / 01",
  title: "Cómo descubrir el efecto invisible de la IA en tu organización",
  subtitle: "Cinco señales que ya están apareciendo antes de que se vuelvan estructura.",
  sections: [
    {
      id: "apertura",
      heading: "Apertura y Reconocimiento",
      body: "Muchas organizaciones ya están usando inteligencia artificial de forma cotidiana. En casi todos los sectores, esa integración ya empezó. La pregunta ya no es si la IA entrará o no en la empresa. La pregunta más útil es: ¿qué está cambiando realmente ahora que ya empezó a entrar?",
      bullets: [
        "Escribir, Investigar, Programar",
        "Analizar, Resumir, Apoyar decisiones",
        "Acelerar trabajo operativo"
      ],
      footer: "Cuando la IA se instala dentro del trabajo diario, no solo cambia la herramienta. También empiezan a cambiar, a veces de forma muy sutil, el criterio, la verificación, la pericia, la calidad del trabajo y el sentido de responsabilidad."
    },
    {
      id: "definicion",
      heading: "Lo invisible no siempre entra como falla",
      body: "La mayoría de las organizaciones todavía no tiene una forma clara de ver estos movimientos. Miden adopción, licencias, productividad, automatización y velocidad. Pero mucho de lo que importa no aparece primero como un indicador técnico. Aparece como algo más difícil de notar.",
      bullets: [
        "Una respuesta demasiado convincente",
        "Una decisión tomada demasiado rápido",
        "Una revisión que ya no ocurrió",
        "Una habilidad que dejó de ejercitarse",
        "Un equipo que parece avanzar, pero no necesariamente comprender mejor"
      ],
      callout: "La IA puede estar mejorando la velocidad visible del sistema sin que la organización tenga todavía una lectura suficiente de cómo ese sistema está cambiando por dentro.",
      footer: "El efecto invisible de la IA no es un bug, una anécdota aislada ni solo un error espectacular. Es el conjunto de transformaciones graduales que se acumulan cuando inteligencia humana, digital y organizacional empiezan a trabajar juntas sin suficiente visibilidad estructural."
    },
    {
      id: "signals",
      heading: "Señales del Efecto Invisible",
      items: [
        {
          num: "1",
          title: "1. La IA ya está decidiendo más de lo que parece",
          content: "La organización puede sentir que la decisión final sigue siendo humana. Pero eso no significa que el trabajo de decidir siga ocurriendo en el mismo lugar. Cuando la IA propone opciones, encuadra alternativas, sugiere prioridades, formula la primera respuesta o define el primer borrador del criterio, algo importante ya cambió.",
          bullets: [
            "La agencia humana no desaparece de golpe",
            "Sí puede empezar a desplazarse",
            "Aprobar algo preformateado no equivale a haberlo pensado desde el inicio"
          ],
          footer: "La pregunta importante no es solo quién firmó la decisión, sino dónde ocurrió realmente el trabajo de decidir."
        },
        {
          num: "2",
          title: "2. La fluidez empieza a confundirse con comprensión",
          content: "La IA produce respuestas completas, rápidas y convincentes. Eso puede ser muy útil, pero también introduce una confusión peligrosa: parecer que entendemos más de lo que realmente entendemos.",
          bullets: [
            "Poca reconstrucción del razonamiento",
            "Baja capacidad para justificar límites",
            "Comprensión parcial de por qué el resultado parecía bueno"
          ],
          footer: "Cuando responder por qué elegimos algo empieza a costar, la organización puede estar entrando en el espejismo de la competencia."
        },
        {
          num: "3",
          title: "3. La confianza está creciendo más rápido que la verificación",
          content: "Cuando una herramienta funciona muchas veces seguidas, la revisión empieza a parecer innecesaria. No porque alguien decida explícitamente bajar la guardia, sino porque el éxito repetido produce costumbre. Y con la costumbre llega una confianza que puede ser práctica y productiva, pero también mal calibrada.",
          bullets: [
            "Menos reconstrucción de razones",
            "Menos chequeo de afirmaciones",
            "Más aceptación de outputs suficientemente buenos",
            "La sensación de que revisar ya no siempre vale la pena"
          ],
          footer: "La señal no es simplemente que la gente confía, sino que la confianza está creciendo más rápido que la capacidad o el hábito de verificar."
        },
        {
          num: "4",
          title: "4. La velocidad sube, pero no siempre la capacidad",
          content: "La IA puede hacer que una organización entregue más rápido, produzca más volumen, procese más información o responda con mayor agilidad. Pero eso no garantiza que también esté creciendo el juicio, la claridad de revisión, la memoria institucional, la calidad sostenida o la solidez del trabajo.",
          bullets: [
            "Capacidad tecnológica",
            "Capacidad humana para gobernarla bien",
            "Capacidad institucional para sostener calidad"
          ],
          footer: "A veces la velocidad no significa capacidad real. Solo significa que la herramienta corrió más rápido que la organización."
        },
        {
          num: "5",
          title: "5. Algo del propósito del trabajo empieza a volverse menos claro",
          content: "No todos los efectos invisibles son cognitivos u operativos. Algunos son más silenciosos y más profundos. La organización puede seguir funcionando, los indicadores pueden no caer e incluso la productividad puede subir. Y aun así empezar a aparecer una deriva entre lo que hacemos, cómo lo hacemos y para qué lo hacemos.",
          bullets: [
            "El trabajo se vuelve más reactivo que deliberado",
            "El equipo optimiza sin revisar el sentido",
            "La automatización resuelve medios sin reexaminar fines",
            "La organización ya no tiene tan claro qué parte del valor quiere preservar"
          ]
        }
      ]
    },
    {
      id: "practica",
      heading: "Orientación Práctica",
      body: "Ver estas señales no significa frenar la adopción ni asumir que toda integración de IA produce deterioro. Significa aprender a distinguir.",
      dimensions: [
        { label: "Distinción 1", q: "Entre ayuda y dependencia" },
        { label: "Distinción 2", q: "Entre velocidad y capacidad" },
        { label: "Distinción 3", q: "Entre output y comprensión" }
      ],
      footer: "Muchas decisiones relevantes no pasan por usar o no usar IA. Pasan por qué delegar, qué preservar, qué revisar, qué entrenar y qué prácticas conviene cultivar antes de que el sistema se rigidice."
    },
    {
      id: "acompanamiento",
      heading: "Acompañamiento Livingtelligence",
      body: "Livingtelligence existe precisamente para ayudar a hacer visible ese campo. No se limita a preguntar cuántas herramientas se usan o cuántas licencias hay. Pregunta qué fenómenos están emergiendo, qué se está amplificando, qué se está erosionando, qué requiere más supervisión y qué prácticas conviene cultivar.",
      bullets: [
        "01 Observación de señales",
        "02 Lectura fenomenológica",
        "03 Instrumentos ligeros de captura",
        "04 Interpretación por dimensiones humanas, organizacionales y digitales",
        "05 Orientación práctica"
      ],
      footer: "No se trata solo de observar el uso de IA. Se trata de comprender cómo evoluciona la organización con ella."
    }
  ],
  cierre: {
    title: "Criterios para una transición sólida",
    body: "La IA ya está cambiando la organización, aunque no siempre sea fácil ver cómo. Aprender a ver ese efecto invisible no es un lujo teórico; es una capacidad estratégica.",
    footer: "Si estas señales ya están apareciendo en tu organización, Livingtelligence puede ayudarte a leerlas con mayor claridad y a convertir esa lectura en criterio, orientación y capacidad institucional real.",
    cta: "Solicita un signal readout inicial",
    sub_cta: "Si prefieres una primera conversación más abierta, también puedes solicitar una conversación exploratoria."
  },
  metadata: [
    "Livingtelligence",
    "Hacemos visibles los fenómenos de la co-inteligencia",
    "para que personas y organizaciones recuperen criterio, agencia y dirección",
    "Bridge Protocol Document _ 2026",
    "Built on Observation & Phenomenology",
    "Propiedad Intelectual Livingtelligence"
  ]
};

export default function ArticleInvisibleEffect() {
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
        <div className="max-w-4xl mx-auto">
          <header className="mb-24">
            <motion.div {...fadeIn}>
              <span className="header-label">{ARTICLE.eyebrow}</span>
              <h1 className="heading-primary !mb-6 leading-tight">{ARTICLE.title}</h1>
              <p className="text-xl md:text-2xl leading-relaxed text-living-text-muted font-normal max-w-3xl">
                {ARTICLE.subtitle}
              </p>
            </motion.div>
          </header>

          <div className="space-y-32">
            {/* Apertura */}
            <motion.section {...fadeIn}>
              <div className="section-divider" />
              <div className="grid md:grid-cols-12 gap-8">
                <div className="md:col-span-4">
                  <h2 className="heading-secondary">{ARTICLE.sections[0].heading}</h2>
                </div>
                <div className="md:col-span-8 space-y-6">
                  <p className="body-editorial !max-w-none !mb-0">{ARTICLE.sections[0].body}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 pt-4">
                    {ARTICLE.sections[0].bullets?.map((item, i) => (
                      <div key={i} className="text-sm font-bold uppercase tracking-widest text-living-green/80">
                        {item}
                      </div>
                    ))}
                  </div>
                  <p className="text-lg leading-relaxed text-living-text-muted pt-6 border-t border-black/5 italic">
                    {ARTICLE.sections[0].footer}
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Definición */}
            <motion.section {...fadeIn}>
              <div className="section-divider" />
              <div className="grid md:grid-cols-12 gap-8">
                <div className="md:col-span-4">
                  <h2 className="heading-secondary">{ARTICLE.sections[1].heading}</h2>
                </div>
                <div className="md:col-span-8 space-y-8">
                  <p className="body-editorial !max-w-none !mb-0">{ARTICLE.sections[1].body}</p>
                  <ul className="space-y-3">
                    {ARTICLE.sections[1].bullets?.map((bullet, i) => (
                      <li key={i} className="flex gap-3 text-base text-living-text-muted">
                        <span className="w-1.5 h-1.5 rounded-full bg-living-green mt-2 shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="p-8 bg-living-green text-white text-xl leading-snug font-medium italic">
                    "{ARTICLE.sections[1].callout}"
                  </div>
                  <p className="text-sm text-living-text-muted pt-4 border-t border-black/5">
                    {ARTICLE.sections[1].footer}
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Signals */}
            <section className="space-y-24">
               <motion.div {...fadeIn}>
                  <div className="section-divider" />
                  <h2 className="heading-secondary mb-16">{ARTICLE.sections[2].heading}</h2>
               </motion.div>
               
               {ARTICLE.sections[2].items?.map((item, i) => (
                 <motion.div key={i} {...fadeIn} className="grid md:grid-cols-12 gap-8 items-start">
                    <div className="md:col-span-1 border-t-2 border-living-green pt-4">
                      <span className="text-4xl font-bold text-living-green/20">{item.num}</span>
                    </div>
                    <div className="md:col-span-11 space-y-8">
                       <h3 className="text-2xl font-medium tracking-tight text-living-text-main">{item.title}</h3>
                       <p className="text-lg leading-relaxed text-living-text-muted">{item.content}</p>
                       <ul className="space-y-3">
                          {item.bullets?.map((bullet, j) => (
                            <li key={j} className="flex gap-3 text-sm text-living-text-muted">
                               <span className="w-1.5 h-1.5 rounded-full bg-living-green mt-1.5 shrink-0" />
                               <span>{bullet}</span>
                            </li>
                          ))}
                       </ul>
                       {item.footer && <p className="text-sm italic text-living-text-muted opacity-80 pt-4 border-t border-black/5">{item.footer}</p>}
                    </div>
                 </motion.div>
               ))}
            </section>

            {/* Orientación Práctica */}
            <motion.section {...fadeIn}>
              <div className="section-divider" />
              <div className="grid md:grid-cols-12 gap-8">
                <div className="md:col-span-4">
                  <h2 className="heading-secondary">{ARTICLE.sections[3].heading}</h2>
                </div>
                <div className="md:col-span-8 space-y-12">
                  <p className="body-editorial !max-w-none !mb-0">{ARTICLE.sections[3].body}</p>
                  <div className="space-y-6">
                    {ARTICLE.sections[3].dimensions?.map((dim, i) => (
                      <div key={i} className="p-6 border-l-4 border-living-green bg-neutral-50 space-y-2">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-living-green">{dim.label}</span>
                        <p className="text-xl font-medium tracking-tight text-living-text-main">{dim.q}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm italic text-living-text-muted pt-8 border-t border-black/5">
                    {ARTICLE.sections[3].footer}
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Acompañamiento */}
            <motion.section {...fadeIn}>
              <div className="section-divider" />
              <div className="grid md:grid-cols-12 gap-8">
                <div className="md:col-span-4">
                  <h2 className="heading-secondary">{ARTICLE.sections[4].heading}</h2>
                </div>
                <div className="md:col-span-8 space-y-10">
                   <p className="body-editorial !max-w-none !mb-0">{ARTICLE.sections[4].body}</p>
                   <div className="grid grid-cols-1 gap-2">
                      {ARTICLE.sections[4].bullets?.map((item, i) => (
                        <div key={i} className="p-4 border border-living-border text-sm font-medium text-living-text-main bg-white">
                          {item}
                        </div>
                      ))}
                   </div>
                   <p className="text-sm italic text-living-text-muted text-center pt-8">
                    {ARTICLE.sections[4].footer}
                   </p>
                </div>
              </div>
            </motion.section>

            {/* Cierre */}
            <motion.section {...fadeIn} className="bg-neutral-900 text-white p-12 md:p-20">
               <h2 className="text-3xl font-medium tracking-tight mb-8 leading-tight">
                 {ARTICLE.cierre.title}
               </h2>
               <p className="text-lg text-white/70 mb-12 leading-relaxed italic max-w-2xl">
                 {ARTICLE.cierre.body}
               </p>
               <div className="p-8 border-l border-living-green mb-16">
                 <p className="text-lg text-white/90 leading-relaxed font-light">
                   {ARTICLE.cierre.footer}
                 </p>
               </div>
               <div className="space-y-8">
                  <Link to="/signal-readout" className="inline-block bg-living-green text-white px-10 py-5 text-sm font-bold tracking-widest uppercase hover:bg-living-green/90 transition-colors">
                    {ARTICLE.cierre.cta}
                  </Link>
                  <p className="text-xs text-white/40 uppercase tracking-widest">
                    {ARTICLE.cierre.sub_cta}
                  </p>
               </div>
            </motion.section>
          </div>

          {/* Page Footer */}
          <footer className="mt-48 pt-20 border-t-2 border-living-green">
            <motion.div {...fadeIn} className="grid grid-cols-1 md:grid-cols-2 gap-12">
               <div className="space-y-1">
                  {ARTICLE.metadata.slice(0, 3).map((line, i) => (
                    <p key={i} className={`${i === 0 ? 'text-xl font-bold mb-2' : 'text-xs text-living-text-muted uppercase tracking-widest'}`}>
                      {line}
                    </p>
                  ))}
               </div>
               <div className="md:text-right space-y-1">
                  {ARTICLE.metadata.slice(3).map((line, i) => (
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
