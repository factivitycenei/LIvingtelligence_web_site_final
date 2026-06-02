/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

// Content strictly from partner_offer_bridge_v1.json
const DOCUMENT = {
  document_id: "partner_offer_bridge_v1",
  title: "Livingtelligence para Partners",
  subtitle: "Una capacidad lista para llevar a clientes que ya están integrando IA.",
  sections: [
    {
      section_id: "opening",
      heading: "Una capacidad lista para llevar a clientes",
      body: "Este documento resume de forma esquemática qué puede ofrecer Livingtelligence a consultores, integradores, boutiques de transformación o partners que ya tienen acceso a clientes empresariales y quieren abrir una conversación de más valor alrededor de la IA.",
    },
    {
      section_id: "problem",
      heading: "Qué problema resuelve",
      body: "Muchas empresas ya adoptan IA, pero todavía no tienen una forma suficientemente clara de leer los fenómenos involuntarios que emergen con esa integración ni de convertir esa lectura en una intervención útil y desplegable.",
      bullets: [
        "Leer fenómenos involuntarios",
        "Distinguir entre ayuda, dependencia y deriva",
        "Proteger criterio, agencia y claridad organizacional",
        "Convertir lectura en intervención útil"
      ],
      callout: "Ahí aparece un espacio de valor que muchos actores todavía no están ocupando bien."
    },
    {
      section_id: "what_partner_can_take",
      heading: "Qué puede llevar un partner a sus clientes",
      body: "Livingtelligence aporta una capa estructurada de observación, lectura fenomenológica, diagnóstico inicial, materiales de activación, cursos y jornadas, con continuidad posible.",
      bullets: [
        "Observación",
        "Lectura fenomenológica",
        "Diagnóstico inicial",
        "Materiales de activación",
        "Cursos y jornadas",
        "Continuidad posible"
      ]
    },
    {
      section_id: "delivery_flow",
      heading: "Secuencia de despliegue",
      body: "En la práctica, la oferta puede entrar de forma ligera y luego crecer.",
      bullets: [
        "Etapa 1. Reconocimiento: activo puente y conversación ejecutiva",
        "Etapa 2. Triage: clasificación inicial de urgencia, madurez e interés",
        "Etapa 3. Signal Readout Inicial: señales, lectura estructurada, devolución ejecutiva",
        "Etapa 4. Intervención: jornadas, stewardship, orientación sobre revisión, criterio y dependencia",
        "Etapa 5. Continuidad: seguimiento, materiales, cursos, memoria longitudinal"
      ]
    },
    {
      section_id: "value_layers",
      heading: "Qué valor genera",
      body: "La oferta crea valor en cuatro planos: cliente final, humanos dentro de la organización, organización y partner.",
      bullets: [
        "Cliente final: reconoce mejor qué está ocurriendo y obtiene una primera lectura útil",
        "Humanos: devuelve valor al juicio y la agencia; protege dignidad profesional",
        "Organización: mejora claridad sobre revisión humana; fortalece capacidad institucional",
        "Partner: añade conversación de alto valor y abre nuevas líneas de advisory"
      ]
    },
    {
      section_id: "pricing_paths",
      heading: "Qué puede cotizarse",
      body: "La colaboración puede entrar por una cuenta concreta o ampliarse a un modelo más estructurado.",
      bullets: [
        "Signal Readout Inicial para una cuenta concreta",
        "Servicio amplio con jornadas, stewardship, cursos y materiales",
        "Modelos: llave en mano, co-delivery o lógica modular"
      ]
    },
    {
      section_id: "differentiator",
      heading: "Diferenciación",
      body: "No se trata de una herramienta o un assessment genérico. Es una combinación de lectura fenomenológica e intervención desplegable.",
      callout: "Permite llevar a sus clientes una ruta de intervención con materiales listos y capacidad de acompañamiento."
    }
  ],
  footer: [
    "Livingtelligence",
    "Capacidad lista para llevar a clientes",
    "con lectura, intervención y acompañamiento desplegable"
  ]
};

const BulletList = ({ items }: { items?: string[] }) => {
  if (!items) return null;
  return (
    <ul className="bullet-list">
      {items.map((item, i) => (
        <li key={i} className="bullet-item">
          <div className="bullet-point" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
};

export default function PartnerFactSheet() {
  const fadeIn = {
    initial: { opacity: 0, y: 15 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.21, 1, 0.44, 1] }
  };

  return (
    <div className="min-h-screen bg-living-bg scroll-smooth">
      {/* Simple Header with Back Button */}
      <nav className="fixed top-0 w-full z-50 px-8 py-6 flex justify-between items-center bg-living-bg/80 backdrop-blur-md border-b border-living-border">
        <Link to="/" className="text-[11px] font-bold tracking-[0.25em] uppercase text-living-green hover:underline">
          ← Volver al sitio
        </Link>
      </nav>

      <main className="pt-40 pb-24 px-8 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto">
          
          {/* Top Header */}
          <header className="mb-24">
            <motion.div {...fadeIn}>
              <span className="header-label">Livingtelligence / Partner Note</span>
              <h1 className="heading-primary">{DOCUMENT.title}</h1>
              <p className="text-2xl md:text-3xl leading-snug text-living-text-muted font-medium max-w-4xl tracking-tight">
                {DOCUMENT.subtitle}
              </p>
            </motion.div>
          </header>

          {/* Section 01: Opening */}
          <section className="mb-24">
            <motion.div {...fadeIn}>
              <span className="header-label">Apertura</span>
              <div className="section-divider" />
              <div className="grid md:grid-cols-12 gap-12">
                <div className="md:col-span-12">
                  <p className="body-editorial">{DOCUMENT.sections[0].body}</p>
                </div>
              </div>
            </motion.div>
          </section>

          {/* Section 02: Problem */}
          <section className="mb-24">
            <motion.div {...fadeIn}>
              <span className="header-label">Oportunidad</span>
              <div className="section-divider" />
              <div className="grid md:grid-cols-12 gap-12">
                <div className="md:col-span-8">
                  <h2 className="heading-secondary">{DOCUMENT.sections[1].heading}</h2>
                  <p className="body-editorial">{DOCUMENT.sections[1].body}</p>
                  <BulletList items={DOCUMENT.sections[1].bullets} />
                </div>
                <div className="md:col-span-4 flex items-end">
                  <div className="p-8 bg-living-green text-white text-xl leading-tight font-medium">
                    "{DOCUMENT.sections[1].callout}"
                  </div>
                </div>
              </div>
            </motion.div>
          </section>

          {/* Section 03 & 04: Offer & Flow */}
          <div className="grid md:grid-cols-2 gap-24 mb-24">
            <motion.section {...fadeIn}>
              <span className="header-label">Propuesta</span>
              <div className="section-divider" />
              <h2 className="heading-secondary">{DOCUMENT.sections[2].heading}</h2>
              <BulletList items={DOCUMENT.sections[2].bullets} />
            </motion.section>

            <motion.section {...fadeIn} transition={{ ...fadeIn.transition, delay: 0.1 }}>
              <span className="header-label">Secuencia</span>
              <div className="section-divider" />
              <h2 className="heading-secondary">{DOCUMENT.sections[3].heading}</h2>
              <div className="grid grid-cols-1 gap-2">
                {DOCUMENT.sections[3].bullets?.map((pkg, i) => (
                  <div key={i} className="px-4 py-3 border border-living-border bg-white text-sm font-medium text-living-text-muted flex items-center justify-between group hover:border-living-green transition-all">
                    <span>{pkg}</span>
                  </div>
                ))}
              </div>
            </motion.section>
          </div>

          {/* Section 05: Value Layers */}
          <section className="mb-24">
            <motion.div {...fadeIn}>
              <span className="header-label">Planos de valor</span>
              <div className="section-divider" />
              <h2 className="heading-secondary mb-10">{DOCUMENT.sections[4].heading}</h2>
              <div className="grid md:grid-cols-2 gap-12">
                {DOCUMENT.sections[4].bullets?.map((value, i) => {
                  const [target, desc] = value.split(': ');
                  return (
                    <div key={i} className="space-y-2 p-6 border border-living-border bg-neutral-50">
                      <h3 className="text-living-green font-bold uppercase tracking-widest text-[10px]">{target}</h3>
                      <p className="text-sm leading-relaxed text-living-text-muted">{desc}</p>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </section>

          {/* Section 06: Pricing Path */}
          <section className="mb-24">
            <motion.div {...fadeIn}>
              <span className="header-label">Colaboración</span>
              <div className="section-divider" />
              <div className="grid md:grid-cols-12 gap-12 items-start">
                <div className="md:col-span-12">
                  <h2 className="heading-secondary">{DOCUMENT.sections[5].heading}</h2>
                  <p className="body-editorial">{DOCUMENT.sections[5].body}</p>
                  <div className="grid md:grid-cols-3 gap-6">
                    {DOCUMENT.sections[5].bullets?.map((pkg, i) => (
                      <div key={i} className="p-4 border border-living-border text-sm font-medium text-living-text-muted">
                        {pkg}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </section>

          {/* Section 07: Differentiator (Quote) */}
          <section className="mb-32">
            <motion.div {...fadeIn}>
              <div className="section-divider" />
              <div className="bg-neutral-900 text-white p-12 md:p-20">
                 <h2 className="text-xs font-bold uppercase tracking-widest mb-8 text-living-green opacity-80">{DOCUMENT.sections[6].heading}</h2>
                 <p className="text-2xl md:text-3xl font-medium tracking-tight mb-8 max-w-4xl">
                   {DOCUMENT.sections[6].body}
                 </p>
                 <div className="text-living-green italic text-lg max-w-3xl border-t border-white/10 pt-8">
                   {DOCUMENT.sections[6].callout}
                 </div>
              </div>
            </motion.div>
          </section>

          {/* Footer */}
          <footer className="mt-48 pt-20 border-t-4 border-living-green">
            <motion.div {...fadeIn} className="grid md:grid-cols-12 gap-12">
              <div className="md:col-span-12">
                <div className="space-y-1">
                  {DOCUMENT.footer.map((line, i) => (
                    <p key={i} className={`${i === 0 ? 'text-2xl font-bold tracking-tight mb-2' : 'text-sm text-living-text-muted'}`}>
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>
          </footer>

        </div>
      </main>
    </div>
  );
}
