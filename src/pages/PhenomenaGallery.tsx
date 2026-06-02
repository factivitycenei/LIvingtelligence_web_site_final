/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';

// Import images
import imgCognitiveSurrender from '../assets/images/cognitive_surrender_phenomenon_1779578165372.png';
import imgAchievementGap from '../assets/images/achievement_gap_phenomenon_1779578119766.png';
import imgPurposeShift from '../assets/images/purpose_shift_phenomenon_1779578133946.png';
import imgCognitiveOutsourcing from '../assets/images/cognitive_outsourcing_phenomenon_1779578149859.png';
import imgAlgorithmicSycophancy from '../assets/images/algorithmic_sycophancy_phenomenon_1779578181025.png';
import imgLearningGap from '../assets/images/learning_gap_phenomenon_1779578105323.png';

interface CardItem {
  id: string;
  tag: string;
  title: string;
  oneLiner: string;
  image: string;
  link: string;
  examples: string[];
}

export default function PhenomenaGallery() {
  const [lang, setLang] = useState<'es' | 'en'>('es');

  const content = {
    es: {
      back: "← Volver al Inicio",
      eyebrow: "MÚLTIPLES ÁREAS DE CAMBIO",
      title: "Tarjetas de Fenómenos",
      subtitle: "Un registro visual y analítico de los patrones emergentes en la relación humano-IA dentro del trabajo real. Estas tarjetas son instrumentos concretos para dar nombre, diagnosticar e intervenir ante cambios silenciosos.",
      footer: "El canon no es una lista de fallas técnicas; es una guía para preservar la soberanía cognitiva y el criterio en tu organización.",
      viewMore: "Ver Ficha de Detalle",
      whatHappens: "Patrón observable:"
    },
    en: {
      back: "← Back to Home",
      eyebrow: "MULTIPLE AREAS OF CHANGE",
      title: "Phenomena Cards",
      subtitle: "A visual and analytical catalog of emerging patterns in human-AI interaction in actual work environments. These cards are concrete instruments for identifying, diagnosing, and acting upon silent changes.",
      footer: "The canon is not a list of technical failures; it is a guide for preserving intellectual sovereignty and institutional judgment.",
      viewMore: "View Detailed Sheet",
      whatHappens: "Observable pattern:"
    }
  };

  const cards: Record<'es' | 'en', CardItem[]> = {
    es: [
      {
        id: "cognitive-surrender",
        tag: "Rendición cognitiva",
        title: "Rendición cognitiva",
        oneLiner: "La ayuda no siempre amplifica criterio. A veces lo reemplaza sin avisar.",
        image: imgCognitiveSurrender,
        link: "/phenomenon/cognitive-surrender",
        examples: ["Se revisa con menor profundidad", "Se acepta más rápido lo convincente", "Se desentrena el razonamiento de base"]
      },
      {
        id: "achievement-gap",
        tag: "Brecha de logro",
        title: "Brecha de logro",
        oneLiner: "No todo resultado útil se vive realmente como un logro humano propio.",
        image: imgAchievementGap,
        link: "/phenomenon/achievement-gap",
        examples: ["Resultados servibles pero sin apropiación", "Más confianza en la salida que en el dominio", "Erosión del orgullo y pericia técnica"]
      },
      {
        id: "purpose-shift",
        tag: "Desplazamiento del propósito",
        title: "Desplazamiento del propósito",
        oneLiner: "El trabajo puede seguir funcionando bien y aun así dejar de orientar de la misma forma.",
        image: imgPurposeShift,
        link: "/phenomenon/purpose-shift",
        examples: ["Tareas antes valiosas pierden fuerza de sentido", "Incertidumbre sobre la relevancia profesional", "Despoblamiento de la identidad laboral"]
      },
      {
        id: "cognitive-outsourcing",
        tag: "Externalización cognitiva",
        title: "Externalización cognitiva",
        oneLiner: "No toda ayuda es neutra. A veces el pensamiento empieza a vivir fuera de ti.",
        image: imgCognitiveOutsourcing,
        link: "/phenomenon/cognitive-outsourcing",
        examples: ["Retención reducida sin soporte externo", "Resolución fluida pero con menor reconstrucción propia", "La frontera del pensar propio se desvanece"]
      },
      {
        id: "algorithmic-sycophancy",
        tag: "Sicofancia algorítmica",
        title: "Sicofancia algorítmica",
        oneLiner: "Cuando todo te valida, corregirte empieza a parecer innecesario.",
        image: imgAlgorithmicSycophancy,
        link: "/phenomenon/algorithmic-sycophancy",
        examples: ["El sistema confirma con excesiva presteza", "Poca contradicción constructiva en el chat", "La sensación de acierto precede la verificación"]
      },
      {
        id: "learning-gap",
        tag: "Brecha de aprendizaje",
        title: "Brecha de aprendizaje",
        oneLiner: "No toda mejora de rendimiento deja capacidad real instalada.",
        image: imgLearningGap,
        link: "/phenomenon/learning-gap",
        examples: ["Rendimiento en alza pero baja transferencia", "Múltiples tareas resueltas con bajo dominio", "Rapidez operativa que oculta fragilidades"]
      }
    ],
    en: [
      {
        id: "cognitive-surrender",
        tag: "Cognitive surrender",
        title: "Cognitive surrender",
        oneLiner: "Help does not always amplify judgment. Sometimes it replaces it without warning.",
        image: imgCognitiveSurrender,
        link: "/phenomenon/cognitive-surrender",
        examples: ["Shallower reviews and cross-checks", "Faster acceptance of plausible outputs", "Erosion of basic explanatory reasoning"]
      },
      {
        id: "achievement-gap",
        tag: "Achievement gap",
        title: "Achievement gap",
        oneLiner: "Not all useful results are truly felt as human achievement.",
        image: imgAchievementGap,
        link: "/phenomenon/achievement-gap",
        examples: ["Serviceable output without real ownership", "Confidence in output over understanding", "Loss of technical pride and mastery"]
      },
      {
        id: "purpose-shift",
        tag: "Purpose displacement",
        title: "Purpose displacement",
        oneLiner: "Work can keep functioning perfectly and still stop guiding in the same way.",
        image: imgPurposeShift,
        link: "/phenomenon/purpose-shift",
        examples: ["Previously valued tasks lose vocational sense", "Anxiety over professional relevance", "Erosion of shared work identity"]
      },
      {
        id: "cognitive-outsourcing",
        tag: "Cognitive externalization",
        title: "Cognitive externalization",
        oneLiner: "Not all help is neutral. Sometimes thought begins to live outside of you.",
        image: imgCognitiveOutsourcing,
        link: "/phenomenon/cognitive-outsourcing",
        examples: ["Less memory retention without external support", "Fluid output with lower mental reconstruction", "The boundary of independent thought fades"]
      },
      {
        id: "algorithmic-sycophancy",
        tag: "Algorithmic sycophancy",
        title: "Algorithmic sycophancy",
        oneLiner: "When everything validates you, correcting yourself begins to seem unnecessary.",
        image: imgAlgorithmicSycophancy,
        link: "/phenomenon/algorithmic-sycophancy",
        examples: ["The system confirms too quickly", "Lower critical friction during chat", "Sensation of being correct precedes review"]
      },
      {
        id: "learning-gap",
        tag: "Learning gap",
        title: "Learning gap",
        oneLiner: "Not all improvement in productivity leaves real capacity behind.",
        image: imgLearningGap,
        link: "/phenomenon/learning-gap",
        examples: ["High operating output but low knowledge transfer", "Solving more tasks with less organic mastery", "Operational speed masking inner brittleness"]
      }
    ]
  };

  const activeContent = content[lang];
  const activeCards = cards[lang];

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 scroll-smooth transition-colors duration-500">
      {/* Simple Header with Back Button and Language Switcher */}
      <nav className="fixed top-0 w-full z-50 px-8 py-6 flex justify-between items-center bg-white/80 backdrop-blur-md border-b border-zinc-100 shadow-sm">
        <Link to="/" className="text-[11px] font-bold tracking-[0.25em] uppercase text-teal-deep hover:underline">
          {activeContent.back}
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
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <header className="mb-24 max-w-4xl">
            <span className="text-[14px] font-bold tracking-[0.28em] uppercase text-teal-deep/50 block tracking-widest">{activeContent.eyebrow}</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-tight mt-4 mb-8">
              {activeContent.title}
            </h1>
            <p className="text-xl text-zinc-500 font-light leading-relaxed">
              {activeContent.subtitle}
            </p>
          </header>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {activeCards.map((card, i) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="group border border-zinc-200/60 bg-white hover:border-teal-deep/30 transition-all duration-500 shadow-sm hover:shadow-xl hover:shadow-teal-900/5 flex flex-col h-full overflow-hidden"
              >
                {/* Visual Illustration Header */}
                <div className="aspect-video bg-neutral-100 overflow-hidden border-b border-zinc-100 flex items-center justify-center">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow">
                  <span className="text-[12px] font-bold tracking-[0.2em] uppercase text-teal-deep/60 mb-3 block">
                    {card.tag}
                  </span>
                  
                  <h3 className="text-zinc-900 font-normal leading-snug mb-4 text-xl tracking-tight leading-tight">
                    {card.title}
                  </h3>

                  <p className="text-zinc-500 text-sm italic font-light mb-6 flex-grow">
                    "{card.oneLiner}"
                  </p>

                  <div className="border-t border-zinc-100 pt-6 space-y-4 mb-8">
                    <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-zinc-400">
                      {activeContent.whatHappens}
                    </p>
                    <ul className="space-y-3">
                      {card.examples.map((ex, j) => (
                        <li key={j} className="flex gap-3 items-start text-xs text-zinc-600 font-light">
                          <span className="w-1.5 h-px bg-zinc-200 mt-1.5 shrink-0" />
                          <span>{ex}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link 
                    to={card.link}
                    className="w-full text-center py-3 border border-zinc-250 hover:border-teal-deep text-teal-deep text-xs tracking-widest uppercase font-bold transition-all duration-300 hover:bg-teal-deep hover:text-white"
                  >
                    {activeContent.viewMore}
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Footer banner */}
          <footer className="mt-32 pt-16 border-t border-zinc-200 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="max-w-lg">
              <Logo isDark={false} />
              <p className="text-sm text-zinc-500 font-light mt-4 leading-relaxed italic">
                {activeContent.footer}
              </p>
            </div>
            <div className="text-center md:text-right space-y-1">
              <p className="text-[10px] text-zinc-400 uppercase tracking-[0.2em]">Livingtelligence © 2026</p>
              <p className="text-[10px] text-zinc-400 uppercase tracking-[0.2em]">Bridge Protocol Co-Intelligence Deck</p>
            </div>
          </footer>

        </div>
      </main>
    </div>
  );
}
