/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import PhenomenonLayout from '../../components/PhenomenonLayout';
import imagePath from '../../assets/images/purpose_shift_phenomenon_1779578133946.png';

export default function PurposeShift() {
  const data = {
    title: "Desplazamiento del propósito",
    image: imagePath,
    one_liner: "El trabajo puede seguir funcionando y aun así dejar de orientar del mismo modo.",
    what_happens: [
      "Tareas antes valiosas pierden fuerza como fuente de sentido.",
      "Aparece ansiedad sobre relevancia y valor preservable.",
      "La organización sigue operando, pero algo importante se vacía.",
      "El trabajo deja de ofrecer la misma orientación personal o institucional."
    ],
    description: {
      text1: "El desplazamiento del propósito describe un cambio donde el trabajo empieza a perder su capacidad para orientar, dar identidad y estructurar esfuerzo compartido.",
      text2: "Esto no siempre aparece como crisis abierta. Muchas veces entra como niebla. La organización sigue funcionando, la productividad puede incluso subir, y sin embargo se vuelve menos claro para qué parte del trabajo sigue siendo constitutiva del valor humano."
    },
    fragilities: [
      "trabajo y sentido",
      "desempeño y orientación",
      "identidad profesional y valor vivido",
      "operación y propósito institucional"
    ],
    dependency_note: "Cuando este fenómeno crece, una organización puede seguir activa mientras pierde lenguaje para distinguir qué parte del trabajo quiere preservar.",
    cultivate: {
      intro: "Conviene abrir conversaciones que no se queden solo en eficiencia:",
      items: [
        "qué valor humano sigue siendo importante aquí",
        "qué parte del trabajo sigue orientando",
        "qué se está vaciando sin hacerse visible",
        "qué necesita ser rediseñado y qué necesita preservarse"
      ],
      footer: "La corrección no consiste en resistir todo cambio. Consiste en evitar que la transformación ocurra sin una conversación suficiente sobre sentido."
    },
    scene: {
      context: "Un equipo sigue entregando. Los números no alarman. El flujo se mantiene.",
      action: "Pero alguien pregunta: ¿Qué parte de este trabajo sigue siendo realmente importante para nosotros?",
      result: "La sala se queda un momento en silencio. Empieza a aparecer otra pregunta: ¿qué sigue orientando de verdad este trabajo?"
    },
    closing: "El problema no es solo que el trabajo cambie. También importa si, al cambiar, deja de ofrecer la orientación que antes ayudaba a sostener identidad."
  };

  return <PhenomenonLayout phenomenon={data} />;
}
