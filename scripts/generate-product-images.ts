// Generate 6 branded product images for AntA Shop, Fleet, Rental Manager, Home, Car, HR
// Using z-ai-web-dev-sdk image generation. Each image matches the dark hardcore
// fitness-studio aesthetic with mint-green/teal accents.
import ZAI from 'z-ai-web-dev-sdk';
import fs from 'fs';
import path from 'path';

const OUTPUT_DIR = '/home/z/my-project/public/marketing';

const PRODUCTS = [
  {
    slug: 'shop',
    label: 'AntA Shop',
    prompt: 'Abstract atmospheric product photography of a modern clothing retail store interior, dark moody lighting with deep teal and dark green color palette, racks of folded garments as silhouettes, glowing mint-green accent lighting on a POS counter with a screen, high-contrast cinematic, professional, no text no words no letters, minimal hard shadows',
  },
  {
    slug: 'fleet',
    label: 'AntA Fleet',
    prompt: 'Abstract atmospheric photograph of a fleet of delivery vehicles lined up at a warehouse at dusk, dark moody lighting, deep teal and dark green color palette, glowing mint-green GPS tracking lines overlaying the scene, professional cinematic, high-contrast, no text no words no letters',
  },
  {
    slug: 'rental',
    label: 'AntA Rental Manager',
    prompt: 'Abstract atmospheric photograph of a modern apartment building exterior at night, dark moody lighting, deep teal sky, warm mint-green glowing windows, professional real estate concept, high-contrast cinematic, no text no words no letters',
  },
  {
    slug: 'home',
    label: 'AntA Home',
    prompt: 'Abstract atmospheric photograph of a modern smart home interior living room, dark moody lighting, deep teal and dark green color palette, mint-green accent lighting on smart devices, minimalist, professional cinematic, high-contrast, no text no words no letters',
  },
  {
    slug: 'car',
    label: 'AntA Car',
    prompt: 'Abstract atmospheric photograph of a luxury car in a private dark garage, dramatic moody lighting, deep teal and dark green color palette, glowing mint-green accent lights on the car silhouette, tools and equipment as silhouettes in background, professional cinematic, high-contrast, no text no words no letters',
  },
  {
    slug: 'hr',
    label: 'AntA HR',
    prompt: 'Abstract atmospheric photograph of a modern HR office desk with documents and a laptop, dark moody lighting, deep teal and dark green color palette, glowing mint-green accent lighting, professional minimalist, high-contrast cinematic, no text no words no letters',
  },
];

async function generateOne(zai, product, attempt = 1) {
  const filename = `AntA-${product.slug}-campaign.png`;
  const outputPath = path.join(OUTPUT_DIR, filename);
  if (fs.existsSync(outputPath)) {
    console.log(`[${product.label}] Already exists, skipping`);
    return { success: true, path: outputPath, label: product.label, slug: product.slug };
  }
  try {
    console.log(`[${product.label}] Generating (attempt ${attempt})...`);
    const response = await zai.images.generations.create({
      prompt: product.prompt,
      size: '1024x1024',
    });
    if (!response?.data?.[0]?.base64) {
      throw new Error('No base64 in response');
    }
    const buffer = Buffer.from(response.data[0].base64, 'base64');
    fs.writeFileSync(outputPath, buffer);
    const sizeKb = Math.round(buffer.length / 1024);
    console.log(`[${product.label}] ✓ Saved ${filename} (${sizeKb} KB)`);
    return { success: true, path: outputPath, label: product.label, slug: product.slug };
  } catch (err) {
    console.error(`[${product.label}] ✗ Attempt ${attempt} failed: ${err.message}`);
    if (attempt < 3) {
      await new Promise((r) => setTimeout(r, 2000 * attempt));
      return generateOne(zai, product, attempt + 1);
    }
    return { success: false, error: err.message, label: product.label, slug: product.slug };
  }
}

async function main() {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }
  const zai = await ZAI.create();
  const results = [];
  // Sequential to avoid rate limits
  for (const product of PRODUCTS) {
    const r = await generateOne(zai, product);
    results.push(r);
  }
  console.log('\n===== SUMMARY =====');
  for (const r of results) {
    if (r.success) {
      console.log(`✓ ${r.label}: ${r.path}`);
    } else {
      console.log(`✗ ${r.label}: ${r.error}`);
    }
  }
}

main().catch((err) => {
  console.error('Fatal:', err);
  process.exit(1);
});
