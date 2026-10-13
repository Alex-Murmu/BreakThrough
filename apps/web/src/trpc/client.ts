import { createTRPCClient, httpBatchLink } from "@trpc/client";
import type { AppRouter } from "@ai-interview-coach/api";

export const trpcClient = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: "http://localhost:4000/trpc",
    }),
  ],
});