const jsonServer = require("json-server");
const  server = jsonServer.create();
const router = jsonServer.router("db/db.json");
const middlewares = jsonServer.defaults();
const port = proccess.env.PORT || 9000;

server.use(middlewares);
server.use(router);
server.listener(port)