import "dotenv/config";
import express, { Application } from "express";
import initDatabase from "./utils/dbConnection";
import errorHandler from "./utils/errorHandler";

const port: number = Number(process.env.PORT) || 3000;

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(errorHandler);
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
    initDatabase();
});
