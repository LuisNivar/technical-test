import express from "express";
import { config } from "./dotenv.js";

config();
const PORT = globalThis.process.env.PORT ?? 3000;

export const app = express();
app.use(express.json());

const ITEMS = [
  {
    id: 1,
    content: "Item 1",
  },
];

app.get("/items", (_, res) => {
  return res.json(ITEMS);
});

app.get("/items/:id", (req, res) => {
  const { id } = req.params;
  if (!id) return res.status(400);

  const item = ITEMS.find((item) => item.id === Number(id));
  return res.json(item);
});

app.post("/items", (req, res) => {
  const { content } = req.body;
  const newId = ITEMS.reduce((maxId, item) => Math.max(maxId, item.id), 0) + 1;

  const newItem = {
    id: newId,
    content,
  };

  ITEMS.push(newItem);

  res.json(newItem);
});

app.put("/items/:id", (req, res) => {
  const { id } = req.params;
  const { content } = req.body;
  const foundItem = ITEMS.find((item) => item.id === Number(id));
  foundItem.content = content;

  return res.json(foundItem);
});

app.delete("/items/:id", (req, res) => {
  const { id } = req.params;
  const itemIndex = ITEMS.findIndex((item) => item.id === Number(id));

  ITEMS.splice(itemIndex, 1);
  return res.status(200).json();
});

export const server = app.listen(PORT, () => {
  console.log(
    `Server listener on:\nPort: ${PORT}\nServer: http://localhost:${PORT}`
  );
});
