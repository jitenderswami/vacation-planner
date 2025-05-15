import express from "express";
import basicRouter from "./routes/basic";

const app = express();

const PORT = process.env.PORT || 3002;

//Routes
app.use("/basic", basicRouter);

app.get("/", (_, res) => {
  res.send("Welcome to the Vacation planner!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Visit http://localhost:${PORT}/basic to see the basic route`);
});
