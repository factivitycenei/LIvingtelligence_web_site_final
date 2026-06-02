/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import PhenomenonLayout from '../../components/PhenomenonLayout';
import imagePath from '../../assets/images/cognitive_outsourcing_phenomenon_1779578149859.png';

export default function CognitiveOutsourcing() {
  const data = {
    title: "Externalización cognitiva",
    image: imagePath,
    one_liner: "No toda ayuda sigue siendo solo ayuda. A veces el pensamiento empieza a vivir fuera de ti.",
    what_happens: [
      "Se recuerda menos sin apoyo externo.",
      "Se resuelve más, pero se reconstruye menos.",
      "La herramienta carga parte estable del trabajo mental.",
      "La frontera entre pensar y apoyarse se vuelve borrosa."
    ],
    description: {
      text1: "La externalización cognitiva describe el desplazamiento sostenido de partes relevantes del trabajo mental hacia sistemas de IA.",
      text2: "Aparece cuando recordar, sintetizar, redactar o decidir dejan de ocurrir principalmente en la persona y la infraestructura externa se vuelve parte estable del proceso de pensar. No siempre entra como deterioro: muchas veces entra como alivio."
    },
    fragilities: [
      "acceso y dominio",
      "apoyo y formación",
      "memoria externa y capacidad propia",
      "resolución rápida y práctica mental"
    ],
    dependency_note: "Si esta externalización se vuelve estable sin observación, puede facilitar formas más intensas de cesión posterior de criterio.",
    cultivate: {
      intro: "Conviene reintroducir espacios donde el pensamiento siga ocurriendo en la persona:",
      items: [
        "reconstrucción sin apoyo inmediato",
        "transferencia de tareas sin la herramienta",
        "contraste entre output asistido y comprensión propia",
        "observación deliberada del trabajo desplazado"
      ],
      footer: "La pregunta útil no es si hay que dejar de usar ayuda. Es si el apoyo sigue formando o ya está sustituyendo el lugar de la capacidad."
    },
    scene: {
      context: "Alguien trabaja con normalidad. Todo parece fluir entre laptop, notas y respuestas sugeridas.",
      action: "Pero al intentar explicar qué parte pensó por sí mismo y qué parte solo fue ensamblando, aparece una pequeña niebla.",
      result: "No hay fracaso visible. Hay una frontera de soberanía intelectual que se fue moviendo."
    },
    closing: "El problema no es usar pensamiento asistido. El problema aparece cuando ya no es claro donde sigue ocurriendo realmente el trabajo de pensar."
  };

  return <PhenomenonLayout phenomenon={data} />;
}
