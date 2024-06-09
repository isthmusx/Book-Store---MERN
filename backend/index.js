import expess, { request, response } from "express";
import { PORT, mongoDBURL} from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import bookRoute from './routes/booksRoute.js';

const app = expess();   

// Middleware for parsing request body
app.use(expess.json());

app.get('/', (request, response) => {
    console.log(request)
    return response.status(234).send('Welcome');
});

app.use('/books', bookRoute);

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