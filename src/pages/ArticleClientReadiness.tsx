/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const ARTICLE = {
  eyebrow: "Livingtelligence / Bridge Document / 02",
  title: "Guía de preparación para el cliente",
  subtitle: "Una guía breve para entender qué condiciones ayudan a que un Signal Readout o piloto Livingtelligence produzca valor desde el inicio: sponsorship, stewardship, participantes, confianza y alcance.",
  sections: [
    {
      id: "kit",
      heading: "1. Qué Es Este Kit",
      body: "El Client Readiness Kit es el manual de arranque para preparar una primera lectura Livingtelligence. Ayuda a definir quién participa, quién acompaña y qué condiciones permiten obtener una lectura útil. El objetivo no es evaluar personas, sino identificar patrones humano-IA que pueden estar fortaleciendo o debilitando la capacidad organizacional.",
      bullets: [
        "Quién debe participar",
        "Quién debe acompañar el proceso",
        "Qué entender antes de iniciar",
        "Condiciones mínimas de operación",
        "Valor esperado al terminar"
      ]
    },
    {
      id: "valor",
      heading: "2. Qué Obtiene El Cliente",
      body: "Al preparar el proceso, la organización recibe una primera capacidad institucional para ver algo que normalmente permanece disperso. No es solo llenar un cuestionario; es transformar experiencias aisladas en criterio organizacional observable.",
      bullets: [
        "Lectura inicial de señales reales",
        "Lenguaje compartido sobre fenómenos",
        "Identificación temprana de tensiones",
        "Conversación ejecutiva más clara",
        "Base para decidir formación o stewardship"
      ]
    },
    {
      id: "arranque",
      heading: "3. Principio De Arranque",
      body: "Livingtelligence debe iniciar como un experimento institucional ligero, bien explicado y protegido. Requiere sponsorship (legitimidad), stewardship (acompañamiento), claridad para participantes y condiciones mínimas de operación.",
      callout: "Cuando estas condiciones existen, la lectura deja de ser una encuesta suelta y se convierte en aprendizaje institucional."
    },
    {
      id: "sponsor",
      heading: "4. Sponsor Ejecutivo",
      body: "Su función es legitimar el proceso. Explica por qué importa observar la relación entre IA, trabajo y criterio humano. Sin sponsor, el proceso puede sentirse como una curiosidad lateral; con sponsor, gana capacidad de convertirse en conversación real de dirección.",
      bullets: [
        "Enmarcar la iniciativa como aprendizaje",
        "Autorizar tiempo de participación",
        "Proteger el proceso de presiones prematuras",
        "Recibir la lectura y decidir siguientes pasos"
      ]
    },
    {
      id: "steward",
      heading: "5. Steward",
      body: "Es la figura clave que acompaña, observa e interpreta. No necesita ser senior ni técnico, sino confiable y capaz de sostener matices. Ayuda a interpretar patrones y acompaña la conversación entre lo que el sistema detecta y lo que la organización vive.",
      bullets: [
        "Presentar el proceso de forma no amenazante",
        "Observar señales sin acusaciones",
        "Escuchar tensiones reales del equipo",
        "Ayudar a interpretar patrones"
      ],
      footer: "El proceso deja una capacidad humana instalada: alguien aprende a ver y nombrar fenómenos con criterio."
    },
    {
      id: "cohorte",
      heading: "6. Cohorte De Participantes",
      body: "Se requiere una muestra real del trabajo para observar patrones, no solo anécdotas. Una cohorte bien seleccionada permite distinguir señales repetidas y tensiones compartidas entre áreas.",
      bullets: [
        "Mínimo: 8 a 15 participantes",
        "Ideal: 12 a 25 participantes",
        "Incluir: Usuarios cotidianos, roles operativos y líderes"
      ]
    },
    {
      id: "mensaje",
      heading: "7. Mensaje De Inscripción",
      body: "La forma de presentar el proceso es vital. Debe quedar claro que no se busca vigilar ni evaluar personas, sino aprender juntos sobre cómo cambia el trabajo.",
      callout: "Estamos iniciando una lectura breve para entender mejor cómo está cambiando el trabajo con IA. No buscamos evaluar personas, sino identificar patrones y oportunidades de mejora."
    },
    {
      id: "induccion",
      heading: "8. Inducción Mínima",
      body: "Antes de arrancar, se requiere una explicación breve para evitar malentendidos. Cada rol necesita entender su propósito y qué recibirá a cambio.",
      bullets: [
        "Participantes: Qué es y por qué no es vigilancia",
        "Stewards: Marco de señales y fenómenos",
        "Sponsor: Propósito ejecutivo y decisiones posibles"
      ]
    },
    {
      id: "operativo",
      heading: "9. Compromisos Operativos",
      body: "El cliente no necesita rediseños complejos, solo comprometer condiciones simples de tiempo y apertura.",
      bullets: [
        "Ventana: 1-2 semanas (Signal Readout) o 4-6 (Piloto)",
        "Tiempo: Pocos minutos por instrumento",
        "Sesión de devolución e interpretación"
      ]
    },
    {
      id: "informacion",
      heading: "10. Información Inicial",
      body: "Definir el grupo, el alcance y los flujos relevantes. Livingtelligence opera con herramientas de baja fricción (Google Workspace) para empezar rápido.",
      footer: "El valor no depende de capturarlo todo, sino de observar bien lo suficiente para encontrar señales relevantes."
    },
    {
      id: "limites",
      heading: "11. Qué No Debe Esperar El Cliente",
      body: "Nombrar límites evita expectativas equivocadas. Livingtelligence no sustituye la gestión ni la estrategia humana; las vuelve más observables.",
      bullets: [
        "No es una auditoría técnica",
        "No es evaluación de desempeño",
        "No es certificación de madurez",
        "No es implementación completa de Custodian"
      ]
    },
    {
      id: "posteriore",
      heading: "12. Qué Puede Recibir Después",
      body: "El primer ciclo busca hacer visible el campo para decidir mejor. Puede abrir la puerta a formación de stewards o continuidad mensual con Custodian.",
      bullets: [
        "Signal Readout e informe ejecutivo",
        "Lectura de fenómenos activos",
        "Mapa de preocupaciones e indicios",
        "Recomendaciones de siguiente paso"
      ]
    },
    {
      id: "buena-preparacion",
      heading: "13. Señales De Buena Preparación",
      body: "Una organización está lista para iniciar cuando se han alineado las voluntades y los roles necesarios. No necesita estar madura técnicamente; necesita estar dispuesta a observar honestamente lo que ya está ocurriendo.",
      bullets: [
        "Existe sponsor legitimador",
        "Existe o puede nombrarse steward",
        "Hay una cohorte definida",
        "Claridad sobre alcance y uso de IA"
      ]
    },
    {
      id: "preguntas",
      heading: "14. Preguntas Para La Primera Conversación",
      body: "Antes de iniciar, conviene conversar sobre los motivos y sospechas que impulsan la observación, así como las capacidades que se desean proteger.",
      bullets: [
        "¿Por qué quieren observar este tema ahora?",
        "¿Qué usos de IA ya están apareciendo?",
        "¿Qué capacidades humanas quieren fortalecer?",
        "¿Quién podría actuar como steward?"
      ]
    },
    {
      id: "resumen",
      heading: "15. Resumen Final",
      body: "El cliente aporta contexto, legitimidad y participación. Livingtelligence aporta el marco, el instrumento y la capacidad de lectura. Cuando ambas partes se encuentran, la organización empieza a observar cómo está cambiando su propia inteligencia.",
      callout: "Observar cómo está cambiando nuestra inteligencia en la era de la IA es la base de la soberanía organizacional."
    }
  ],
  cierre: {
    title: "Próximos pasos",
    body: "Si su organización cuenta con las condiciones mínimas de sponsorship y stewardship, está lista para un primer Signal Readout.",
    footer: "Livingtelligence ayuda a ver qué está cambiando con la IA antes de que se vuelva problema.",
    cta: "Inicia tu Signal Readout",
    sub_cta: "Solicita acceso al Bridge Protocol completo."
  },
  metadata: [
    "Livingtelligence",
    "Observando fenómenos de la co-inteligencia",
    "Bridge Protocol Document _ 2026",
    "Client Readiness Kit v1",
    "Propiedad Intelectual Livingtelligence"
  ]
};

export default function ArticleClientReadiness() {
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
            {ARTICLE.sections.map((section) => (
              <motion.section key={section.id} {...fadeIn}>
                <div className="section-divider" />
                <div className="grid md:grid-cols-12 gap-8">
                  <div className="md:col-span-4">
                    <h2 className="heading-secondary">{section.heading}</h2>
                  </div>
                  <div className="md:col-span-8 space-y-8">
                    <p className="body-editorial !max-w-none !mb-0">{section.body}</p>
                    {section.bullets && (
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                        {section.bullets.map((bullet, i) => (
                          <li key={i} className="flex gap-3 text-sm text-living-text-muted">
                            <span className="w-1.5 h-1.5 rounded-full bg-living-green mt-1.5 shrink-0" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {section.callout && (
                      <div className="p-8 border-l-4 border-living-green bg-neutral-50 text-xl leading-snug font-medium italic">
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

          <footer className="mt-48 pt-20 border-t-2 border-living-green">
            <motion.div {...fadeIn} className="grid grid-cols-1 md:grid-cols-2 gap-12 text-[10px] uppercase tracking-[0.3em] text-living-text-muted">
               <div className="space-y-2">
                  <p className="text-base font-bold text-living-text-main normal-case tracking-normal">Livingtelligence</p>
                  <p>Bridge Protocol Document _ 2026</p>
                  <p>Client Readiness Kit v1</p>
               </div>
               <div className="md:text-right space-y-2">
                  <p>© 2026 Livingtelligence Assets</p>
                  <p>Propiedad Intelectual</p>
               </div>
            </motion.div>
          </footer>
        </div>
      </main>
    </div>
  );
}
