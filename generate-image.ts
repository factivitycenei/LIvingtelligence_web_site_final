import { GoogleGenAI } from "@google/genai";
import fs from "fs";
import path from "path";

async function generateCanonicalImage() {
  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  const prompt = `A high-quality, minimalist architectural visualization of a 3D wireframe cube. 
  The cube is formed ONLY by a 5x5x5 grid of equidistant small dots (no lines, no wireframe, no filling). 
  Background is a clean, warm off-white (#fdfcfb). 
  Dots are subtle grey, with 3-5 specific nodes glowing in a deep teal color (#004d40). 
  The perspective is slightly off-center and asymmetrical. 
  The overall feel is serene, structural, and professional infrastructure. 
  High resolution, clean edges, no noise.`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3.1-flash-image-preview',
      contents: {
        parts: [{ text: prompt }],
      },
      config: {
        imageConfig: {
          aspectRatio: "1:1",
          imageSize: "1K"
        }
      },
    });

    for (const part of response.candidates[0].content.parts) {
      if (part.inlineData) {
        const base64Data = part.inlineData.data;
        const buffer = Buffer.from(base64Data, 'base64');
        
        // Ensure public directory exists
        const publicDir = path.join(process.cwd(), 'public');
        if (!fs.existsSync(publicDir)) {
          fs.mkdirSync(publicDir);
        }
        
        fs.writeFileSync(path.join(publicDir, 'canonical.png'), buffer);
        console.log("Image generated successfully at /public/canonical.png");
        return;
      }
    }
    console.error("No image data found in response");
  } catch (error) {
    console.error("Error generating image:", error);
  }
}

generateCanonicalImage();
