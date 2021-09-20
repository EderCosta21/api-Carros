import express, { request, response } from 'express';
import { categoriesRoutes } from './routes/categories.routes';
import {  specificationsRoutes } from './routes/specificaty.routes';
const app = express();
app.get("/", (request, response) => {
    return response.json({ message: "Seja bem vindo" });
});
app.use(express.json())
app.use("/categories", categoriesRoutes);
app.use("/specifications",specificationsRoutes );
app.listen(3333, () => console.log("server is running!"));
