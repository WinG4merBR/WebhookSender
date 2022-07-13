import express, { Application } from 'express';
import path from 'path';

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static("./views"));
app.set('view engine', 'ejs');

app.use('/', require("../routes/controller/WebhookSender"));

app.listen(8081, () => {
    console.log(`[APP] Servidor iniciado na porta ${8081}`);
});