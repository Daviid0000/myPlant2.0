import { createServer } from 'http';
import { Server } from 'socket.io';
import express from 'express';
import 'dotenv/config';
import './src/models/user.js';
import './src/models/publication.js';
import publicationRouter from './src/routes/publication.routes.js';
import { userRoutes } from './src/routes/user.routes.js';

const app = express();
const httpServer = createServer();
const io = new Server(httpServer);
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use('/publication', publicationRouter);
app.use('/user', userRoutes);

io.on("connection", (socket) => {
    console.log(`User connected: ${socket.id}`);

    socket.on("disconnect", (reason) => {
        console.log(`User disconnected: ${socket.id}. Reason: ${reason}`);
    });

    socket.on("title", (title) => {
        console.log("Titulo de receta: ", title);
    });

    socket.on("recipe", (recipe) => {
        console.log("Receta en el servidor: ", recipe);
    });
});


app.listen(PORT, () => {
    console.log(`server in listening http://localhost:${PORT}`);
});