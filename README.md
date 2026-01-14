# AI SDK - WaveSpeedAI Provider

The **WaveSpeedAI provider** for the [AI SDK](https://ai-sdk.dev/docs) enables integration with the [WaveSpeedAI API](https://wavespeed.ai/) for image generation.

## Setup

The WaveSpeedAI provider is available in the `wavespeedai-ai-provider` package. You can install it with

```bash
npm install wavespeedai-ai-provider@latest
```

## Usage

To use the WaveSpeedAI provider, you'll need to set up your API token:

```bash
WAVESPEEDAI_API_TOKEN="your-api-token-here"
```

Then import and use the provider for image generation:

```ts
import { wavespeedai } from "wavespeedai-ai-provider";
import { experimental_generateImage as generateImage } from "ai";

const { image } = await generateImage({
  model: wavespeedai.image("model-id"), // Replace with actual WaveSpeedAI model ID
  prompt: "A detailed description of the image you want to generate",
});

// Save the generated image
const filename = `image-${Date.now()}.png`;
fs.writeFileSync(filename, image.uint8Array);
console.log(`Image saved to ${filename}`);
```

If you need to pass additional inputs to the model besides the prompt, use the `providerOptions.wavespeedai` property:

```ts
const { image } = await generateImage({
  model: wavespeedai.image("google/nano-banana-pro/text-to-image"),
  prompt: "A detailed cat working as a café barista",
  providerOptions: {
    wavespeedai: {
      customInput: "this model needs this extra field",
    },
  },
});
```

## Configuration

You can also create a custom provider instance with specific settings:

```ts
import { createWaveSpeedAI } from "wavespeedai-ai-provider";

const wavespeedaiProvider = createWaveSpeedAI({
  apiToken: process.env.WAVESPEEDAI_API_TOKEN, // Optional if using environment variables
  baseURL: "https://api.wavespeed.ai/api/v3", // Optional, uses default if not provided
  headers: {}, // Optional additional headers
  fetch: undefined, // Optional custom fetch implementation
});

// Use the custom provider instance
const { image } = await generateImage({
  model: wavespeedaiProvider.image("model-id"),
  prompt: "Your prompt here",
});
```
