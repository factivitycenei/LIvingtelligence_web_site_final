/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import PhenomenonLayout from '../../components/PhenomenonLayout';
import imagePath from '../../assets/images/learning_gap_phenomenon_1779578105323.png';

export default function LearningGap() {
  const data = {
    title: "Brecha de aprendizaje",
    image: imagePath,
    one_liner: "No toda mejora de output deja capacidad instalada.",
    what_happens: [
      "El rendimiento sube, pero la transferencia sigue siendo baja.",
      "Se resuelven más tareas, pero no siempre con dominio equivalente.",
      "La adopción se ve exitosa antes de que el aprendizaje se estabilice.",
      "La organización parece más capaz de lo que realmente ha llegado a incorporar."
    ],
    description: {
      text1: "La brecha de aprendizaje describe el desfase entre rendimiento aparente con IA y aprendizaje realmente incorporado por personas o equipos.",
      text2: "No se centra solo en si el resultado se siente propio, sino en si deja capacidad transferible, reutilizable y estable. Aparece cuando la mejora de output avanza más rápido que el crecimiento real del dominio."
    },
    fragilities: [
      "desempeño y capacidad",
      "adopción y desarrollo",
      "output y transferencia",
      "velocidad operativa y aprendizaje real"
    ],
    dependency_note: "Cuando esta brecha crece, una organización puede depender más de la herramienta sin haber construido suficiente comprensión, criterio o autonomía para sostener esa mejora por sí misma.",
    cultivate: {
      intro: "Conviene observar no solo si el trabajo sale mejor, sino si deja capacidad reutilizable:",
      items: [
        "qué puede rehacerse sin apoyo inmediato",
        "qué se puede transferir a otra tarea similar",
        "cuánto dominio nuevo queda instalado",
        "donde la adopción va más rápido que la formación"
      ],
      footer: "La corrección no pasa por frenar toda eficiencia. Pasa por acompañar la adopción con prácticas que conviertan mejora de output en crecimiento real de capacidad."
    },
    scene: {
      context: "Un equipo revisa resultados y ve avance claro. Los entregables mejoraron. La velocidad también.",
      action: "Pero alguien pregunta si ese progreso podría sostenerse, explicarse o transferirse con el mismo nivel de calidad sin apoyo constante.",
      result: "La conversación cambia. Ya no se trata solo de haber resuelto, sino de haber aprendido."
    },
    closing: "Una adopción puede parecer exitosa antes de que la capacidad esté realmente instalada. Por eso no basta con mirar output: también hay que mirar cuánto aprendizaje queda."
  };

  return <PhenomenonLayout phenomenon={data} />;
}
