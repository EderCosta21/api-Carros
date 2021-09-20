import express, { request, response } from 'express';
import { categoriesRoutes } from './routes/categories.routes';
const app = express();
app.get("/", (request, response) => {
    return response.json({ message: "Seja bem vindo" });
});
app.use(express.json())
app.use("/categories", categoriesRoutes);

app.listen(3333, () => console.log("server is running!"));