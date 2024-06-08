import expess from "express";
import { PORT, mongoDBURL} from "./config.js";
import mongoose from "mongoose";

const app = expess();   

app.get('/', (request, response) => {
    console.log(request)
    return response.status(234).send('Welcome');
});

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('App connected to database');
        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT   }`);
        })
    })
    .catch((error) => {
        console.log(error);
    });