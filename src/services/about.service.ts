// src/services/about.service.ts
import { IAboutData } from "../interfaces/about.interface";
import { ABOUT_MOCK } from "../mocks/mock.about";

export class AboutService {
  static async getAboutData(): Promise<IAboutData> {
    // Simulamos un delay de API
    await new Promise((resolve) => setTimeout(resolve, 300));

    // En un entorno real, aquí haríamos fetch a la API real
    return ABOUT_MOCK;
  }

  static async downloadCV(): Promise<void> {
    // Lógica para descargar CV
    console.log("Descargando CV...");
    // Simulación de descarga
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
}
