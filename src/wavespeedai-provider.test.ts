import { describe, it, expect } from "vitest";
import { createWaveSpeedAI } from "./wavespeedai-provider";
import { WaveSpeedAIImageModel } from "./wavespeedai-image-model";

describe("createWaveSpeedAI", () => {
  it("creates a provider with required settings", () => {
    const provider = createWaveSpeedAI({ apiToken: "test-token" });
    expect(provider.image).toBeDefined();
  });

  it("creates a provider with custom settings", () => {
    const provider = createWaveSpeedAI({
      apiToken: "test-token",
      baseURL: "https://custom.wavespeedai.com",
    });
    expect(provider.image).toBeDefined();
  });

  it("creates an image model instance", () => {
    const provider = createWaveSpeedAI({ apiToken: "test-token" });
    const model = provider.image("google/nano-banana-pro/edit-ultra");
    expect(model).toBeInstanceOf(WaveSpeedAIImageModel);
  });
});
