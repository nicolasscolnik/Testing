import express from "express";
import { Server } from "socket.io"; // Importa la clase Server de socket.io
import http from "http"; // Necesario para usar Socket.IO con express
import cors from "cors";
import router from "./routes/router.js";
import connection from "./connection/connection.js";

const app = express();
const server = http.createServer(app); // Crea un servidor HTTP usando express

// Configura CORS para permitir solicitudes desde http://localhost:5173
app.use(cors({
  origin: "http://localhost:5173",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", router);

await connection.sync({ force: false}).then(() => {
  server.listen(8080, () => {
    console.log(`🚀 ~ app.listen ~ listen: http://localhost:8080`)
  });
});

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
  },
});

io.on("connection", (socket) => {
  console.log("Usuario conectado");

  io.emit("messageOut", "inicio de CHATBOX SOCKET.IO");

  socket.on("message", (message) => {
    console.log("Mensaje recibido:", message);
    // Reenviar el mensaje a todos los clientes conectados.
    io.emit("messageOut", message);
  });

  socket.on("storeArena", (store) => {
    console.log("Mensaje recibido:", store);
    // Reenviar el mensaje a todos los clientes conectados.
    io.emit("messageOut", store);
  });

  socket.on("disconnect", () => {
    console.log("Usuario desconectado");
  });
});

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hola server!");
});