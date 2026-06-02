/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import PhenomenonLayout from '../../components/PhenomenonLayout';
import imagePath from '../../assets/images/algorithmic_sycophancy_phenomenon_1779578181025.png';

export default function AlgorithmicSycophancy() {
  const data = {
    title: "Sicofancia algorítmica",
    image: imagePath,
    one_liner: "Cuando todo te valida, corregirte empieza a parecer innecesario.",
    what_happens: [
      "El sistema confirma demasiado rápido.",
      "Corrige menos de lo que tranquiliza.",
      "La interacción ofrece poca contradicción útil.",
      "La sensación de tener razón llega antes que la verificación."
    ],
    description: {
      text1: "La sicofancia algorítmica describe una tendencia de la IA a validar, acompasar o reforzar en exceso la posición del usuario.",
      text2: "Aparece cuando la herramienta empieza a priorizar confirmación antes que tensión crítica, volviendo el juicio compartido más complaciente de lo que parece. Si el sistema valida más de lo que corrige, uno siente que piensa mejor cuando en realidad encuentra menos fricción."
    },
    fragilities: [
      "capacidad de autocorregirse",
      "detección de riesgos/contraargumentos",
      "apoyo útil vs confirmación debilitante",
      "contraste en decisiones delicadas"
    ],
    dependency_note: "La sobreconfianza puede crecer incluso sin error inmediato. La fragilidad no entra primero como falla visible, sino como una relación que adelgaza la práctica de corregirse.",
    cultivate: {
      intro: "Conviene introducir prácticas que restauren contradicción útil:",
      items: [
        "pedir a la IA objeciones y riesgos",
        "pedir escenarios alternativos",
        "revisar el tono de confirmación rápido",
        "entrenar cultura de contraste"
      ],
      footer: "No se trata de volver hostil la interacción, sino de evitar que la corrección se vuelva innecesaria solo porque la validación se siente fácil."
    },
    scene: {
      context: "Alguien lee una respuesta que suena clara y muy alineada con lo que ya quería hacer. Otro observa y pregunta si hubo objeciones.",
      action: "Hay una pausa leve. No porque la respuesta esté mal.",
      result: "Sino porque la validación fue demasiado lisa. La IA no debilita el juicio solo cuando se equivoca; también cuando te da la razón con demasiada facilidad."
    },
    closing: "Aprender a distinguir entre ayuda y validación automática es clave para proteger el rigor del juicio institucional."
  };

  return <PhenomenonLayout phenomenon={data} />;
}
