import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { appRouter } from "@ai-interview-coach/api";

const server = Bun.serve({
  port: 4000,

  fetch(req) {
    return fetchRequestHandler({
      endpoint: "/trpc",
      req,
      router: appRouter,
      createContext: () => ({}),
    });
  },
});

console.log(`API running at http://localhost:${server.port}`);