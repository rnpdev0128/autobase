// src/inngest/functions.ts
import { inngest } from "./client";

export const helloWorld = inngest.createFunction(
  { id: "hello-world", triggers: { event: "test/hello.world" } },
  async ({ event, step }) => {

    await step.sleep("pause", "1s");

    return { message: `Task ${event.data.id} complete`};
  }
);