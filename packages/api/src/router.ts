import { publicProcedure, router } from "./trpc";

export const appRouter = router({
  health: publicProcedure.query(() => {
    return {
      status: "ok",
      service: "ai-interview-coach-api",
    };
  }),
  register: publicProcedure.query(()=>{
    return{
        status:" ok",
        service:"SignUp"
    }
  }),
  login: publicProcedure.query(()=>{
    return {
        status:"ok",
        service:"SignIn"
    }
  })
});


export type AppRouter = typeof appRouter;