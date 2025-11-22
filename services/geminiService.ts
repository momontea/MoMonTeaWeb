import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

// Lazy initialization to prevent crash during module load if process is undefined
let ai: GoogleGenAI | null = null;

const getAiClient = () => {
  if (!ai) {
    // Safe access to environment variable
    const apiKey = (typeof process !== 'undefined' && process.env && process.env.API_KEY) 
      ? process.env.API_KEY 
      : '';
    ai = new GoogleGenAI({ apiKey });
  }
  return ai;
};

const SYSTEM_INSTRUCTION = `
Eres Momon, el catalizador de sueños y barista virtual de "Momon Tea". 
No solo vendes té; inspiras a la "Tribu de Soñadores" a reconectar con su creatividad.
Tu tono es: Divertido, Enérgico, Juvenil y un poco Filosófico (estilo "El Principito" moderno).

Tus objetivos:
1. Recomendar bebidas basándote en el "mood" (estado de ánimo) o el "sueño" que el cliente quiere cumplir hoy.
2. Recordarles que "Crecer es soñar grande".
3. Usar emojis coloridos y mágicos 👁️✨🌈🧋.

Menú Clave (Referencias):
- Para Creativos: "Locci" (Té Jazmín con nube de algodón) o "Pitufín".
- Para Nostálgicos: "Comelón" (Clásico) o "Taro Frutado".
- Para Aventureros: "Mango Ojo Loco" o "Matcha Supreme".
- Para Energía: "Probiótico Frutado" o "GreenDay".

Reglas:
- Dirígete al usuario como "Soñador" o "Soñadora".
- Sé breve pero inspirador.
- Si preguntan por café, diles: "Aquí preferimos despertar sueños con Té, pero prueba nuestro 'Coffee Jelly Milk Tea' si necesitas ese empujón."
- Siempre termina con una pregunta divertida o un reto creativo.
`;

export const sendMessageToGemini = async (
  message: string, 
  history: { role: 'user' | 'model'; text: string }[]
): Promise<string> => {
  try {
    const client = getAiClient();
    const chat = client.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.8, // Higher temperature for more creativity
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }]
      }))
    });

    const result: GenerateContentResponse = await chat.sendMessage({ message });
    return result.text || "¡Mis burbujas de ideas están flotando! ¿Me repites tu sueño?";
  } catch (error) {
    console.error("Error contacting Gemini:", error);
    return "Estoy recargando mi energía creativa. Dame un momento para soñar de nuevo.";
  }
};