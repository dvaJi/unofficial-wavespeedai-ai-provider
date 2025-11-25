import { createJsonErrorResponseHandler } from "@ai-sdk/provider-utils";
import { z } from "zod/v4";

const wavespeedaiErrorSchema = z.object({
  detail: z.string().optional(),
  error: z.string().optional(),
});

export const wavespeedaiFailedResponseHandler = createJsonErrorResponseHandler({
  errorSchema: wavespeedaiErrorSchema,
  errorToMessage: (error) => error.detail ?? error.error ?? "Unknown WaveSpeedAI error",
});
