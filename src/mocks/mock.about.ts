// src/mocks/about.mock.ts
import { IAboutData } from "../interfaces/about.interface";

export const ABOUT_MOCK: IAboutData = {
  title: "Sobre Mí",
  highlightWord: "Mí",
  paragraphs: [
    "Como <strong>Tecnólogo en Análisis y Desarrollo de Sistemas de Información</strong> graduado del SENA (2023) y actualmente cursando <strong>Ingeniería de Sistemas en la Fundación Universitaria del Área Andina</strong> con enfoque en <span className='highlight-text'>Informática Forense y Ciberseguridad</span>, he desarrollado una sólida base técnica que combino con experiencia práctica en desarrollo full-stack.",
    "En mi rol como <strong>Analista de Soporte en Recaudos Integrados S.A.S</strong>, aplico soluciones tecnológicas innovadoras que mejoran procesos empresariales. Esta experiencia me ha permitido desarrollar una visión integral que va desde la comprensión de necesidades del usuario hasta la implementación de sistemas robustos.",
  ],
  expertise: {
    title: "Mis enfoques principales:",
    items: [
      { icon: "fas fa-laptop-code", text: "Desarrollo de software a medida" },
      { icon: "fas fa-shield-alt", text: "Seguridad de aplicaciones" },
      { icon: "fas fa-project-diagram", text: "Arquitecturas escalables" },
      { icon: "fas fa-user-secret", text: "Prácticas de ciberseguridad" },
    ],
  },
  finalParagraph:
    "Mi metodología integra diseño centrado en el usuario, desarrollo ágil y buenas prácticas de programación. Dominio todo el ciclo de desarrollo, desde prototipado en Figma hasta deployment, pasando por documentación técnica detallada y testing exhaustivo.",
  stats: [
    { number: "2+", text: "Años de experiencia" },
    { number: "15+", text: "Tecnologías dominadas" },
    { number: "∞", text: "Pasión por aprender" },
  ],
  downloadCvText: "  Descargar CV",
};
