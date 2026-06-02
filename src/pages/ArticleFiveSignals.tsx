/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const ARTICLE = {
  eyebrow: "Livingtelligence / Bridge Document / 02",
  title: "5 señales de que la IA ya está decidiendo más de lo que parece",
  subtitle: "Cómo reconocer cuándo la decisión final sigue siendo humana, pero el trabajo de decidir ya empezó a desplazarse.",
  sections: [
    {
      id: "apertura",
      heading: "Apertura y Reconocimiento",
      body: "La mayoría de las organizaciones no siente que haya entregado sus decisiones a la IA. Y, en muchos casos, eso es cierto. Las personas siguen aprobando, corrigiendo, descartando o firmando. Pero esa observación puede ocultar algo más sutil: la decisión final puede seguir siendo humana, mientras el trabajo de decidir ya empezó a desplazarse.",
      list: [
        "El encuadre",
        "La primera formulación",
        "La priorización inicial",
        "La comparación entre opciones",
        "El esfuerzo de pensar antes de elegir",
        "La organización no necesariamente deja de decidir. Pero sí cambia dónde y cómo está ocurriendo el trabajo de decidir."
      ]
    },
    {
      id: "tension",
      heading: "Por qué conviene aprender a reconocerlo",
      body: "Esa es una de las razones por las que la integración de IA puede sentirse útil y, al mismo tiempo, empezar a producir efectos invisibles sobre la agencia, el criterio, la supervisión y la calidad del juicio humano dentro del proceso.",
      bullets: [
        "Agencia",
        "Criterio",
        "Supervisión",
        "Calidad del juicio humano"
      ],
      footer: "Estas son cinco señales que conviene aprender a reconocer."
    },
    {
      id: "signals",
      heading: "Cinco señales de desplazamiento",
      items: [
        {
          num: "1",
          title: "1. La primera opción ya casi siempre viene dada",
          content: "Una de las señales más tempranas es que la conversación ya no empieza con exploración humana, sino con una respuesta sugerida por IA. Eso puede ahorrar tiempo, pero también introduce un cambio importante: la organización deja de decidir solamente entre opciones pensadas por personas y empieza a decidir entre opciones ya preformateadas por un sistema.",
          bullets: [
            "La sugerencia puede ser útil",
            "El campo de decisión puede quedado definido antes de que el equipo entre a pensar",
            "La pregunta ya no es si la sugerencia es buena o mala",
            "La pregunta es cuánto del campo de decisión ya quedó definido antes de que el equipo realmente entrara a pensar."
          ]
        },
        {
          num: "2",
          title: "2. La revisión se vuelve más rápida, pero menos reconstructiva",
          content: "Muchas veces la persona revisa el output. Sí hay una lectura. Sí hay una aprobación. Pero ya no siempre hay una reconstrucción suficiente de por qué esta opción, qué supuestos trae, qué se está dejando fuera o qué haríamos si estuviera equivocada.",
          bullets: [
            "La revisión puede seguir ocurriendo",
            "La reconstrucción de razones puede ya no ocurrir",
            "La decisión sigue siendo humana en superficie",
            "Cuando la revisión se vuelve una validación rápida más que una reconstrucción de razones, el trabajo profundo de decidir ya cambió de lugar."
          ]
        },
        {
          num: "3",
          title: "3. Lo razonable empieza a aceptarse demasiado pronto",
          content: "Otra señal aparece cuando algo suena tan razonable que deja de sentirse necesario discutirlo. No porque haya evidencia contundente, sino porque está bien redactado, suena convincente, organiza bien la información y ahorra fricción.",
          bullets: [
            "Bien redactado",
            "Convincente",
            "Organiza bien la información",
            "Ahorra fricción"
          ],
          footer: "No estamos frente a una obediencia ciega. Estamos frente a la disminución gradual del impulso a examinar."
        },
        {
          num: "4",
          title: "4. La organización sabe quién aprueba, pero no siempre quién pensó",
          content: "En muchas empresas todavía está claro quién da la última validación. Lo que empieza a volverse menos claro es quién formuló realmente el criterio, quién organizó el razonamiento inicial, quién exploró alternativas y cuánto pensamiento humano real hubo antes de la aceptación.",
          bullets: [
            "Responsabilidad formal",
            "Criterio inicial",
            "Exploración de alternativas",
            "Pensamiento humano real previo a la aceptación"
          ],
          footer: "La pregunta importante no es solo quién firmó, sino quién hizo el trabajo de pensar que llevó a esa firma."
        },
        {
          num: "5",
          title: "5. La ayuda empieza a sentirse más natural que la deliberación",
          content: "Cuando una herramienta se vuelve muy útil, muy rápida y muy disponible, consultar empieza a sentirse más natural que pensar primero. Eso puede ser una adaptación funcional al inicio. Pero si se vuelve hábito, aparece una inversión silenciosa en la ecología del juicio.",
          bullets: [
            "Consultar antes de formular",
            "Aceptar antes de examinar",
            "Optimizar antes de clarificar"
          ],
          footer: "Ahí la IA deja de ser solo apoyo puntual y empieza a modificar la ecología misma del juicio dentro del trabajo."
        }
      ]
    },
    {
      id: "importancia",
      heading: "Por qué importa",
      body: "La mayoría de estos cambios no entra a la organización como crisis. Entra como conveniencia. Y precisamente por eso son difíciles de notar.",
      bullets: [
        "Menor fricción",
        "Más velocidad",
        "Más outputs",
        "Más asistencia"
      ],
      footer: "Debajo de esa mejora visible pueden empezar a cambiar cosas mucho más delicadas: la capacidad de examinar, la claridad sobre quién decide, el lugar del juicio humano y la disposición a verificar."
    },
    {
      id: "practica",
      heading: "Orientación Práctica (Qué hacer con estas señales)",
      body: "Si estas señales ya aparecen en tu equipo, no significa que haya que frenar la integración. Significa que conviene abrir preguntas más maduras sobre el proceso de decisión.",
      dimensions: [
        { label: "Dimensión 1", q: "¿Qué partes del proceso deben seguir siendo claramente humanas?" },
        { label: "Dimensión 2", q: "¿En qué momentos la revisión no puede ser simbólica?" },
        { label: "Dimensión 3", q: "¿Dónde estamos aceptando demasiado rápido lo que suena razonable?" },
        { label: "Dimensión 4", q: "¿Qué parte del trabajo de decidir queremos preservar y por qué?" }
      ],
      footer: "No se trata solo de automatizar mejor. Se trata de no perder de vista qué parte del juicio sigue siendo constitutiva del valor humano y organizacional."
    },
    {
      id: "acompanamiento",
      heading: "Acompañamiento Livingtelligence",
      body: "Livingtelligence ayuda a hacer visibles estas señales antes de que se vuelvan estructura. No parte solo de métricas de adopción o uso. Parte de una pregunta más útil: qué tipo de relación con la decisión está emergiendo entre personas, IA y organización.",
      bullets: [
        "01 Identificar fenómenos",
        "02 Distinguir entre ayuda y cesión",
        "03 Clarificar umbrales de revisión",
        "04 Diseñar prácticas más deliberadas de interacción humano–IA"
      ],
      tagline: "De la integración ciega a la co-inteligencia deliberada"
    }
  ],
  cierre: {
    title: "La IA no necesita tomar el control para empezar a cambiar cómo se decide dentro de una organización.",
    body: "Le basta con volverse la primera opción, la ayuda más natural, la voz más rápida o la forma más cómoda de encuadrar una respuesta.",
    list: [
      "Aprender a ver esas señales a tiempo protege criterio, agencia y responsabilidad",
      "Es una de las formas más importantes de cuidar la co-inteligencia"
    ],
    footer: "Si quieres explorar si estas señales ya están apareciendo en tu organización, Livingtelligence puede ayudarte a leerlas con mayor claridad.",
    cta: "Solicita un signal readout inicial",
    sub_cta: "Si prefieres un primer paso más abierto, también puedes solicitar una conversación exploratoria."
  },
  metadata: [
    "Livingtelligence",
    "Hacemos visibles los fenómenos de la co-inteligencia",
    "para que personas y organizaciones recuperen criterio, agencia y dirección",
    "Bridge Protocol Document _ 2026",
    "Architecture of Observation & Reading",
    "© Livingtelligence Intelligence Assets"
  ]
};

export default function ArticleFiveSignals() {
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
                  <ul className="space-y-2 text-living-text-muted italic">
                    {ARTICLE.sections[0].list?.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* Tensión */}
            <motion.section {...fadeIn}>
              <div className="section-divider" />
              <div className="grid md:grid-cols-12 gap-8">
                <div className="md:col-span-4">
                  <h2 className="heading-secondary">{ARTICLE.sections[1].heading}</h2>
                </div>
                <div className="md:col-span-8 space-y-8">
                  <p className="body-editorial !max-w-none !mb-0">{ARTICLE.sections[1].body}</p>
                  <div className="grid grid-cols-2 gap-4">
                    {ARTICLE.sections[1].bullets?.map((item, i) => (
                      <div key={i} className="p-4 border border-living-border bg-neutral-50 text-sm font-bold uppercase tracking-widest text-living-text-main text-center">
                        {item}
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-living-text-muted">{ARTICLE.sections[1].footer}</p>
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
                       {item.footer && <p className="text-sm italic text-living-text-muted opacity-80 pt-4">{item.footer}</p>}
                    </div>
                 </motion.div>
               ))}
            </section>

            {/* Por qué importa */}
            <motion.section {...fadeIn}>
              <div className="section-divider" />
              <div className="grid md:grid-cols-12 gap-8">
                <div className="md:col-span-4">
                  <h2 className="heading-secondary">{ARTICLE.sections[3].heading}</h2>
                </div>
                <div className="md:col-span-8 space-y-8">
                  <p className="body-editorial !max-w-none !mb-0">{ARTICLE.sections[3].body}</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {ARTICLE.sections[3].bullets?.map((item, i) => (
                      <div key={i} className="flex flex-col items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-living-green" />
                        <span className="text-[10px] font-bold uppercase tracking-widest text-living-text-muted text-center">{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="p-8 bg-neutral-900 text-white text-lg leading-relaxed italic">
                    {ARTICLE.sections[3].footer}
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Orientación Práctica */}
            <motion.section {...fadeIn}>
              <div className="section-divider" />
              <div className="grid md:grid-cols-12 gap-8">
                <div className="md:col-span-4">
                  <h2 className="heading-secondary">{ARTICLE.sections[4].heading}</h2>
                </div>
                <div className="md:col-span-8 space-y-12">
                  <p className="body-editorial !max-w-none !mb-0">{ARTICLE.sections[4].body}</p>
                  <div className="space-y-6">
                    {ARTICLE.sections[4].dimensions?.map((dim, i) => (
                      <div key={i} className="p-6 border-l-4 border-living-green bg-neutral-50 space-y-2">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-living-green">{dim.label}</span>
                        <p className="text-xl font-medium tracking-tight text-living-text-main">{dim.q}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm italic text-living-text-muted">{ARTICLE.sections[4].footer}</p>
                </div>
              </div>
            </motion.section>

            {/* Acompañamiento */}
            <motion.section {...fadeIn}>
              <div className="section-divider" />
              <div className="grid md:grid-cols-12 gap-8">
                <div className="md:col-span-4">
                  <h2 className="heading-secondary">{ARTICLE.sections[5].heading}</h2>
                </div>
                <div className="md:col-span-8 space-y-10">
                   <p className="body-editorial !max-w-none !mb-0">{ARTICLE.sections[5].body}</p>
                   <div className="grid md:grid-cols-2 gap-4">
                      {ARTICLE.sections[5].bullets?.map((item, i) => (
                        <div key={i} className="p-4 border border-living-border text-sm font-medium text-living-text-main">
                          {item}
                        </div>
                      ))}
                   </div>
                   <div className="text-center pt-8">
                      <span className="text- living-green font-bold uppercase tracking-[0.3em] text-[10px]">{ARTICLE.sections[5].tagline}</span>
                   </div>
                </div>
              </div>
            </motion.section>

            {/* Cierre */}
            <motion.section {...fadeIn} className="bg-neutral-900 text-white p-12 md:p-20">
               <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-8 leading-tight">
                 {ARTICLE.cierre.title}
               </h2>
               <p className="text-lg text-white/70 mb-10 leading-relaxed italic max-w-2xl">
                 {ARTICLE.cierre.body}
               </p>
               <ul className="space-y-4 mb-16 px-6 border-l border-living-green">
                  {ARTICLE.cierre.list.map((item, i) => (
                    <li key={i} className="text-base text-white/90">{item}</li>
                  ))}
               </ul>
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
