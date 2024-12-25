import { createServer } from 'http';
import { Server } from 'socket.io';

const httpServer = createServer();
const io = new Server(httpServer);

io.on("connection", (socket) => {
    console.log(`User connected: ${socket.id}`);

    socket.on("disconnect", (reason) => {
        console.log(`User disconnected: ${socket.id}. Reason: ${reason}`);
    })

    socket.on("title", (title) => {
        console.log("Titulo de receta: ", title);
    });

    socket.on("recipe", (recipe) => {
        console.log("Receta en el servidor: ", recipe);
    });
});

httpServer.listen(3000, () => {
    console.log("server in listening http://localhost:3000");
});