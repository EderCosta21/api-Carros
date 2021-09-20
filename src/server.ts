import express, { request, response } from 'express';

const app = express();
app.get("/", (request, response) => {
    return response.json({ message: "Seja bem vindo" });
}); 
app.use(express.json())
;app.post("/courses", (request, response) => {
  
    const {name } = request.body;

    return response.json({name});
})

app.listen(3333, () => console.log("server is running!"));  