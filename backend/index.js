import expess from "express";
import { PORT } from "./config.js";

const app = expess();

    app.listen(PORT, () => {
        console.log(`App is listening to port: ${PORT   }`);
    })