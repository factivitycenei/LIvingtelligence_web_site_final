/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const PRIVACY_DOCUMENT = {
  title: "Nota de Privacidad",
  subtitle: "Transparencia y claridad sobre el manejo de tus datos en Livingtelligence.",
  sections: [
    {
      heading: "Qué datos recopilamos",
      content: "Podemos recopilar datos como nombre, correo electrónico, empresa, rol, respuestas a formularios breves y mensajes enviados voluntariamente por el usuario."
    },
    {
      heading: "Para qué los usamos",
      content: "Usamos esos datos para responder solicitudes, compartir documentos o materiales relacionados, dar seguimiento a conversaciones exploratorias, organizar el contacto comercial o editorial y entender mejor qué tipo de interés o necesidad expresó el usuario."
    },
    {
      heading: "Dónde pueden almacenarse",
      content: "Los datos pueden gestionarse en herramientas operativas como formularios del sitio, hojas de cálculo de seguimiento o sistemas CRM. Estas herramientas se utilizan únicamente para organizar y atender la relación iniciada por el usuario."
    },
    {
      heading: "Qué no hacemos",
      content: "No vendemos datos personales. No compartimos datos con terceros para fines publicitarios ajenos. No usamos la información para fines no relacionados con la interacción iniciada por el usuario."
    },
    {
      heading: "Solicitudes sobre tus datos",
      content: "Si deseas actualizar, corregir o eliminar tus datos, puedes escribir al correo de contacto que aparece en este sitio (aflores@livingtelligence.com)."
    }
  ]
};

export default function Privacy() {
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
        <div className="max-w-4xl mx-auto">
          
          {/* Top Header */}
          <header className="mb-24">
            <motion.div {...fadeIn}>
              <span className="header-label">Livingtelligence / Legal</span>
              <h1 className="heading-primary">{PRIVACY_DOCUMENT.title}</h1>
              <p className="text-xl md:text-2xl leading-relaxed text-living-text-muted font-normal max-w-3xl tracking-tight">
                {PRIVACY_DOCUMENT.subtitle}
              </p>
            </motion.div>
          </header>

          <div className="space-y-20">
            {PRIVACY_DOCUMENT.sections.map((section, i) => (
              <motion.section key={i} {...fadeIn}>
                <div className="section-divider" />
                <div className="grid md:grid-cols-12 gap-8">
                  <div className="md:col-span-4">
                    <h2 className="heading-secondary text-sm">{section.heading}</h2>
                  </div>
                  <div className="md:col-span-8">
                    <p className="text-lg leading-relaxed text-living-text-muted">
                      {section.content}
                    </p>
                  </div>
                </div>
              </motion.section>
            ))}
          </div>

          {/* Footer */}
          <footer className="mt-48 pt-20 border-t border-living-border">
            <motion.div {...fadeIn}>
              <p className="text-xs font-bold tracking-widest uppercase text-living-text-muted opacity-50">
                Última actualización: Mayo 2026
              </p>
            </motion.div>
          </footer>

        </div>
      </main>
    </div>
  );
}
