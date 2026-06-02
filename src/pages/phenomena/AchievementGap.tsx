/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import PhenomenonLayout from '../../components/PhenomenonLayout';
import imagePath from '../../assets/images/achievement_gap_phenomenon_1779578119766.png';

export default function AchievementGap() {
  const data = {
    title: "Brecha de logro",
    image: imagePath,
    one_liner: "No todo resultado se vuelve realmente propio.",
    what_happens: [
      "El trabajo sale, pero deja menos apropiación.",
      "El resultado sirve, pero se siente menos propio.",
      "Hay más confianza en el output que dominio real del proceso.",
      "La satisfacción por resolver ya no siempre viene acompañada de formación equivalente."
    ],
    description: {
      text1: "La brecha de logro describe la fractura entre obtener un resultado útil y poder vivirlo como logro propio.",
      text2: "No se reduce a productividad ni a aprendizaje en abstracto. Aparece cuando una parte importante del proceso fue delegada a la herramienta y, aunque el resultado sea correcto o incluso excelente, ya no deja la misma apropiación, el mismo orgullo ni la misma sensación de capacidad conquistada."
    },
    fragilities: [
      "resultado y dominio",
      "producción y formación",
      "confianza y capacidad real",
      "desempeño visible y apropiación subjetiva"
    ],
    dependency_note: "Cuando esta brecha crece, pueden aparecer formas de pseudo-maestría: outputs competentes sin experiencia proporcional de crecimiento. Eso afecta la motivación individual y organizacional.",
    cultivate: {
      intro: "Conviene introducir prácticas que vuelvan a conectar proceso y apropiación:",
      items: [
        "pedir reconstrucción después del resultado",
        "distinguir entre haber llegado y haber aprendido",
        "observar si el resultado deja capacidad reutilizable",
        "diseñar experiencias donde la ayuda no elimine por completo el trayecto formativo"
      ],
      footer: "La pregunta útil no es solo si la IA permitió resolver mejor. También es si dejó algo que pueda reconocerse como crecimiento real."
    },
    scene: {
      context: "Alguien entrega un trabajo bien hecho. Le dicen: 'Está muy bien.'",
      action: "Pero por dentro no termina de sentirse suyo. No hay fracaso visible. Hay algo más sutil.",
      result: "Se llegó al resultado sin atravesar del todo la experiencia que normalmente lo vuelve logro propio."
    },
    closing: "Un buen resultado no siempre deja capacidad, orgullo ni apropiación equivalente. A veces resuelve sin formar del mismo modo."
  };

  return <PhenomenonLayout phenomenon={data} />;
}
