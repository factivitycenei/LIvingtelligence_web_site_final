/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import PhenomenonLayout from '../../components/PhenomenonLayout';
import imagePath from '../../assets/images/cognitive_surrender_phenomenon_1779578165372.png';

export default function CognitiveSurrender() {
  const data = {
    title: "Rendición cognitiva",
    image: imagePath,
    one_liner: "La ayuda no siempre amplifica criterio. A veces lo reemplaza sin avisar.",
    what_happens: [
      "Se revisa menos críticamente.",
      "Se acepta más rápido lo que suena convincente.",
      "Se reconstruye menos el razonamiento interno.",
      "La confianza descansa más en la respuesta que en el juicio."
    ],
    description: {
      text1: "La rendición cognitiva aparece cuando una parte sustantiva del trabajo de pensar deja de ocurrir en la persona y empieza a cederse a la herramienta.",
      text2: "No se trata de cualquier uso útil, sino del momento en que la ayuda deja de ser apoyo y empieza a sustituir silenciosamente el proceso propio de contraste, reconstrucción y criterio. Entra como comodidad funcional."
    },
    fragilities: [
      "calidad aparente vs sustantiva",
      "justificación de la corrección",
      "reconstrucción del camino de decisión",
      "soberanía cognitiva institucional"
    ],
    dependency_note: "Con el tiempo, esto puede erosionar la práctica deliberativa sin que la productividad caiga de inmediato. La eficiencia se mantiene, la soberanía se adelgaza.",
    cultivate: {
      intro: "No se trata de usar menos IA, sino de volver visible dónde sigue ocurriendo el trabajo de pensar:",
      items: [
        "más reconstrucción del razonamiento",
        "más contraste propio antes de aceptar",
        "más validación fuera del chat",
        "claridad sobre cuándo sustituye"
      ],
      footer: "La corrección pasa por reintroducir fricción sana allí donde el criterio empieza a cederse sin darse cuenta."
    },
    scene: {
      context: "Alguien presenta un borrador y dice: 'Quedó bastante bien.' Otra persona pregunta: 'Sí, pero ¿cómo llegaste a eso?'",
      action: "Hay una pausa. La respuesta ya no sale tan rápido.",
      result: "No hay engaño, pero algo importante se vuelve visible: resolver no siempre significa haber pensado."
    },
    closing: "La ayuda útil no se vuelve problema cuando acelera. Se vuelve problema cuando reemplaza silenciosamente el lugar donde todavía debería formarse criterio."
  };

  return <PhenomenonLayout phenomenon={data} />;
}
