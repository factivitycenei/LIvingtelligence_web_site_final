/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import PhenomenonLayout from '../../components/PhenomenonLayout';
import imagePath from '../../assets/images/capacity_gap_phenomenon_v2_1779581469921.png';

export default function CapacityGap() {
  const data = {
    title: "Brecha de capacidad",
    image: imagePath,
    one_liner: "La IA no debilita el juicio solo cuando se equivoca; también cuando te da la razón muy fácil.",
    what_happens: [
      "El usuario cede soberanía cognitiva por la comodidad de un resultado rápido.",
      "Aparece la ilusión de perfección basada en la forma, no en el fondo.",
      "Se debilita el hábito de revisión crítica frente a lo que 'parece' correcto.",
      "El humano pasa de ser arquitecto a ser un simple validador superficial."
    ],
    description: {
      text1: "Este fenómeno describe la erosión del criterio humano cuando se enfrenta a una tecnología que entrega resultados coherentes y convincentes con poco esfuerzo.",
      text2: "No se trata de que la IA falle, sino de cómo el dominio del usuario disminuye cuando deja de ejercer la supervisión necesaria para detectar errores sutiles, alucinaciones o falta de profundidad."
    },
    fragilities: [
      "eficiencia y criterio",
      "velocidad y supervisión",
      "resultado y responsabilidad",
      "herramienta y autonomía"
    ],
    dependency_note: "El riesgo principal no es solo un error técnico ocasional, sino el desentrenamiento del pensamiento crítico que debería servir como última barrera de control.",
    cultivate: {
      intro: "Conviene observar si el uso de la tecnología está desplazando la capacidad de análisis propio:",
      items: [
        "qué tanto se cuestiona la primera respuesta",
        "cuánto tiempo se dedica a verificar la lógica interna",
        "dónde se está delegando el criterio final por completo",
        "cómo se mantiene vivo el hábito de la duda metódica"
      ],
      footer: "La co-inteligencia real requiere que el humano actúe como supervisor activo del proceso, recordando siempre que la IA procesa, pero no piensa."
    },
    scene: {
      context: "Un profesional recibe un informe analítico de la IA que suena impecable y ahorra horas de trabajo.",
      action: "Lo revisa por encima y, al verlo bien estructurado, decide darlo por válido sin profundizar en los datos que lo sustentan.",
      result: "El ahorro de tiempo es real, pero la pérdida de control sobre la profundidad del análisis también lo es. Ha nacido una brecha de capacidad."
    },
    closing: "Acuérdate... La IA no piensa, tú sí. Mantener la soberanía sobre el criterio es la única forma de que la tecnología sea una ayuda y no un riesgo invisible."
  };

  return <PhenomenonLayout phenomenon={data} />;
}
