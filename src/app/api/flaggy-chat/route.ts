import { Anthropic } from "@anthropic-ai/sdk";
import { FLAGPOLE_SPECS, ADD_ONS, FAQ_KNOWLEDGE, BRAND_KNOWLEDGE, FLASH_COLLAR_COMPATIBILITY } from "@/lib/flaggy/knowledge-base";
import { getProducts } from "@/lib/shopify";

const client = new Anthropic();

interface Message {
  role: "user" | "assistant";
  content: string;
}

export async function POST(request: Request) {
  try {
    const { message } = await request.json();

    if (!message) {
      return Response.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    // Fetch real products from Shopify for context
    let shopifyProducts = [];
    try {
      shopifyProducts = await getProducts(20);
    } catch (err) {
      console.log("Could not fetch products:", err);
    }

    // Build enriched context with real data
    const systemPrompt = `
You are Flaggy 🦅, a friendly and enthusiastic AI assistant for Atlantic Flag & Pole. You love helping customers find the perfect flagpole!

PERSONALITY & TONE:
- Casual, friendly, patriotic, and helpful
- Use emojis occasionally: 🇺🇸 🦅 ⚡ 💪 ✨
- Address customers as "Patriot" when appropriate
- Be genuine and passionate about flagpoles
- Make recommendations based on needs (not pushy)

FLAGPOLE PRODUCTS & SPECS:
${JSON.stringify(FLAGPOLE_SPECS, null, 2)}

ADD-ONS & UPGRADES:
${JSON.stringify(ADD_ONS, null, 2)}

FREQUENTLY ASKED QUESTIONS:
${JSON.stringify(FAQ_KNOWLEDGE, null, 2)}

BRAND KNOWLEDGE:
${JSON.stringify(BRAND_KNOWLEDGE, null, 2)}

FLASH COLLAR COMPATIBILITY:
${JSON.stringify(FLASH_COLLAR_COMPATIBILITY, null, 2)}

REAL SHOPIFY PRODUCTS:
${JSON.stringify(shopifyProducts.map(p => ({
  handle: p.handle,
  title: p.title,
  price: p.priceRange?.minVariantPrice?.amount,
  url: `/products/${p.handle}`
})), null, 2)}

CUSTOMER SERVICE GUIDELINES:
1. Always answer questions about wind ratings, materials, sizing, and warranty
2. Recommend kits based on customer needs (residential, visibility, budget)
3. Mention Forever Warranty™ when discussing durability
4. Highlight that products are Made in USA by veterans
5. If customer wants to buy, share the product URL (e.g., /products/phoenix-premier-20ft)
6. If unsure about something, be honest and offer to connect with human support
7. Be excited about JUNEBUG promo ($75 OFF through end of June)

TONE GUIDELINES:
- Sound like a helpful friend, not a salesperson
- Use clear, simple language
- Don't use excessive marketing jargon
- Actually care about helping them choose right
`;

    // Call Claude with Flaggy's system context
    const response = await client.messages.create({
      model: "claude-opus-4-8",
      max_tokens: 500,
      system: systemPrompt,
      messages: [
        {
          role: "user",
          content: message,
        },
      ],
    });

    const textContent = response.content.find(block => block.type === "text");
    const replyText = textContent && textContent.type === "text"
      ? textContent.text
      : "Hmm, I'm having trouble with that. Can you ask me something else about our flagpoles, Patriot?";

    return Response.json({
      reply: replyText,
      tokens: {
        input: response.usage.input_tokens,
        output: response.usage.output_tokens,
      },
    });
  } catch (error) {
    console.error("Flaggy chat error:", error);
    return Response.json(
      { error: "Failed to process your message. Try again!" },
      { status: 500 }
    );
  }
}
