import { Router } from "express";

const basicRouter = Router();

basicRouter.get("/", (_, res) => {
  res.send("Hello, World!");
});

export default basicRouter;
